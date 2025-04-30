import { NextFunction, Request, Response } from "express";

export const getAllProjectController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.send("hallo projects");
  } catch (error) {
    next(error);
  }
};
