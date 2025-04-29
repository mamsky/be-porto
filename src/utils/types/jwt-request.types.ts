import { Request } from "express";
import jwt from "jsonwebtoken";

export interface JwtRequest extends Request {
  user?: string | jwt.JwtPayload;
}
