const express = require("express");
const router = express.Router();
const { list } = require("../controllers/Restaurants");


router.get("/:city,:state", list);

module.exports = router;