import express from "express";
import { TestController } from "../controller/test.controller";

const router = express.Router();

router.get("/", TestController);

export default router;
