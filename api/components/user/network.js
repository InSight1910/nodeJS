const express = require("express");

const response = require("../../../network/response");
const Controller = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
	const list1 = Controller.list();
	response.success(req, res, list1, res.statusCode);
});

module.exports = router;
