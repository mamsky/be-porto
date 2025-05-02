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
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import fs from "fs";

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
    let uploadResult: UploadApiResponse = {} as UploadApiResponse;

    if (!req.file) {
      res.status(400).json({ error: "Image Required" });
      return;
    }

    uploadResult = await cloudinary.uploader.upload(req.file.path || "");
    fs.unlinkSync(req.file.path);

    const body = { ...req.body, images: uploadResult.secure_url };

    const { error, value } = createProfileSchemas.validate(body);

    const existingProfile = await getDataProfileByIdService(userId);

    if (error) {
      await cloudinary.uploader.destroy(uploadResult.public_id || "");
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    if (existingProfile) {
      await cloudinary.uploader.destroy(uploadResult.public_id || "");
      res.status(400).json({ error: "you can only make one data" });
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
    let uploadResult: UploadApiResponse = {} as UploadApiResponse;

    const existingData = await getDataProfileFindByIdService(id);
    const url = existingData?.images;
    const fileName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path || "");
      fs.unlinkSync(req.file.path);
    }

    const body = { ...req.body, images: uploadResult.secure_url ?? url };

    const { error, value } = createProfileSchemas.validate(body);
    if (!existingData) {
      await cloudinary.uploader.destroy(uploadResult.public_id || "");
      res.status(404).json({ message: "Data Not found" });
      return;
    }

    if (error) {
      await cloudinary.uploader.destroy(uploadResult.public_id);
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    if (value) {
      if (req.file) {
        await cloudinary.uploader.destroy(fileName || "");
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
    const url = existingData?.images;
    const fileName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (!existingData) {
      res.status(404).json({ message: "data not found" });
      return;
    }

    if (url) {
      await cloudinary.uploader.destroy(fileName || "");
    }

    const data = await deleteDataProfileService(id);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
