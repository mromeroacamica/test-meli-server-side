const express = require("express");
const router = express.Router();
const controller = require("../controller/app.controller");

router.get("/items/:id", controller.items);
router.get("/search", controller.search);

module.exports = router;
