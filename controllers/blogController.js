import blogModel from "../models/blogModel.js";
import _ from "lodash";

export const createBlog = async function (req, res, next) {
  let blog = await new blogModel({ ...req.body, file: req.file.filename });
  blog = await blog.save();

  const newBlog = _.pick(blog, ["_id", "title", "description"]);
  res.send(newBlog);
};

export const getBlogs = async function (req, res, next) {
  let blogs = await blogModel
    .find({})
    .sort("title")
    .select("_id title file description");

  res.send(blogs);
};

export const deleteBlog = async function (req, res, next) {
  let blog = await blogModel.findOneAndDelete({ _id: req.body });
  console.log(blog);
  res.send(blog);
};

export const getOne = async function (req, res, next) {
  let blog = await blogModel.findOne({ _id: req.body.id });
  res.json(blog);
};
