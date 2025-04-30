import express from "express";
const group = express.Router();

import TestRoutes from "../routes/test.routes";
import UserRoutes from "../routes/user.routes";
import workRoutes from "../routes/work.routes";
import profileRoutes from "../routes/profile.routes";

group.use("/profiles", profileRoutes);
group.use("/users", UserRoutes);
group.use("/works", workRoutes);
group.use("/test", TestRoutes);

export default group;
