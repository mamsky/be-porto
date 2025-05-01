import express from "express";
import {
  createDataTechnologyController,
  deleteDataTechController,
  getAllDataTechnologyController,
  getDataTechByIdController,
  updateDataTechController,
} from "../controller/tech.controller";
import { authCheck } from "../middleware/auth.middleware";
import { uploadImage } from "../middleware/multer.middleware";
import { cloudinaryStorage } from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getAllDataTechnologyController);
router.get("/:id", authCheck, getDataTechByIdController);
router.post(
  "/",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  createDataTechnologyController
);
router.put(
  "/:id",
  authCheck,
  uploadImage.single("images"),
  cloudinaryStorage,
  updateDataTechController
);
router.delete("/:id", authCheck, cloudinaryStorage, deleteDataTechController);

export default router;
