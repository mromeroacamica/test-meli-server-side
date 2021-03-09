const express = require("express");
const router = express.Router();
const controller = require("../controller/api.controller");

router.get("/items/:id", controller.items);
router.get("/search", controller.search);

module.exports = router;
