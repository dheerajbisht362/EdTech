const express = require("express");
const cors = require("cors");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "display");

app.use("/user", userController);

app.listen(3000, async () => {
  await connect();
  console.log("Server is running on port 3000");
});
