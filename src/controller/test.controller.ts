import { Request, Response } from "express";

export const TestController = (req: Request, res: Response) => {
  res.status(200).json({ message: "Success Test" });
};
