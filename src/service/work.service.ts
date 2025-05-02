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
  { title, date, description, techstack, images, location }: WorkDTO
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
      technology: {
        createMany: {
          data: techstack.map((techstack) => ({ techstack })),
        },
      },
      location,
      date,
      images,
    },
    include: {
      description: true,
      technology: true,
    },
  });
};

export const updateDataWorkService = async (
  { date, description, images, techstack, location, title }: WorkDTO,
  id: string
) => {
  return prisma.$transaction(async (tx) => {
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
        date,
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
  return prisma.$transaction(async (tx) => {
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
