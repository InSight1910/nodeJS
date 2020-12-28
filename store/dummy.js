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

const list = (table) => db[table];
const get = (table, id) => {
	const collection = list(table);
	return collection.filter((item) => item.id === id)[0] || null;
};
const upsert = (table, data) => {};
const remove = (table, id) => true;

module.exports = {
	list,
	get,
	upsert,
	remove,
};
