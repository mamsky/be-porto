import { Prisma, PrismaClient } from "@prisma/client";
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
      technology: {
        omit: {
          techId: true,
        },
      },
    },
  });
};

export const createDataWorkService = async (
  userId: string,
  {
    title,
    company,
    startDate,
    endDate,
    description,
    techstack,
    images,
    location,
  }: WorkDTO
) => {
  return prisma.work.create({
    data: {
      userId,
      title,
      company,
      description: {
        createMany: {
          data: description.map((desc) => ({ desc })),
        },
      },
      technology: {
        createMany: {
          data: techstack.map((techstack) => ({ techstack })),
        },
      },
      location,
      startDate,
      endDate,
      images,
    },
    include: {
      description: true,
      technology: true,
    },
  });
};

export const updateDataWorkService = async (
  {
    title,
    company,
    startDate,
    endDate,
    description,
    techstack,
    images,
    location,
  }: WorkDTO,
  id: string
) => {
  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.arrDesc.deleteMany({
      where: {
        descriptionId: id,
      },
    });

    await tx.arrTechWork.deleteMany({
      where: {
        techId: id,
      },
    });

    const updateWorkData = await tx.work.update({
      where: {
        id,
      },
      data: {
        title,
        company,
        description: {
          createMany: {
            data: description.map((desc) => ({ desc })),
          },
        },
        technology: {
          createMany: {
            data: techstack.map((techstack) => ({ techstack })),
          },
        },
        location,
        images,
        startDate,
        endDate,
      },
      include: {
        description: {
          omit: {
            descriptionId: true,
          },
        },
        technology: {
          omit: {
            techId: true,
          },
        },
      },
    });

    return updateWorkData;
  });
};

export const deleteDataWorkService = async (id: string) => {
  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.arrDesc.deleteMany({
      where: {
        descriptionId: id,
      },
    });

    await tx.arrTechWork.deleteMany({
      where: {
        techId: id,
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

export const getDataWorkByIdService = async (id: string) => {
  return prisma.work.findFirst({
    where: {
      id,
    },
    include: {
      description: {
        omit: {
          descriptionId: true,
        },
      },
      technology: {
        omit: {
          techId: true,
        },
      },
    },
  });
};
