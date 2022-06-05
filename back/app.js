const exppress = require("express");
const app = exppress();
const cors = require("cors");

// middleware
app.use(cors());
app.use(exppress.json());

// connection à la base de données mongoDB
const mongoDb = require("./server/mongoDB");


// routes
// app.use("/api/sauces");
// app.use("/api/auth");

// exportation du module
module.exports = app;
