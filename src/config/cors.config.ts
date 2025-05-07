import dotenv from "dotenv";
dotenv.config();

const origin = process.env.ORIGIN;
const originDev = process.env.ORIGIN_DEV;

export const corsConfig = {
  origin: [`${origin}`, `${originDev}`],
  methods: "GET, PUT, POST, DELETE",
};
