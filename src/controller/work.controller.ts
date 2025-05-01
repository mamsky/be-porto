import { NextFunction, Request, Response } from "express";
import {
  createDataWorkService,
  deleteDataWorkService,
  getAllDataWork,
  getDataWorkByIdService,
  updateDataWorkService,
} from "../service/work.service";
import { WorkSchema } from "../utils/schemas/work.shemas";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { array } from "joi";

export const getDataWork = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllDataWork();

    if (data.length <= 0) {
      res.status(404).json({ message: "don't have data yet" });
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
    let uploadResult: UploadApiResponse = {} as UploadApiResponse;

    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path || "");
      fs.unlinkSync(req.file.path);
    }

    if (!id) {
      res.status(404).json({ message: "Unauthorize!!!" });
      return;
    }
    const desc = Array.isArray(req.body.description)
      ? req.body.description
      : [req.body.description];

    const body = {
      ...req.body,
      description: desc,
      images: uploadResult.secure_url ?? undefined,
    };

    const { error, value } = WorkSchema.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(uploadResult.public_id);
      res.status(400).json({ error: error.details[0].message });
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
    const userId = (req as any).user.id;
    const { id } = req.params;
    let uploadResult: UploadApiResponse = {} as UploadApiResponse;

    const getDataById = await getDataWorkByIdService(id);
    const url = getDataById?.images;
    const fileName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (!userId) {
      res.status(404).json({ message: "Unauthorize!!!" });
      return;
    }

    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path || "");
      fs.unlinkSync(req.file.path);
    }

    const desc = Array.isArray(req.body.description)
      ? req.body.description
      : [req.body.description];

    const body = {
      ...req.body,
      description: desc,
      images: uploadResult.secure_url ?? undefined,
    };

    const { error, value } = WorkSchema.validate(body);

    if (error) {
      await cloudinary.uploader.destroy(uploadResult.public_id);
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    if (value) {
      await cloudinary.uploader.destroy(fileName || "");
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
    const url = findData?.images;
    const fieldName = url?.substring(url.lastIndexOf("/") + 1).split(".")[0];

    if (!findData) {
      res.status(404).json({ message: "Data Not Found" });
      return;
    }

    await cloudinary.uploader.destroy(fieldName || "");
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

    res.status(200).json({ message: "success", data });
  } catch (error) {
    next(error);
  }
};
