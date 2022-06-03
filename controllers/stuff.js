const Thing = require("../models/Thing");


// signup and login users
exports.sinup = (req, res) => {}// signup
exports.login = (req, res) => {}// login

// post and get sauces
exports.postSauce = (req, res) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body,
    });
    thing.save()
        .then(() => res.send(thing))
        .catch(err => res.status(400).send(err));
}// post a sauce
exports.getSauce = (req, res) => {
    Thing.findOne({_id: req.params.id})
        .then(thing => res.send(thing))
        .catch(err => res.status(404).send(err));
}// get a sauce

// get all sauces
exports.getAllSauces = (req, res) => {
    Thing.find()
        .then(things => res.send(things))
        .catch(err => res.status(400).send(err));
}// get array of sauces

