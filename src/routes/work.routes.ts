import express from "express";
import {
  createDataWork,
  deleteDataWork,
  getDataWork,
  getDataWorkByIdController,
  updateDataWork,
} from "../controller/work.controller";
import { authCheck } from "../middleware/auth.middleware";
import cloudinaryUpload from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getDataWork);
router.get("/:id", authCheck, getDataWorkByIdController);
router.post("/", authCheck, cloudinaryUpload.single("images"), createDataWork);
router.put(
  "/:id",
  authCheck,
  cloudinaryUpload.single("images"),
  updateDataWork
);
router.delete("/:id", authCheck, deleteDataWork);

export default router;
