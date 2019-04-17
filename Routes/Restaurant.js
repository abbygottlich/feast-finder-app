const express = require("express");
const router = express.Router();
const { list, create } = require("../controllers/Restaurant");


router.get("/restaurants/:rating", list);
router.post("/restaurants", create);

module.exports = router;