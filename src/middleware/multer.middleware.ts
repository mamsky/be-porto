import { Request } from "express";
import multer from "multer";
import path from "path";

const whiteList = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./tmp/images");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()) * 1e9;
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

export const uploadImage = multer({
  storage: storage,
  fileFilter(req, file, callback) {
    if (!whiteList.includes(file.mimetype)) {
      return callback(new Error("file is not allowed"));
    }
    callback(null, true);
  },
});
