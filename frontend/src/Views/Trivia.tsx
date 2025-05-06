import React, { useState } from "react";
import axios from "axios";

export function Trivia() {
	const [trivia, setTrivia] = useState("");
	// const [question, setQuestion] = useState("");
	// const [choice1, setChoice1] = useState("");
	// const [choice2, setChoice2] = useState("");
	// const [choice3, setChoice3] = useState("");
	// const [choice4, setChoice4] = useState("");

	return (
		<>
			<section>
				<h3>Trivia</h3>
				<button onClick={handleClick}>Get a Question</button>
				<br /> <br />
				<blockquote> {trivia}</blockquote>
			</section>
			<br />
		</>
	);

	async function handleClick() {
		debugger;
		const baseUrl = "http://localhost:9000";
		const path = "/trivia"
		const query = "?amount=1&category=20&type=multiple";
		const url = baseUrl + path + query;
		const response = await axios.get(url);
		const result = JSON.stringify(response.data);
		setTrivia(result);
		
		// const question = response.data.question;
		// const choice1 = response.data.choice1;
		// const choice2 = response.data.choice1;
		// const choice3 = response.data.choice1;
		// const choice4 = response.data.choice1;
		// setQuestion(`"${question}"`);
		// setChoice1(` - ${choice1}`);
		// setChoice2(` - ${choice2}`);
		// setChoice3(` - ${choice3}`);
		// setChoice4(` - ${choice4}`);
	}
}
