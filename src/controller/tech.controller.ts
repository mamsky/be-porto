import { v2 as cloudinary } from "cloudinary";
import { extractPublicId } from "cloudinary-build-url";
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
    if (!data) {
      res.status(404).json({ message: "Data not available" });
      return;
    }
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

    if (!data) {
      res.status(404).json({ message: "Data not available" });
      return;
    }

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
    let uploadResult: string | undefined;
    if (!req.file) {
      res.status(400).json({ message: "Image Required" });
      return;
    }

    uploadResult = req.file.path;
    const body = { ...req.body, images: uploadResult };
    const { error, value } = TechSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(req.file.filename || "");
      res.status(400).json({ message: error.details[0].message });
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
    const getData = await getDataTechWithIdService(id);
    if (!getData) {
      res.status(404).json({ error: "Data not found" });
      return;
    }

    let uploadResult: string | undefined;
    const url = getData?.images;
    const cloudinaryPublicId = extractPublicId(url);

    if (req.file) {
      uploadResult = req.file.path;
    }

    const body = { ...req.body, images: uploadResult ?? url };

    const { error, value } = TechSchemas.validate(body);

    if (error) {
      if (req.file) {
        await cloudinary.uploader.destroy(req.file.filename || "");
      }
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    if (req.file && url) {
      await cloudinary.uploader.destroy(cloudinaryPublicId || "");
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
    const getData = await getDataTechWithIdService(id);

    if (!getData) {
      res.status(404).json({ message: "Data not found" });
      return;
    }

    const url = getData?.images;
    const cloudinaryPublicId = extractPublicId(url);
    await cloudinary.uploader.destroy(cloudinaryPublicId || "");

    const data = await deleteDataTechService(id);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
