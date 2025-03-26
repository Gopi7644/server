import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
}, { timestamps: true });

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true } // ✅ Cloudinary से आया Video URL
}, { timestamps: true });

export const Video = mongoose.model("Video", videoSchema);

export const User = mongoose.model("User", usermodel);