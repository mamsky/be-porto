import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";
import { ProjectDTO } from "../utils/types/project.types";

export const getAllDataProjectService = async () => {
  return await prisma.project.findMany({
    omit: {
      userId: true,
    },
    include: {
      techstack: {
        omit: {
          techId: true,
        },
      },
    },
  });
};

export const getDataProjectByIdService = async (id: string) => {
  return await prisma.project.findUnique({
    where: { id },
  });
};

export const createDataProjectService = async (
  userId: string,
  data: ProjectDTO
) => {
  const { techstack: stack, ...fieldData } = data;
  return await prisma.project.create({
    data: {
      userId,
      ...fieldData,
      techstack: {
        createMany: {
          data: stack.map((techstack) => ({ techstack })),
        },
      },
    },
    include: {
      techstack: true,
    },
  });
};

export const updateDataProjectService = async (
  id: string,
  data: ProjectDTO
) => {
  const { techstack: stack, ...fieldData } = data;
  return await prisma.$transaction(async (pst: Prisma.TransactionClient) => {
    await pst.arrTech.deleteMany({
      where: {
        techId: id,
      },
    });

    const updateDataProject = await pst.project.update({
      where: { id },
      data: {
        ...fieldData,
        techstack: {
          createMany: {
            data: stack.map((techstack) => ({ techstack })),
          },
        },
      },
      include: {
        techstack: true,
      },
      omit: {
        userId: true,
      },
    });
    return updateDataProject;
  });
};

export const deleteDataProjectService = async (id: string) => {
  return prisma.$transaction(async (alf: Prisma.TransactionClient) => {
    await alf.arrTech.deleteMany({
      where: {
        techId: id,
      },
    });

    const deleteDataProject = await alf.project.delete({
      where: {
        id,
      },
    });
    return deleteDataProject;
  });
};
