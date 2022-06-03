const exppress = require("express");
const app = exppress();
const cors = require("cors");

// middleware
app.use(cors());



// routes
app.use((req, res, next) => {
  res.end("i am the second route");
});

// exportation du module
module.exports = app;
