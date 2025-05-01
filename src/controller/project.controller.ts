import { NextFunction, Request, Response } from "express";
import {
  createDataProjectService,
  deleteDataProjectService,
  getAllDataProjectService,
  getDataProjectByIdService,
  updateDataProjectService,
} from "../service/project.service";
import { ProjectSchemas } from "../utils/schemas/project.schemas";

export const getAllProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllDataProjectService();

    if (data.length <= 0) {
      res.status(404).json({ message: "don't have data yet" });
    }

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const createDataProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).user.id;
    const body = req.body;

    const { error, value } = ProjectSchemas.validate(body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await createDataProjectService(userId, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const updateDataProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).user.id;
    const body = req.body;
    const { id } = req.params;

    const { error, value } = ProjectSchemas.validate(body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await updateDataProjectService(id, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const deleteDataProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const data = await deleteDataProjectService(id);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const getDataProjectByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const data = await getDataProjectByIdService(id);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
