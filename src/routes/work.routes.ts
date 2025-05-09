import express from "express";
import {
  createDataWork,
  deleteDataWork,
  getDataWork,
  getDataWorkByIdController,
  updateDataWork,
} from "../controller/work.controller";
import { authCheck } from "../middleware/auth.middleware";
import cloudinaryStorage from "../middleware/cloudinary.middleware";
const router = express.Router();

router.get("/", getDataWork);
router.get("/:id", authCheck, getDataWorkByIdController);
router.post("/", authCheck, cloudinaryStorage.single("images"), createDataWork);
router.put(
  "/:id",
  authCheck,
  cloudinaryStorage.single("images"),
  updateDataWork
);
router.delete("/:id", authCheck, deleteDataWork);

export default router;
