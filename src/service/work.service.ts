import { PrismaClient } from "@prisma/client";
import { WorkDTO } from "../utils/types/work.types";
const prisma = new PrismaClient();

export const getAllDataWork = async () => {
  return await prisma.work.findMany({
    omit: {
      userId: true,
    },
    include: {
      description: {
        omit: {
          descriptionId: true,
        },
      },
    },
  });
};

export const createDataWorkService = async (
  userId: string,
  { title, date, description, images, location }: WorkDTO
) => {
  return prisma.work.create({
    data: {
      userId,
      title,
      description: {
        createMany: {
          data: description.map((desc) => ({ desc })),
        },
      },
      location,
      date,
      images,
    },
    include: {
      description: true,
    },
  });
};
