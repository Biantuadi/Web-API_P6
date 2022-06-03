const express = require("express");
const router = express.Router();
const stuffController = require("../controllers/stuff");
const auth = require("../middleware/auth");



// post a sauces
router.post("/",auth, stuffController.postSauce); 

// update and delete sauces
router.get("/:id",auth,  stuffController.getSauce);
// router.put("sauces/:id", (req, res) => {// update a sauce
// })


// get all sauces
router.get("/",auth, stuffController.getAllSauces);

module.exports = router;