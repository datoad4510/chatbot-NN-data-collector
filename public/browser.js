document.onload = (event) => {
	const submit_button = document.querySelector("#submit");

	submit_button.addEventListener("click", (event) => {
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

        const text = text_input.innerText;
        
        
	});
};
