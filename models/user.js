const mongooose = require("mongoose");

const uerShema = new mongooose.Schema({
  email: { type: String, required: true , unique: true},
  password: { type: String, required: true },
});

module.exports = mongooose.model("User", uerShema);