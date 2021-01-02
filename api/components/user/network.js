const express = require("express");

const response = require("../../../network/response");
const secure = require("./secure");

const ctrl = require("./index");

const router = express.Router();

// Routes

router.get("/", list);
router.get("/:id", getUserId);
router.post("/", createUser);
router.put("/", secure("update"), createUser);

// internal functions
function list(req, res) {
	ctrl.list()
		.then((list) => {
			response.success(req, res, list, res.statusCode);
		})
		.catch((err) => {
			response.error(req, res, err.message, res.statusCode);
		});
}
function getUserId(req, res) {
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
