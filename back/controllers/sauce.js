const Thing = require("../models/thing");
const fs = require("fs");
const { json } = require("express/lib/response");

exports.createSauce = (req, res) => {
  const sauce = JSON.parse(req.body.sauce);

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
        message: "sauce created!",
        thing: result,
      });
    })
    .catch((error) => res.status(400).json({ error: error }));
};

exports.getOneSauce = (req, res) => {
  Thing.findById(req.params.id)
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error: error }));
};

exports.updateSauce = (req, res) => {
  if (req.file != null) {
    let sauce = JSON.parse(req.body.sauce);

    Thing.findOne({ _id: req.params.id })
      .then((thing) => {
        const filename = thing.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Thing.findByIdAndUpdate(
            req.params.id,
            {
              ...sauce,
              imageUrl: `${req.protocol}://${req.get("host")}/images/${
                req.file.filename
              }`,
              _id: req.params.id,
            },
          )
            .then((thing) => res.status(200).json(thing))
            .catch((error) => res.status(400).json({ error: error }));
        });
      })
      .catch((error) => res.status(400).json({ error: error }));
  } else {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: "sauce updated!" }))
      .catch((error) => res.status(400).json({ error: error }));
  }
};

exports.deleteSauce = (req, res) => {
  Thing.findByIdAndDelete({ _id: req.params.id })
    .then((thing) => {
      const filename = thing.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Thing.findByIdAndDelete(req.params.id)
          .then((thing) => res.status(200).json(thing))
          .catch((error) => res.status(400).json({ error: error }));
      });
    })
    .catch((error) => res.status(400).json({ error: error }));
};

exports.getAllSauces = (req, res) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error: error }));
};
