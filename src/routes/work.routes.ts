import express from "express";
import {
  createDataWork,
  deleteDataWork,
  getDataWork,
  getDataWorkByIdController,
  updateDataWork,
} from "../controller/work.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", authCheck, getDataWork);
router.get("/:id", authCheck, getDataWorkByIdController);
router.post("/", authCheck, createDataWork);
router.put("/:id", authCheck, updateDataWork);
router.delete("/:id", authCheck, deleteDataWork);

export default router;
