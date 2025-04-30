import express from "express";
import {
  createDataProjectController,
  getAllProjectController,
} from "../controller/project.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", authCheck, getAllProjectController);
router.post("/", authCheck, createDataProjectController);

export default router;
