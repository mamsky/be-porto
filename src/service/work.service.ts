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

export const updateDataWorkService = async (
  { date, description, images, location, title }: WorkDTO,
  id: string
) => {
  return prisma.$transaction(async (tx) => {
    await tx.arrDesc.deleteMany({
      where: {
        descriptionId: id,
      },
    });

    const updateWorkData = await tx.work.update({
      where: {
        id,
      },
      data: {
        title,
        description: {
          createMany: {
            data: description.map((desc) => ({ desc })),
          },
        },
        location,
        images,
        date,
      },
      include: {
        description: true,
      },
    });

    return updateWorkData;
  });
};

export const deleteDataWorkService = async (id: string) => {
  return prisma.$transaction(async (tx) => {
    await tx.arrDesc.deleteMany({
      where: {
        descriptionId: id,
      },
    });

    const deleteDataWork = await tx.work.delete({
      where: {
        id,
      },
    });
    return deleteDataWork;
  });
};
