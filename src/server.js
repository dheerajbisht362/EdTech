const express = require("express");
const cors = require("cors");
const path = require("path");

const connect = require("./configs/db");

require('dotenv').config();
const homeController = require("./controllers/home.controller");
const userController = require("./controllers/user.controller");
const jsDescriptionController = require("./controllers/jsDescription.controller");
const jsQuizController = require("./controllers/jsQuiz.controller");
const fullStackRoadMapController = require("./controllers/fullStackRoadMap.Controller");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use("/user", userController);
app.use("/", homeController);
app.use("/fullStackRoadMap", fullStackRoadMapController);
app.use("/jsDescription", jsDescriptionController);
app.use("/jsQuiz", jsQuizController);

app.listen(PORT, async () => {
	await connect();
	console.log("Server is running on port 3000");
});
