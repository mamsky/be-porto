import express from "express";
import {
  createDataTechnologyController,
  deleteDataTechController,
  getAllDataTechnologyController,
  getDataTechByIdController,
  updateDataTechController,
} from "../controller/tech.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", authCheck, getAllDataTechnologyController);
router.get("/:id", authCheck, getDataTechByIdController);
router.post("/", authCheck, createDataTechnologyController);
router.put("/:id", authCheck, updateDataTechController);
router.delete("/:id", authCheck, deleteDataTechController);

export default router;
