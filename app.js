const exppress = require("express");
const app = exppress();
const cors = require("cors");

const stuffRouter = require("./routes/stuff");
const userRouter = require("./routes/user");

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
app.use("/api/sauces", stuffRouter);
app.use("/api/auth", userRouter);


// exportation du module
module.exports = app;
