const router = require("express").Router();

// Routes
const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce");
const multer = require("../middleware/multer-config");
const likeDislike = require("../controllers/likeDislike");

// Creat, Read, Update, Delete, like, dislike
router.post("/", auth, multer, sauceCtrl.createSauce); //Create a sauce
router.get("/", auth, sauceCtrl.getAllSauces); //get all sauces
router.get("/:id", auth, sauceCtrl.getOneSauce); //get one sauce
router.put("/:id", auth, multer, sauceCtrl.updateSauce); //update one sauce
router.delete("/:id", auth, sauceCtrl.deleteSauce); //delete one sauce
router.post("/:id/like", auth, likeDislike.likeDislike); //like a sauce

module.exports = router;
