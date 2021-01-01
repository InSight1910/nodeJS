const express = require("express");

const response = require("../../../network/response");

const ctrl = require("./index");

const router = express.Router();

// Routes

router.post("/login", login);

// Internal functions

function login(req, res) {
	ctrl.login(req.body.username, req.body.password)
		.then((token) => response.success(req, res, token, res.statusCode))
		.catch((err) => response.error(req, res, err, res.statusCode));
}
module.exports = router;
