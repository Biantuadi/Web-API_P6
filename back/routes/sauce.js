const express = require("express");
const router = require("express").Router();

const auth = require("../middleware/auth");
const getAllSauces = require("../controllers/sauce");

router.get("/", auth, getAllSauces);

module.exports = router;
