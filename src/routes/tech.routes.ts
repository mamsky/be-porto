import express from "express";
import {
  createDataTechnologyController,
  deleteDataTechController,
  getAllDataTechnologyController,
  getDataTechByIdController,
  updateDataTechController,
} from "../controller/tech.controller";
import { authCheck } from "../middleware/auth.middleware";
import cloudinaryStorage from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getAllDataTechnologyController);
router.get("/:id", authCheck, getDataTechByIdController);
router.post(
  "/",
  authCheck,
  cloudinaryStorage.single("images"),
  createDataTechnologyController
);
router.put(
  "/:id",
  authCheck,
  cloudinaryStorage.single("images"),
  updateDataTechController
);
router.delete("/:id", authCheck, deleteDataTechController);

export default router;
