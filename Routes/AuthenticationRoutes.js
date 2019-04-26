const express = require("express");
const { authentication } = require("../Controllers/AuthenticationController");
const router = express.Router();

router.use(authentication);

module.exports = router;
