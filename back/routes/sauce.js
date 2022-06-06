const express = require("express");
const router = require("express").Router();

const auth = require("../middleware/auth");
const sacueCtl = require("../controllers/sauce");

router.get("/", auth, sacueCtl.getAllSauces);

module.exports = router;
