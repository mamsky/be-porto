import express from "express";
import {
  authDataUser,
  createDataUser,
  getDataAllUser,
} from "../controller/user.controller";
const router = express.Router();

router.get("/", getDataAllUser);
router.post("/", createDataUser);
router.post("/auth", authDataUser);

export default router;
