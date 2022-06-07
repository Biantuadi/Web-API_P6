require("dotenv").config();

const mongooose = require("mongoose");
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;
const mongoURI = `mongodb+srv://${user}:${password}@cluster0.y0gnr7k.mongodb.net/?retryWrites=true&w=majority`;
mongooose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à la base de données réussie !"))
  .catch((err) =>
    console.log("Erreur de connexion à la base de données : ", err)
  );

module.exports = mongooose;
