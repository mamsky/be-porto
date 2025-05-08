import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.config";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
  } as unknown as { allowed_formats: string[] },
});
const cloudinaryUpload = multer({ storage });

export default cloudinaryUpload;
