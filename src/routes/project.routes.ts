import express from "express";
import {
  createDataProjectController,
  deleteDataProjectController,
  getAllProjectController,
  getDataProjectByIdController,
  updateDataProjectController,
} from "../controller/project.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", authCheck, getAllProjectController);
router.get("/:id", authCheck, getDataProjectByIdController);
router.post("/", authCheck, createDataProjectController);
router.put("/:id", authCheck, updateDataProjectController);
router.delete("/:id", authCheck, deleteDataProjectController);

export default router;
