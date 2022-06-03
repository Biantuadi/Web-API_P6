const express = require("express");
const router = express.Router();
const stuffController = require("../controllers/stuff");



// post and get sauces
router.post("/", stuffController.postSauce); 
router.get("/:id",  stuffController.getSauce);


// update and delete sauces
// router.put("sauces/:id", (req, res) => {// update a sauce
// })


// get all sauces
router.get("/", stuffController.getAllSauces);

module.exports = router;