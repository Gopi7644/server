import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "cloudinary"
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "profilePic",
        format: async(req, file) => "png",
        // file.fieldname + '-' + Date.now(),
        public_id: (req, file) => file.originalname.split('.')[0] + "",
    }
})

export const cloudinaryFileUpload = multer({ storage: storage });