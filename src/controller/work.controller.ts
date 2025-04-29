import { NextFunction, Request, Response } from "express";
import { createDataWorkService, getAllDataWork } from "../service/work.service";
import { WorkSchema } from "../utils/schemas/work.shemas";

export const getDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllDataWork();

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const createDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const id = (req as any).user.id;

    const { error, value } = WorkSchema.validate(body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await createDataWorkService(id, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
