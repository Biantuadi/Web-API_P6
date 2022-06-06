const exppress = require("express");
const app = exppress();
const cors = require("cors");

const userRouter = require("./routes/user");

// middleware
app.use(cors());
app.use(exppress.json());

// connection à la base de données mongoDB
require("./database/mongoDB");

// routes
app.use("/api/auth", userRouter);
// app.use("/api/sauces");

// exportation du module
module.exports = app;
