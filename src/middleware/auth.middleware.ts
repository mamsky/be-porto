import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JwtRequest } from "../utils/types/jwt-request.types";

export const authCheck = (
  req: JwtRequest,
  res: Response,
  next: NextFunction
) => {
  let header = req.headers["authorization"] || "";

  if (header.split(" ").length > 1) {
    header = header.split(" ")[1];
  }

  const secretKey = process.env.SECRET_KEY || "";

  try {
    const isTokenVerified = jwt.verify(header, secretKey);
    req.user = isTokenVerified;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized!!!" });
  }
};
