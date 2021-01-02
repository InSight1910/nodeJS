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
function list(req, res, next) {
	ctrl.list()
		.then((list) => {
			response.success(req, res, list, res.statusCode);
		})
		.catch(next);
}
function getUserId(req, res, next) {
	ctrl.getUser(req.params.id)
		.then((user) => {
			response.success(req, res, user, res.statusCode);
		})
		.catch(next);
}
function createUser(req, res, next) {
	ctrl.upsert(req.body)
		.then((user) => {
			response.success(req, res, user, res.statusCode);
		})
		.catch(next);
}

module.exports = router;
