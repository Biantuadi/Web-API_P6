const exppress = require("express");
const app = exppress();
const cors = require("cors");

// middleware
app.use(cors());
app.use(exppress.json());

// connection à la base de données mongoDB
const mongooose = require("mongoose");
const mongoURI = "mongodb+srv://kevin:CE4MFtZ4kiF1JTH5@cluster0.y0gnr7k.mongodb.net/?retryWrites=true&w=majority";
mongooose.connect( mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log("Connexion à la base de données réussie !"))
    .catch(err => console.log("Erreur de connexion à la base de données : ", err));



// routes
app.post("/api/auth/signup", (req, res) => {
})
app.post("/api/auth/login", (req, res) => {
})


app.get("/api", (req, res) => {
});

// exportation du module
module.exports = app;
