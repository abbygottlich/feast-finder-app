const express = require("express");
const { create } = require("../Controllers/SessionController");
const router = express.Router();

router.post("/api/sessions", create);

module.exports = router;
