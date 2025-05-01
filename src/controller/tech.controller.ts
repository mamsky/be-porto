import { NextFunction, Request, Response } from "express";
import {
  createDataTechService,
  deleteDataTechService,
  getAllDataTechService,
  getDataTechWithIdService,
  updateDataTechService,
} from "../service/tech.service";
import { TechSchemas } from "../utils/schemas/tech.schemas";

export const getAllDataTechnologyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllDataTechService();
    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const getDataTechByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const data = await getDataTechWithIdService(id);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const createDataTechnologyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = (req as any).user;
    const body = req.body;

    console.log(id);

    const { error, value } = await TechSchemas.validate(body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await createDataTechService(id, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const updateDataTechController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const { error, value } = await TechSchemas.validate(body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await updateDataTechService(id, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const deleteDataTechController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const data = await deleteDataTechService(id);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
