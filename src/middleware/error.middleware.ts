import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Joi.ValidationError) {
    res.status(400).json({
      message: err.details[0].message,
    });
    return;
  }

  if (err instanceof PrismaClientKnownRequestError) {
    const { message } = err;
    res.status(400).json({
      message: message || "Terjadi kesalahan pada database.",
    });
    return;
  }

  res
    .status(500)
    .json({ message: `Internal Server Error! Error: ${JSON.stringify(err)}` });
}
