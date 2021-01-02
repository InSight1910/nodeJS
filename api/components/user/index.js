const ctrl = require("./controller");

const store = require("../../../store/mongo");

module.exports = ctrl(store);
