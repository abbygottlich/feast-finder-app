const express = require("express");
const { create } = require("../Controllers/UserController");
const router = express.Router();

router.post("/api/users", create);

module.exports = router;
