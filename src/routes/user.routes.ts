import express from "express";
import {
  authDataUser,
  createDataUser,
  getDataAllUser,
} from "../controller/user.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", getDataAllUser);
router.post("/", createDataUser);
router.post("/auth", authDataUser);

export default router;
