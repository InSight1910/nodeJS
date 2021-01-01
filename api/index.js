const express = require("express");
const bodyParser = require("body-parser");

const config = require("../config.js");
const user = require("./components/user/network");
const auth = require("./components/auth/network");

const app = express();

app.use(bodyParser.json());
/* ROUTES */
app.use("/user", user);
app.use("/auth", auth);

app.listen(config.api.port, () => {
	console.log("listening on " + config.api.port);
});
