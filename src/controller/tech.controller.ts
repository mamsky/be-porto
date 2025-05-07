import { NextFunction, Request, Response } from "express";
import {
  createDataTechService,
  deleteDataTechService,
  getAllDataTechService,
  getDataTechWithIdService,
  updateDataTechService,
} from "../service/tech.service";
import { TechSchemas } from "../utils/schemas/tech.schemas";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import fs from "fs";

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

    if (!req.file) {
      res.status(400).json({ message: "Image Required" });
      return;
    }

    let uploadResult: UploadApiResponse = {} as UploadApiResponse;

    uploadResult = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);

    const body = { ...req.body, images: uploadResult.secure_url };

    const { error, value } = TechSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(uploadResult.public_id || "");
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

    let uploadResult: UploadApiResponse = {} as UploadApiResponse;
    const url = getData?.images;
    const fileName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path);
      fs.unlinkSync(req.file.path);
    }

    const body = { ...req.body, images: uploadResult.secure_url ?? url };

    const { error, value } = TechSchemas.validate(body);

    if (error) {
      if (req.file) {
        await cloudinary.uploader.destroy(uploadResult.public_id || "");
      }
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    if (req.file && url) {
      await cloudinary.uploader.destroy(fileName || "");
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
    const fileName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (url) {
      await cloudinary.uploader.destroy(fileName || "");
    }

    const data = await deleteDataTechService(id);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
