import express from "express";
import { createDataWork, getDataWork } from "../controller/work.controller";
import { authCheck } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", getDataWork);
router.post("/", authCheck, createDataWork);

export default router;
