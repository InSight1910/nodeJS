const jwt = require("jsonwebtoken");
const config = require("../config");
const secret = config.jwt.secret;

function sign(data) {
	return jwt.sign(data, secret);
}

function verify(token) {
	return jwt.verify(token, secret);
}
const check = {
	own: function (req, owner) {
		const decoded = decodeHeader(req);
		console.log(decoded);

		if (decoded.id !== owner) {
			throw new Error("You can't make that");
		}
	},
};

function getToken(authorization) {
	if (!authorization) {
		throw new Error("The token does not come");
	}
	if (authorization.indexOf("Bearer ") === -1) {
		throw new Error("Invalid Format");
	}
	let token = authorization.replace("Bearer ", "");
	return token;
}
function decodeHeader(req) {
	const authorization = req.headers.authorization || "";
	const token = getToken(authorization);
	const decoded = verify(token);
	req.user = decoded;
	return decoded;
}

module.exports = {
	sign,
	check,
};
