import express from "express";
import cors from "cors";
import path from "path";
import "express-async-errors";
import config from "config";
import deBug from "debug";
const debug = deBug("app:blog");
import db from "./utils/db.js";

const app = express();
db();

import blogRouter from "./routes/blogRouter.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(cors({ origin: "*" }));
app.use("/api/blog", blogRouter);

const port = config.get("PORT");
app.listen(port || 5000, () => {
  debug("Server is live on port :" + port);
});
