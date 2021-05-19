const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(cors());
app.use(bodyParser.json());

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url =
	"mongodb+srv://datoad4510:2hLRKbEX8u8efDDP@cluster0.m8xlq.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((err) => {
	console.log("Connected to database!");
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/add_item", (req, res) => {
	//insert item into database
	const list_item = req.body;

	const collection = client.db("database").collection("labeled-sentences");
	try {
		collection.insertOne(list_item).then((data) => {
			res.send(data.insertedId);
		});
		console.log(`Inserted ${list_item.data}`);
	} catch (error) {
		throw error;
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
