const exppress = require("express");
const app = exppress();
const cors = require("cors");

// middleware
app.use(cors());
app.use(exppress.json());



// routes
app.post("/api/auth/signup", (req, res) => {
})
app.post("/api/auth/login", (req, res) => {
})


app.get("/api", (req, res) => {
});

// exportation du module
module.exports = app;
