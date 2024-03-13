import mongoose from "mongoose";
import config from "config";

const connect = function () {
  mongoose
    .connect(config.get("DB_URL"))
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connect;
