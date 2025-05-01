import express from "express";
import {
  createDataProfileController,
  deleteDataProfileController,
  getDataProfileController,
  updateDataProfileController,
} from "../controller/profile.controller";
import { authCheck } from "../middleware/auth.middleware";
import { uploadImage } from "../middleware/multer.middleware";
import { cloudinaryStorage } from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getDataProfileController);
router.post(
  "/",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  createDataProfileController
);
router.put(
  "/:id",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  updateDataProfileController
);
router.delete(
  "/:id",
  authCheck,
  cloudinaryStorage,
  deleteDataProfileController
);

export default router;
