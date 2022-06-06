const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(409).json({ massage : "Utilisateur pas enregistrer" + error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// exports.login = (req, res) => {
//   User.findOne({ email: req.body.email })
//     .then((user) => {
//       if (!user)
//         return res.status(401).json({ error: "Utilisateur non trouvé !" });
//       bcrypt
//         .compare(req.body.password, user.password)
//         .then((valid) => {
//           if (!valid)
//             return res.status(401).json({ error: "Mot de passe incorrect !" });
//           res.status(200).json({
//             userId: user._id,
//             token: "Bearer token",
//           });
//         })
//         .catch((error) => res.status(500).json({ error }));
//     })
//     .catch((error) => res.status(500).json({ error }));
// };
