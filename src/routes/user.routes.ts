import express from "express";
import {
  authDataUser,
  createDataUser,
  getDataAllUser,
  userCheckController,
} from "../controller/user.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", authCheck, getDataAllUser);
router.post("/", createDataUser);
router.get("/check", authCheck, userCheckController);
router.post("/auth", authDataUser);

export default router;
