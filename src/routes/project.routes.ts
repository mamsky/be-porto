import express from "express";
import {
  createDataProjectController,
  deleteDataProjectController,
  getAllProjectController,
  getDataProjectByIdController,
  updateDataProjectController,
} from "../controller/project.controller";
import { authCheck } from "../middleware/auth.middleware";
import { uploadImage } from "../middleware/multer.middleware";
import { cloudinaryStorage } from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getAllProjectController);
router.get("/:id", authCheck, getDataProjectByIdController);
router.post(
  "/",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  createDataProjectController
);
router.put(
  "/:id",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  updateDataProjectController
);
router.delete(
  "/:id",
  authCheck,
  cloudinaryStorage,
  deleteDataProjectController
);

export default router;
