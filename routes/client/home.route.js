const express = require("express"); // import library Express
const router = express.Router();

const controller = require("../../controllers/client/home.controller");
router.get("/", controller.index);

module.exports = router;
