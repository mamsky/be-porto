import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();

export const cloudinaryStorage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cloud_name = process.env.CLOUD_NAME;
  const api_secret = process.env.API_SECRET;
  const api_key = process.env.API_KEY;

  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
  });

  next();
};
