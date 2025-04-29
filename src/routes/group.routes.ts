import express from "express";
const group = express.Router();

import TestRoutes from "../routes/test.routes";
import UserRoutes from "../routes/user.routes";

group.use("/users", UserRoutes);
group.use("/test", TestRoutes);

export default group;
