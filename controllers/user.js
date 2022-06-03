const User = require("../models/user");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({message: "User created", }))
        .catch((error) => res.status(400).json({ error: error }));
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(401).json({error: "Utulisataeur non trouvé",});
      } else {
          bcrypt.compare(password, user.password)
            .then((valid)=>{
                if(!valid){
                    res.status(401).json({error: "Mot de passe incorrect",});
                } else {
                    res.status(200).json({
                        userId: user._id, 
                        token: jsonwebtoken.sign({userId: user._id}, "RANDOM_TOKEN_SECRET", {expiresIn: "24h"}),
                    });
                }
            })
            .catch((err) => res.status(500).json({ error: err }));
      }
    })
    .catch((error) =>res.status(500).json({error: error,}));
};
