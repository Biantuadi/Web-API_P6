const Thing = require("../models/thing");

exports.likeDislike = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1) {
        // misajour de la db
        Thing.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: req.body.like++ },
            $push: { usersLiked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Like ajouté !" }))
          .catch((error) => res.status(400).json({ error }));
      }
      // si like = 0 (likes = 0, pas de vote)
      if (sauce.usersLiked.includes(req.body.userId) && req.body.like === 0) {
        Thing.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: -1 },
            $pull: { usersLiked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Like supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      }

      //? ^^^^^^^^^^^^^^^^^^^^^^^ dislike ^^^^^^^^^^^^^^^^^^^^^^^^

      // like = -1(dislike= +1)
      if (
        !sauce.usersDisliked.includes(req.body.userId) &&
        req.body.like === -1
      ) {
        Thing.updateOne(
          { _id: req.params.id },
          {
            $inc: { dislikes: req.body.like++ * -1 },
            $push: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Dislike ajouté !" }))
          .catch((error) => res.status(400).json({ error }));
      }

      // si dislike = 0 (dislikes = 0, pas de vote)
      if (
        sauce.usersDisliked.includes(req.body.userId) &&
        req.body.like === 0
      ) {
        Thing.updateOne(
          { _id: req.params.id },
          {
            $inc: { dislikes: -1 },
            $pull: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "Dislike supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
