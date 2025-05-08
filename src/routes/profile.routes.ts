import express from "express";
import {
  createDataProfileController,
  deleteDataProfileController,
  getDataProfileController,
  updateDataProfileController,
} from "../controller/profile.controller";
import { authCheck } from "../middleware/auth.middleware";
import cloudinaryStorage from "../middleware/cloudinary.middleware";
import { cloudinaryCheck } from "../middleware/cloudinary.check";
const router = express.Router();

router.get("/", getDataProfileController);
router.post(
  "/",
  authCheck,
  cloudinaryStorage.single("images"),
  createDataProfileController
);
router.put(
  "/:id",
  authCheck,
  cloudinaryStorage.single("images"),
  updateDataProfileController
);

router.delete("/:id", authCheck, cloudinaryCheck, deleteDataProfileController);

export default router;
