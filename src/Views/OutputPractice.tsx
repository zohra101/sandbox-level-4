import React from "react";
import { useState } from "react";
import { NavbarActive } from "./NavbarActive.jsx";

export function OutputPractice() {
	const [message, setMessage] = useState("Hello Output Practice!");

	return (
		<>
			<header>
				<NavbarActive />
			</header>
			<main>
				<form onSubmit={handleSubmit}>
					{/* <form> */}
					<div>
						Select an option:
						<br />
						<select title="dropdown">
							<option>multiple</option>
							<option>boolean</option>
						</select>
					</div>
					<br />
					<div>
						Pick a number:
						<br />
						<input
							type="number"
							defaultValue="1"
							min="1"
							max="3"></input>
						<br />
					</div>
					<input type="submit"></input>
				</form>
				<output>{message}</output>
			</main>
		</>
	);

	function handleSubmit(event = new Event()) {
		event.preventDefault();
		const inputs = event.target;
		const textInput = inputs[0];
		const userText = textInput.value;
		const numberInput = inputs[1];
		const userNumber = numberInput.value;
		setMessage(
			<>
				<p>"Hello Output Practice!"</p>
				<p>
					You entered {userText}, {userNumber}.
				</p>
			</>
		);
	}
}
