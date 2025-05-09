import express from "express";
import {
  createDataProjectController,
  deleteDataProjectController,
  getAllProjectController,
  getDataProjectByIdController,
  updateDataProjectController,
} from "../controller/project.controller";
import { authCheck } from "../middleware/auth.middleware";
import cloudinaryStorage from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getAllProjectController);
router.get("/:id", authCheck, getDataProjectByIdController);
router.post(
  "/",
  authCheck,
  cloudinaryStorage.single("images"),
  createDataProjectController
);
router.put(
  "/:id",
  authCheck,
  cloudinaryStorage.single("images"),
  updateDataProjectController
);
router.delete("/:id", authCheck, deleteDataProjectController);

export default router;
