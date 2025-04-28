import express from "express";
const group = express.Router();

import TestRoutes from "../routes/test.routes";

group.use("/test", TestRoutes);

export default group;
