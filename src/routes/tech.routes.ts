import express from "express";
import {
  createDataTechnologyController,
  deleteDataTechController,
  getAllDataTechnologyController,
  getDataTechByIdController,
  updateDataTechController,
} from "../controller/tech.controller";
import { authCheck } from "../middleware/auth.middleware";
import cloudinaryUpload from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getAllDataTechnologyController);
router.get("/:id", authCheck, getDataTechByIdController);
router.post(
  "/",
  authCheck,
  cloudinaryUpload.single("images"),
  createDataTechnologyController
);
router.put(
  "/:id",
  authCheck,
  cloudinaryUpload.single("images"),
  updateDataTechController
);
router.delete("/:id", authCheck, deleteDataTechController);

export default router;
