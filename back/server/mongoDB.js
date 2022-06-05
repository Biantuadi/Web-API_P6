const mongooose = require("mongoose");
const { del } = require("express/lib/application");
const mongoURI =
  "mongodb+srv://kevin:CE4MFtZ4kiF1JTH5@cluster0.y0gnr7k.mongodb.net/?retryWrites=true&w=majority";
mongooose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à la base de données réussie !"))
  .catch((err) =>
    console.log("Erreur de connexion à la base de données : ", err)
  );

  module.exports = mongooose;