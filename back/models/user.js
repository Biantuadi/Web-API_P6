const mongooose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongooose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongooose.model("User", userSchema);
