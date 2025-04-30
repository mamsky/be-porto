import { PrismaClient } from "@prisma/client";
import { ProfileDTO } from "../utils/types/profile.types";
const prisma = new PrismaClient();

export const getDataProfileByIdService = (userId: string) => {
  return prisma.profile.findFirst({
    where: {
      userId,
    },
  });
};

export const createDataProfileService = (userId: string, datas: ProfileDTO) => {
  const { status, ...datasProfile } = datas;
  return prisma.profile.create({
    data: {
      userId,
      ...datasProfile,
      status: status,
    },
  });
};

export const updateDataProfileService = (id: string, data: ProfileDTO) => {
  return prisma.profile.update({
    where: { id },
    data,
  });
};

export const deleteDataProfileService = (id: string) => {
  return prisma.profile.delete({
    where: { id },
  });
};

export const getDataProfileFindByIdService = (id: string) => {
  return prisma.profile.findFirst({
    where: { id },
  });
};
