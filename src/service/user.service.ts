import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../utils/types/user.types";
const prisma = new PrismaClient();

export const getAllUser = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findFirst({
    where: { id },
  });
};

export const getUserByUsername = async (username: string) => {
  return await prisma.user.findFirst({
    where: {
      username,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
};

export const getUserByEmailOrUsername = async (body: UserDTO) => {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email: body.email }, { username: body.username }],
    },
  });
};

export const createUserData = async (data: UserDTO) => {
  return await prisma.user.create({
    data,
  });
};
