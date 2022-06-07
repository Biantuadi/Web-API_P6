const router = require("express").Router();

// Routes
const auth = require("../middleware/auth");
const sacueCtl = require("../controllers/sauce");
const multer = require("../middleware/multer-config");

// Creat, Read, Update, Delete, like, dislike
router.post("/", auth, multer, sacueCtl.createSauce); //Create a sauce
router.get("/", auth, sacueCtl.getAllSauces); //get all sauces
router.get("/:id", auth, sacueCtl.getOneSauce); //get one sauce
router.put("/:id", auth, multer, sacueCtl.updateSauce); //update one sauce
router.delete("/:id", auth, sacueCtl.deleteSauce); //delete one sauce

module.exports = router;