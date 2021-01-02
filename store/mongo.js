const { MongoClient } = require("mongodb");
const password = require("../config").db.password;

const uri =
	"mongodb+srv://InSight:" +
	password +
	"@cluster0.hcnco.mongodb.net/socialMedia?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
	try {
		await client.connect();

		const database = client.db("socialMedia");
		//const collection = database.collection("movies");
		// Query for a movie that has the title 'Back to the Future'
		// const query = { title: "Back to the Future" };
		// const movie = await collection.findOne(query);
		console.log("...");
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.dir);
