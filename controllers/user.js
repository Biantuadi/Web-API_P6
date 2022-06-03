const User = require("../models/user");

exports.signup = (req, res, next) =>{
    res.json({ message: "signup" })
    
}

exports.login = (req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user => {
            if(!user){
                res.status(401).json({
                    error: "Email not found"
                })
            }else{
                if(password === user.password){
                    res.status(200).json({
                        userId: user._id,
                        token: user.generateAuthToken()
                    })
                }else{
                    res.status(401).json({
                        error: "Incorrect password"
                    })
                }
            }
        })
        .catch(error => res.status(500).json({
            error: error
        }))
}