import express from "express";
import {
  createDataWork,
  deleteDataWork,
  getDataWork,
  getDataWorkByIdController,
  updateDataWork,
} from "../controller/work.controller";
import { authCheck } from "../middleware/auth.middleware";
import { uploadImage } from "../middleware/multer.middleware";
import { cloudinaryStorage } from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getDataWork);
router.get("/:id", authCheck, getDataWorkByIdController);
router.post(
  "/",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  createDataWork
);
router.put(
  "/:id",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  updateDataWork
);
router.delete("/:id", authCheck, cloudinaryStorage, deleteDataWork);

export default router;
