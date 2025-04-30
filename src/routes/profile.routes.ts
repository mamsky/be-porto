import express from "express";
import {
  createDataProfileController,
  deleteDataProfileController,
  getDataProfileController,
  updateDataProfileController,
} from "../controller/profile.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", authCheck, getDataProfileController);
router.post("/", authCheck, createDataProfileController);
router.put("/:id", authCheck, updateDataProfileController);
router.delete("/:id", authCheck, deleteDataProfileController);

export default router;
