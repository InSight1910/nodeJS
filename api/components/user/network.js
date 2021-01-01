const express = require("express");

const response = require("../../../network/response");

const ctrl = require("./index");

const router = express.Router();

// Routes

router.get("/", list);
router.get("/:id", getUserId);
router.post("/", createUser);

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
function getUserId() {
	ctrl.getUser(req.params.id)
		.then((user) => {
			response.success(req, res, user, res.statusCode);
		})
		.catch((err) => {
			response.error(req, res, err, res.statusCode);
		});
}
function createUser(req, res) {
	ctrl.upsert(req.body)
		.then((user) => {
			response.success(req, res, user, res.statusCode);
		})
		.catch((err) => {
			response.error(req, res, err, res.statusCode);
		});
}

module.exports = router;
