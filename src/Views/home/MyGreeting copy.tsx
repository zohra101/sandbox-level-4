import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar.jsx";
import { Card } from "../Card.jsx";

export function MyGreeting() {
	// let greeting = "Hello, world!";
	const [greeting, setGreeting] = useState("Amazing world!");
	const [didMount, setDidMount] = useState(false);
	// const didMount = myTuple[0];
	// const setDidMount = myTuple[1];
	// const myTuple = useState("Amazing world!");
	// const greeting = myTuple[0];
	// const setGreeting = myTuple[1];
	// const myTuple = useState("Amazing world!");
	// const greeting = myArray[0];
	// const setGreeting = myArray[1];

	useEffect(componentDidUpdate), [greeting];
	// setTimeout(changeGreeting, 3000);

	return (
		<>
			<header style={{ color: "red", fontSize: "12px", marginBottom: "2" }}>
				<Navbar />
				<Card
					src=""
					body=""
					title=""
				/>
			</header>
			<section>
				<h3>My Greeting</h3>
				<p>{greeting}</p>
			</section>
		</>
	);

	function changeGreeting() {
		// greeting ="Have a good day!";
		setGreeting("Have a good day!");
	}

	// function componentDidMount () {

	// }

	function componentDidUpdate() {
		// console.log("The component mounted or updated.");

		if (didMount === true)
			console.log(
				"The component updated successfully. The greeting is " + greeting
			);
		else {
			setDidMount(true);
			console.log(
				"The component mounted successfully. The greeting is " + greeting
			);
			setTimeout(changeGreeting, 6000);
		}
	}

	// function componentDidUnmount() {
	//     console.log("The component unmounted successfully.");
	//     return componentDidMount();

	// }
}
