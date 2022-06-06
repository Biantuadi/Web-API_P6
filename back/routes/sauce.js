const router = require("express").Router();

// Routes
const auth = require("../middleware/auth");
const sacueCtl = require("../controllers/sauce");
const multer = require("../middleware/multer-config");

// Creat, Read, Update, Delete
router.post("/", auth, multer, sacueCtl.createSauce); //Create a sauce
router.get("/", auth, sacueCtl.getAllSauces); //get all sauces

module.exports = router;
