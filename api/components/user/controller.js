const { nanoid } = require("nanoid");

const auth = require("../auth");

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
	async function upsert(body) {
		const user = {
			name: body.name,
			username: body.username,
		};

		if (body.id) {
			user.id = body.id;
		} else {
			user.id = nanoid();
		}
		if (body.password || body.username) {
			await auth.upsert({
				id: user.id,
				username: user.username,
				password: body.password,
			});
		}
		return injectedStore.upsert(TABLE, user);
	}
	return {
		list,
		getUser,
		upsert,
	};
};
