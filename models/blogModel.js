import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 255,
    },
    file: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minLength: 10,
      default: "No Description",
    },
    content: {
      type: String,
      required: true,
      minLength: 30,
      unique: true,
    },
  },
  { timestamps: true }
);

export default new mongoose.model("blog", blogSchema);
