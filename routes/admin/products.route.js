const express = require("express"); // import library Express
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");
router.get("/", controller.index);

router.patch("/change-status/:status/:id", controller.changeStatus);

module.exports = router;
