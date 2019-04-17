const express = require("express");
const router = express.Router();
const { list } = require("../Controllers/Fetch");

// req.params in the controller comes from this route
router.get("/:city,:state", list);

module.exports = router;