import express from "express";
import {
  createDataProjectController,
  deleteDataProjectController,
  getAllProjectController,
  getDataProjectByIdController,
  updateDataProjectController,
} from "../controller/project.controller";
import { authCheck } from "../middleware/auth.middleware";
import cloudinaryUpload from "../middleware/cloudinary.middleware";
import { cloudinaryCheck } from "../middleware/cloudinary.check";
const router = express.Router();

router.get("/", getAllProjectController);
router.get("/:id", authCheck, getDataProjectByIdController);
router.post(
  "/",
  authCheck,
  cloudinaryUpload.single("images"),
  createDataProjectController
);
router.put(
  "/:id",
  authCheck,
  cloudinaryUpload.single("images"),
  updateDataProjectController
);
router.delete("/:id", authCheck, cloudinaryCheck, deleteDataProjectController);

export default router;
