const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// all stuff required
const userRouter = require("./routes/user");
const sauceRouter = require("./routes/sauce");

// middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

// connection to db
require("./db/mongoDB");

// routes
app.use("/api/auth", userRouter);
app.use("/api/sauces", sauceRouter); 


// exportation du module
module.exports = app;
