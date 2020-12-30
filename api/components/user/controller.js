const nanoid = require("nanoid");
const TABLE = "user";

module.exports = function (injectedStore) {
	if (!injectedStore) {
		injectedStore = require("../../../store/dummy");
	}

	function list() {
		return injectedStore.list(TABLE);
	}

	function getUser(id) {
		return injectedStore.get(TABLE, id);
	}
	function upsert(body) {
		const user = {
			name: body.name,
		};
		if (body.id) {
			user.id = body.id;
		} else {
			user.id = nanoid();
		}
		return injectedStore.upsert(TABLE, user);
	}
	return {
		list,
		getUser,
		upsert,
	};
};
