import { NextFunction, Request, Response } from "express";
import {
  createDataProfileService,
  deleteDataProfileService,
  getDataProfileByIdService,
  getDataProfileFindByIdService,
  updateDataProfileService,
} from "../service/profile.service";
import { createProfileSchemas } from "../utils/schemas/profile.schemas";

export const getDataProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).user.id;
    const data = await getDataProfileByIdService(userId);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const createDataProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).user.id;
    const body = req.body;

    const { error, value } = createProfileSchemas.validate(body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await createDataProfileService(userId, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const updateDataProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const { error, value } = createProfileSchemas.validate(body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const data = await updateDataProfileService(id, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const deleteDataProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const checkData = await getDataProfileFindByIdService(id);

    if (!checkData) {
      res.status(404).json({ message: "data not found" });
      return;
    }

    const data = await deleteDataProfileService(id);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
