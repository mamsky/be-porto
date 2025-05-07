import dotenv from "dotenv";
dotenv.config();

export const corsConfig = {
  origin: ["http://localhost:3000", "http://169.254.79.86:3000"],
  methods: "GET, PUT, POST, DELETE",
};
