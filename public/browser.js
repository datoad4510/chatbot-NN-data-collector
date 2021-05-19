const server = "https://neural-network123.herokuapp.com";
// const server = "http://localhost:3000";

window.onload = (event) => {
    await printDatabase();
    
	const submit_button = document.querySelector("#submit");

	submit_button.addEventListener("click", async (event) => {
		const text_input = document.querySelector("#text");
		const date_button = document.querySelector("#date-button");
		const balance_button = document.querySelector("#balance-button");

		let label;

		if (date_button.checked) {
			label = 0;
		} else if (balance_button.checked) {
			label = 1;
		} else {
			throw error;
		}

		const text = text_input.value;

		const obj = {
			text: text,
			label: label,
		};

		const id = await insertLabeledSentence(obj);
		console.log(id);
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
