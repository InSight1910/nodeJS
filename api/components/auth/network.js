const express = require("express");

const response = require("../../../network/response");

const ctrl = require("./index");

const router = express.Router();

// Routes

router.post("/login", login);

// Internal functions

function login(req, res, next) {
	ctrl.login(req.body.username, req.body.password)
		.then((token) => response.success(req, res, token, res.statusCode))
		.catch(next);
}
module.exports = router;
