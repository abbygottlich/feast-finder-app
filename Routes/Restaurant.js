const express = require("express");
const router = express.Router();
const { list, create } = require("../controllers/Restaurant");

// anything that is typed after restaurants/ will be used as the rating
router.get("/restaurants/:rating", list);
router.post("/restaurants", create);

module.exports = router;