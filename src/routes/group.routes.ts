import express from "express";
const group = express.Router();

import TestRoutes from "../routes/test.routes";
import UserRoutes from "../routes/user.routes";
import workRoutes from "../routes/work.routes";
import profileRoutes from "../routes/profile.routes";
import project from "../routes/project.routes";
import techRoutes from "./tech.routes";

group.use("/users", UserRoutes);
group.use("/profiles", profileRoutes);
group.use("/projects", project);
group.use("/works", workRoutes);
group.use("/tech", techRoutes);
group.use("/test", TestRoutes);

export default group;
