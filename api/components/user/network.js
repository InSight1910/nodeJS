const express = require("express");

const response = require("../../../network/response");
const { getUser } = require("./index");
const ctrl = require("./index");

const router = express.Router();

// Routing

router.get("/", list);
router.get("/:id", getUser);

// internal functions
function list() {
	ctrl.list()
		.then((list) => {
			response.success(req, res, list, res.statusCode);
		})
		.catch((err) => {
			response.error(req, res, err.message, res.statusCode);
		});
}
function getUser() {
	ctrl.getUser(req.params.id)
		.then((user) => {
			console.log(req.params.id);
			response.success(req, res, user, res.statusCode);
		})
		.catch((err) => {
			response.error(req, res, err, res.statusCode);
		});
}

module.exports = router;
