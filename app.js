const exppress = require("express");
const app = exppress();
const cors = require("cors");
const Thing = require("./models/Thing");

// middleware
app.use(cors());
app.use(exppress.json());

// connection à la base de données mongoDB
const mongooose = require("mongoose");
const { del } = require("express/lib/application");
const mongoURI = "mongodb+srv://kevin:CE4MFtZ4kiF1JTH5@cluster0.y0gnr7k.mongodb.net/?retryWrites=true&w=majority";
mongooose.connect( mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log("Connexion à la base de données réussie !"))
    .catch(err => console.log("Erreur de connexion à la base de données : ", err));



// routes

// post login and signup
app.post("/api/auth/signup", (req, res) => {// signup
})
app.post("/api/auth/login", (req, res) => {// login
})

// post and get sauces
app.post("/api/sauces", (req, res) => {// post a sauce
    delete req.body._id;
    const thing = new Thing({
        ...req.body,
    });
    thing.save()
        .then(() => res.send(thing))
        .catch(err => res.status(400).send(err));
})
app.get("/api/sauces:id", (req, res) => {// get a sauce
    Thing.findOne({_id: req.params.id})
        .then(thing => res.send(thing))
        .catch(err => res.status(404).send(err));
})

// get all sauces
app.get("/api", (req, res) => { // get array of sauces
    Thing.find()
        .then(things => res.send(things))
        .catch(err => res.status(400).send(err));
});

// exportation du module
module.exports = app;
