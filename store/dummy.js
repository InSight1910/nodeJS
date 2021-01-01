const db = {
	user: [
		{ id: 1, name: "Casey Pugh" },
		{ id: 2, name: "Amir Buck" },
		{ id: 3, name: "Kay Kim" },
		{ id: 4, name: "Kimberly Kelly" },
		{ id: 5, name: "Paul Neal" },
		{ id: 6, name: "Aaron Franklin" },
		{ id: 7, name: "Shelly David" },
		{ id: 8, name: "Pamela Ferrell" },
		{ id: 9, name: "Shay Lucas" },
		{ id: 10, name: "Kelly Rivers" },
		{ id: 11, name: "Joy Gaines" },
		{ id: 12, name: "Astra Blackwell" },
		{ id: 13, name: "Natalie Bird" },
		{ id: 14, name: "Griffith Henson" },
		{ id: 15, name: "Cairo Norris" },
		{ id: 16, name: "Evelyn Buckley" },
		{ id: 17, name: "Keane Larson" },
		{ id: 18, name: "Thomas Benton" },
		{ id: 19, name: "Xaviera Mcfarland" },
		{ id: 20, name: "Maisie Pitts" },
		{ id: 21, name: "Ava Frost" },
		{ id: 22, name: "Willow Warren" },
		{ id: 23, name: "James Acosta" },
		{ id: 24, name: "Fuller Castaneda" },
		{ id: 25, name: "Mufutau Whitfield" },
	],
};

async function list(table) {
	return db[table];
}
async function get(table, id) {
	const collection = await list(table);
	return collection.filter((item) => item.id == id) || null;
}
async function upsert(table, data) {
	if (!db[table]) {
		db[table] = [];
	}
	db[table].push(data);
}
async function query(table, q) {
	let col = await list(table);
	let key = Object.keys(q)[0];
	if (col) {
		return col.filter((user) => user[key] === q[key])[0];
	}
}

module.exports = {
	list,
	get,
	upsert,
	query,
};
