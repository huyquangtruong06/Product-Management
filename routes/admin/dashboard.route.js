const express = require("express"); // import library Express
const router = express.Router();

const controller = require("../../controllers/admin/dashboard.controller");
router.get("/", controller.dashboard);

module.exports = router;
