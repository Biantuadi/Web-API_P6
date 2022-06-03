const Thing = require("../models/Thing");

// create a sauce
exports.postSauce = (req, res) => {
  // const thingObject = JSON.parse(req.body.thing);
  console.log(req.body);
  // delete thingObject._id;
  // const stfSauce = JSON.stringify(thingObject);
  // const thing = new Thing({
  //   ...thingObject,
  //   imageUrl: `${req.protocol}://${req.get("host")}/images/${
  //     req.file.filename
  //   }`,
  // });
  // console.log(stfSauce);
  // thing
  //   .save()
  //   .then(() => res.send(thing))
  //   .catch((err) => res.status(400).send(err));
}; // post a sauce

exports.getSauce = (req, res) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.send(thing))
    .catch((err) => res.status(404).send(err));
}; // get a sauce

// get all sauces
exports.getAllSauces = (req, res) => {
  Thing.find()
    .then((things) => res.send(things))
    .catch((err) => res.status(400).send(err));
}; // get array of sauces
