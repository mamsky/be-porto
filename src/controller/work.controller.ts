import { NextFunction, Request, Response } from "express";
import {
  createDataWorkService,
  deleteDataWorkService,
  getAllDataWork,
  getDataWorkByIdService,
  updateDataWorkService,
} from "../service/work.service";
import { WorkSchema } from "../utils/schemas/work.shemas";

export const getDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllDataWork();

    if (data.length <= 0) {
      res.status(404).json({ message: "don't have data yet" });
      return;
    }

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

    if (!id) {
      res.status(404).json({ message: "Unauthorize!!!" });
      return;
    }

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

export const updateDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const userId = (req as any).user.id;
    const { id } = req.params;

    if (!userId) {
      res.status(404).json({ message: "Unauthorize!!!" });
      return;
    }

    const { error, value } = WorkSchema.validate(body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await updateDataWorkService(value, id);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const deleteDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const findData = await getDataWorkByIdService(id);

    if (!findData) {
      res.status(404).json({ message: "Data Not Found" });
      return;
    }

    const deleteData = await deleteDataWorkService(id);

    res.status(200).json({ message: "success", data: deleteData });
  } catch (error) {
    next(error);
  }
};
