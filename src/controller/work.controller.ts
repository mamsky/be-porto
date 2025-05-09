import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import {
  createDataWorkService,
  deleteDataWorkService,
  getAllDataWork,
  getDataWorkByIdService,
  updateDataWorkService,
} from "../service/work.service";
import { WorkSchema } from "../utils/schemas/work.shemas";
import { extractPublicId } from "cloudinary-build-url";

export const getDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllDataWork();

    if (!data) {
      res.status(404).json({ message: "No data available", data });
      return;
    }

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const createDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = (req as any).user.id;
    let uploadResult: string | undefined;

    if (req.file) {
      uploadResult = req.file.path;
    }

    const body = {
      ...req.body,
      description: JSON.parse(req.body.description),
      techstack: JSON.parse(req.body.techstack),
      images: uploadResult ?? undefined,
    };

    const { error, value } = WorkSchema.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(req.file?.filename || "");
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const data = await createDataWorkService(id, value);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};

export const updateDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const getDataById = await getDataWorkByIdService(id);

    if (!getDataById) {
      res.status(404).json({ mesasge: "No data available" });
      return;
    }

    let uploadResult: string | undefined;
    const url = getDataById?.images;
    const cloudinaryPubliId = extractPublicId(url);

    if (req.file) {
      uploadResult = req.file.path;
    }

    const body = {
      ...req.body,
      description: JSON.parse(req.body.description),
      techstack: JSON.parse(req.body.techstack),
      images: uploadResult ?? undefined,
    };

    const { error, value } = WorkSchema.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(req.file?.filename || "");
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    if (value) {
      if (req.file) {
        await cloudinary.uploader.destroy(cloudinaryPubliId || "");
      }
      const data = await updateDataWorkService(value, id);

      res.status(200).json({ message: "success", data });
      return;
    }
  } catch (error) {
    next(error);
  }
};

export const deleteDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const findData = await getDataWorkByIdService(id);
    if (!findData) {
      res.status(404).json({ message: "Data Not Found" });
      return;
    }

    const url = findData?.images;
    const cloudinaryPubliId = extractPublicId(url);
    await cloudinary.uploader.destroy(cloudinaryPubliId || "");

    const deleteData = await deleteDataWorkService(id);
    res.status(200).json({ message: "success", data: deleteData });
  } catch (error) {
    next(error);
  }
};

export const getDataWorkByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const data = await getDataWorkByIdService(id);
    if (!data) {
      res.status(404).json({ mesasge: "No data available" });
      return;
    }

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
