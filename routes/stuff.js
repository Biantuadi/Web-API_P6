const express = require("express");
const router = express.Router();
const stuffController = require("../controllers/stuff");

// post and get users
router.post("auth/signup", );
router.post("auth/login", );

// post and get sauces
router.post("sauces", stuffController.postSauce); 
router.get("sauces:id",  stuffController.getSauce);


// update and delete sauces
// router.put("sauces/:id", (req, res) => {// update a sauce
// })


// get all sauces
router.get("sauces", stuffController.getAllSauces);

module.exports = router;