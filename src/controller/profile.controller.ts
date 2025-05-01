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
    // const data = await getDataProfileByIdService(userId);
    const data = await getDataProfileService();

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

    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path || "");
      fs.unlinkSync(req.file.path);
    }

    const body = { ...req.body, images: uploadResult.secure_url ?? undefined };

    const { error, value } = createProfileSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(uploadResult.public_id);
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
    let uploadResult: UploadApiResponse = {} as UploadApiResponse;

    const checkData = await getDataProfileFindByIdService(id);
    if (!checkData) {
      res.status(404).json({ message: "Data Not found" });
      return;
    }

    const getDataById = await getDataProfileFindByIdService(id);
    const url = getDataById?.images;
    const fileName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path || "");
      fs.unlinkSync(req.file.path);
    }

    const body = { ...req.body, images: uploadResult.secure_url ?? undefined };

    const { error, value } = createProfileSchemas.validate(body);
    if (error) {
      await cloudinary.uploader.destroy(uploadResult.secure_url);
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    if (value) {
      await cloudinary.uploader.destroy(fileName || "");
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

    const getDataById = await getDataProfileFindByIdService(id);
    const url = getDataById?.images;
    const fileName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    const checkData = await getDataProfileFindByIdService(id);

    if (!checkData) {
      res.status(404).json({ message: "data not found" });
      return;
    }

    const deleteImage = await cloudinary.uploader.destroy(fileName || "");

    if (deleteImage) {
      const data = await deleteDataProfileService(id);
      res.status(200).json({ message: "success", data });
      return;
    }
  } catch (error) {
    next(error);
  }
};
