import express from "express";
import { getAllProjectController } from "../controller/project.controller";
const router = express.Router();

router.get("/", getAllProjectController);

export default router;
