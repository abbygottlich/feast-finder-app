const express = require("express");
const router = express.Router();
const { list, create, update, remove } = require("../Controllers/Restaurant");

// anything that is typed after restaurants/ will be used as the rating
router.get("/restaurants/:rating", list);
router.post("/restaurants", create);
router.put("/restaurants", update);
router.delete("/restaurants/:id", remove);

module.exports = router;