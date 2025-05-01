import { PrismaClient, Tech } from "@prisma/client";
import { TechDTO } from "../utils/types/tech.types";
const prisma = new PrismaClient();

export const getAllDataTechService = () => {
  return prisma.tech.findMany({
    omit: {
      userId: true,
    },
  });
};

export const getDataTechWithIdService = (id: string) => {
  return prisma.tech.findFirst({
    where: {
      id,
    },
    omit: {
      userId: true,
    },
  });
};

export const createDataTechService = (userId: string, data: TechDTO) => {
  return prisma.tech.create({
    data: {
      userId,
      ...data,
    },
    omit: {
      userId: true,
    },
  });
};

export const updateDataTechService = (id: string, data: TechDTO) => {
  return prisma.tech.update({
    where: {
      id,
    },
    data,
    omit: {
      userId: true,
    },
  });
};

export const deleteDataTechService = (id: string) => {
  return prisma.tech.delete({
    where: {
      id,
    },
    omit: {
      userId: true,
    },
  });
};
