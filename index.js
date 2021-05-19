const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(cors());
app.use(bodyParser.json());

// password: 2hLRKbEX8u8efDDP

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
