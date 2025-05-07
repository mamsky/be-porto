import express, { Request, Response } from "express";
import { ErrorHandler } from "./middleware/error.middleware";
import groupRoutes from "./routes/group.routes";
import { corsConfig } from "./config/cors.config";
import cors from "cors";

const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hallo world");
});

app.use("/", groupRoutes);
app.use(ErrorHandler);

export default app;
