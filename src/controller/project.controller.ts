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
import { extractPublicId } from "cloudinary-build-url";

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

    if (!req.file) {
      res.status(400).json({ message: "Image required" });
      return;
    }

    const body = {
      ...req.body,
      techstack: JSON.parse(req.body.techstack),
      images: req.file.path,
    };

    const { error, value } = ProjectSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(req.file.filename);
      res.status(400).json({ message: error.details[0].message });
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
      res.status(404).json({ message: "Data not found" });
      return;
    }

    let images: string | undefined;
    const url = getDataProject?.images;
    const cloudinaryIdPublic = extractPublicId(url);

    if (req.file) {
      images = req.file.path;
    } else {
      images = url;
    }

    const body = {
      ...req.body,
      demo: req.body.demo || null,
      github: req.body.github || null,
      techstack: JSON.parse(req.body.techstack),
      images,
    };

    const { error, value } = ProjectSchemas.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(req.file?.filename || "");
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    if (value) {
      if (req.file) {
        await cloudinary.uploader.destroy(cloudinaryIdPublic);
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
    const url = getData?.images;
    if (!getData) {
      res.status(404).json({ message: "Data not found" });
      return;
    }

    const publiIdCloudinary = extractPublicId(url || "");

    await cloudinary.uploader.destroy(publiIdCloudinary);
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
