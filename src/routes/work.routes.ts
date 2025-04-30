import express from "express";
import {
  createDataWork,
  deleteDataWork,
  getDataWork,
  updateDataWork,
} from "../controller/work.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", getDataWork);
router.post("/", authCheck, createDataWork);
router.put("/:id", authCheck, updateDataWork);
router.delete("/:id", authCheck, deleteDataWork);

export default router;
