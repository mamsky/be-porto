import dotenv from "dotenv";
dotenv.config();

export const corsConfig = {
  origin: process.env.ORIGIN,
  methods: "GET, PUT, PATCH, POST, DELETE",
};
