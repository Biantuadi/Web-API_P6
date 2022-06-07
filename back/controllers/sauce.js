const Thing = require("../models/thing");
const fs = require("fs");

exports.createSauce = (req, res) => {
  const sauce = JSON.parse(req.body.sauce);
  const { name, manufacturer, description, mainPepper, heat, userId } = sauce;

  const thing = new Thing({
    ...sauce,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
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

exports.getOneSauce = (req, res) => {
  Thing.findById(req.params.id)
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.updateSauce = (req, res) => {
  const sauce = req.body.sauce;
  const { name, manufacturer, description, mainPepper, heat, userId } = sauce;
  Thing.findByIdAndUpdate(req.params.id, {
    ...sauce,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  })
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.deleteSauce = (req, res) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => {
      const filename = thing.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Thing.findByIdAndDelete(req.params.id)
          .then((thing) => {
            res.status(200).json(thing);
          })
          .catch((error) => {
            res.status(400).json({ error: error });
          });
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
