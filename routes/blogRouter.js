import express from "express";
import multer from "multer";
import {
  createBlog,
  getBlogs,
  deleteBlog,
  getOne,
} from "../controllers/blogController.js";
import { blogValidate, idValidate } from "../middlewares/blog.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), blogValidate, createBlog);
router.get("/", getBlogs);
router.post("/find", getOne);
router.post("/delete", idValidate, deleteBlog);

export default router;
