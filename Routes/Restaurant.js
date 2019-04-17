const express = require("express");
const router = express.Router();
const { list, create } = require("../controllers/Restaurant");


router.get("/restaurants/:userId/:rating", list);
router.post("/restaurants", create);

module.exports = router;