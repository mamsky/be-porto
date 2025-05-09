import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import {
  createDataProfileService,
  deleteDataProfileService,
  getDataProfileByIdService,
  getDataProfileFindByIdService,
  getDataProfileService,
  updateDataProfileService,
} from "../service/profile.service";
import { createProfileSchemas } from "../utils/schemas/profile.schemas";
import { extractPublicId } from "cloudinary-build-url";

export const getDataProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getDataProfileService();
    if (!data) {
      res.status(404).json({ message: "No data available" });
      return;
    }

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
    const existingProfile = await getDataProfileByIdService(userId);

    if (!req.file) {
      res.status(400).json({ message: "Image Required" });
      return;
    }

    const body = { ...req.body, images: req.file.path };
    const { error, value } = createProfileSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(req.file.filename || "");
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    if (existingProfile) {
      await cloudinary.uploader.destroy(req.file.filename || "");
      res.status(400).json({ message: "you can only make one data" });
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
    let uploadResult: string | undefined;

    const existingData = await getDataProfileFindByIdService(id);
    const url = existingData?.images;
    const publiIdCloudinary = extractPublicId(url || "");

    if (!existingData) {
      await cloudinary.uploader.destroy(req.file?.filename || "");
      res.status(404).json({ message: "Data Not found" });
      return;
    }

    if (req.file) {
      uploadResult = req.file.path;
    }
    const body = { ...req.body, images: uploadResult ?? url };

    const { error, value } = createProfileSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(req.file?.filename || "");
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    if (value) {
      if (req.file) {
        await cloudinary.uploader.destroy(publiIdCloudinary || "");
      }
      const data = await updateDataProfileService(id, value);
      res.status(200).json({ message: "success", data });
      return;
    }
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

    const existingData = await getDataProfileFindByIdService(id);
    const publiIdCloudinary = extractPublicId(existingData?.images || "");

    if (!existingData) {
      res.status(404).json({ message: "data not found" });
      return;
    }

    if (existingData?.images) {
      await cloudinary.uploader.destroy(publiIdCloudinary || "");
    }

    const data = await deleteDataProfileService(id);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
