const server = "https://neural-network123.herokuapp.com";
// const server = "http://localhost:3000";

window.onload = async (event) => {
	await printDatabase();

	const submit_button = document.querySelector("#submit");

	submit_button.addEventListener("click", async (event) => {
		const text_input = document.querySelector("#text");
		const text_input_dva = document.querySelector("#textdva")
		//const date_button = document.querySelector("#date-button");
		//const balance_button = document.querySelector("#balance-button");

		const text = text_input.value;

		const obj = {
			text: text,
			label: 1,
		};

		//const id = await insertLabeledSentence(obj);
		//console.log(id);

		text_input.value = "";
		text_input_dva.value = "";
		alert("მონაცემები გაიზავნა, მადლობა ^^");
	});
};

// insert todo into mongodb returns id of inserted todo item
async function insertLabeledSentence(todo) {
	return fetch(`${server}/add_item`, {
		method: "POST", // or 'PUT'
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	})
		.then((response) => response.text())
		.catch((error) => {
			console.error("Error:", error);
		});
}

async function fetchList() {
	// get all todos from server
	return fetch(`${server}/get_items`)
		.then((res) => res.json())
		.then((res) => res.collection)
		.catch((err) => console.log(err));
}

async function printDatabase() {
	const db = await fetchList();
	console.log(db);
}
