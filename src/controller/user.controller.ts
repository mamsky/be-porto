import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import { NextFunction, Request, Response } from "express";
import {
  createUserData,
  getAllUser,
  getUserByEmail,
  getUserByEmailOrUsername,
  getUserById,
  getUserByUsername,
} from "../service/user.service";
import { authSchema, userSchema } from "../utils/schemas/user.schemas";
import { UserDTO } from "../utils/types/user.types";
const dice = 10;
import jwt from "jsonwebtoken";

export const getDataAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllUser();
    if (!data) {
      res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const createDataUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const validateBody = await userSchema.validateAsync(body);

    const isUsername = await getUserByUsername(validateBody.username);
    if (isUsername) {
      res.status(500).json({ message: "Username Already Used" });
      return;
    }

    const isEmail = await getUserByEmail(validateBody.email);
    if (isEmail) {
      res.status(500).json({ message: "Email Already Used" });
      return;
    }

    const hashPassword = await bcrypt.hash(validateBody.password, dice);
    const data: UserDTO = {
      ...validateBody,
      password: hashPassword,
    };
    const createDataUser = await createUserData(data);

    res.status(200).json({ message: "success", data: createDataUser });
  } catch (error) {
    next(error);
  }
};

export const authDataUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtKey = process.env.SECRET_KEY || "";
    const body = req.body;

    const validateBody = await authSchema.validateAsync(body);

    const isUser = await getUserByEmailOrUsername(validateBody);

    if (!isUser) {
      res.status(404).json({ message: "Username Or Password Wrong" });
      return;
    }

    const passwordValid = await bcrypt.compare(body.password, isUser.password);

    if (!passwordValid) {
      res.status(404).json({ message: "Username Or Password Wrong" });
      return;
    }

    const token = jwt.sign(
      {
        id: isUser.id,
      },
      jwtKey,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "success", token });
  } catch (error) {
    next(error);
  }
};

export const userCheckController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).user.id;

    const checkData = await getUserById(userId);

    if (!checkData) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const { password: unUsedPassword, ...userData } = checkData;
    res.status(200).json({ message: "success", data: { ...userData } });
  } catch (error) {
    next(error);
  }
};
