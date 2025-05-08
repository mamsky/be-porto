import { v2 as cloudinary } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const cloudinaryCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  next();
};
