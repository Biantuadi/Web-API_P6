const Thing = require("../models/thing");

exports.createSauce = (req, res) => {
  const sauce = JSON.parse(req.body.sauce);
  const { name, manufacturer, description, mainPepper, heat, userId } = sauce;
  
  const thing = new Thing({
    name,
    manufacturer,
    description,
    mainPepper,
    heat,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    userId,
  });
  thing
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Thing created!",
        thing: result,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllSauces = (req, res) => {
  Thing.find()
    .then((things) => {
      res.status(200).json(things);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
