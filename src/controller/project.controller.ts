import { NextFunction, Request, Response } from "express";
import {
  createDataProjectService,
  deleteDataProjectService,
  getAllDataProjectService,
  getDataProjectByIdService,
  updateDataProjectService,
} from "../service/project.service";
import { ProjectSchemas } from "../utils/schemas/project.schemas";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const getAllProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllDataProjectService();

    if (!data) {
      res.status(404).json({ message: "Data not available" });
      return;
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
    let uploadResult: UploadApiResponse = {} as UploadApiResponse;

    if (!req.file) {
      res.status(400).json({ message: "Image required" });
      return;
    }

    uploadResult = await cloudinary.uploader.upload(req.file.path || "");
    fs.unlinkSync(req.file.path);

    const body = {
      ...req.body,
      techstack: JSON.parse(req.body.techstack),
      images: uploadResult.secure_url,
    };

    const { error, value } = ProjectSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(uploadResult.public_id);
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
    const { id } = req.params;
    const getDataProject = await getDataProjectByIdService(id);

    if (!getDataProject) {
      res.status(404).json({ error: "Data not found" });
      return;
    }

    let uploadResult: UploadApiResponse = {} as UploadApiResponse;
    const url = getDataProject?.images;
    const fieldName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path);
      fs.unlinkSync(req.file.path);
    }
    const body = {
      ...req.body,
      techstack: JSON.parse(req.body.techstack),
      images: uploadResult.secure_url,
    };

    const { error, value } = ProjectSchemas.validate(body);

    if (error) {
      if (req.file) {
        await cloudinary.uploader.destroy(uploadResult.public_id || "");
      }
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    if (value) {
      if (req.file) {
        await cloudinary.uploader.destroy(fieldName || "");
      }
      const data = await updateDataProjectService(id, value);

      res.status(200).json({ message: "success", data });
      return;
    }
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

    const getData = await getDataProjectByIdService(id);

    if (!getData) {
      res.status(404).json({ message: "Data not found" });
      return;
    }
    const url = getData?.images;
    const fieldName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    await cloudinary.uploader.destroy(fieldName);
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
    if (!data) {
      res.status(404).json({ message: "Data not available" });
      return;
    }

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
