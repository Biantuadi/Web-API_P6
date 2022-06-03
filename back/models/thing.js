const mongooose = require("mongoose");

const thingSchema = new mongooose.Schema({
  userId: { type: mongooose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  mainPepper: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: String, required: true },
  usersDisliked: { type: String, required: true },
});

module.exports = mongooose.model("Thing", thingSchema);
