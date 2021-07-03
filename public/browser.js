const server = "https://neural-network123.herokuapp.com";
// const server = "http://localhost:3000";

window.onload = async (event) => {
    await printDatabase();

    const submit_button = document.querySelector(".btnSubmit");

    submit_button.addEventListener("click", async (event) => {
        const first = document.querySelector("#first-question");
        const second = document.querySelector("#second-question");

        const sentence1 = first.value;

        const label_zero = {
            sentence: sentence1,
            label: 0,
        };
        const sentence2 = second.value;

        const label_one = {
            sentence: sentence2,
            label: 1,
        };

        const id1 = await insertLabeledSentence(label_zero);
        console.log(id1);

        const id2 = await insertLabeledSentence(label_one);
        console.log(id2);

        first.value = "";
        second.value = "";
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
