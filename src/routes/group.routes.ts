import express from "express";
const group = express.Router();

import TestRoutes from "../routes/test.routes";
import UserRoutes from "../routes/user.routes";
import workRoutes from "../routes/work.routes";

group.use("/users", UserRoutes);
group.use("/work", workRoutes);
group.use("/test", TestRoutes);

export default group;
