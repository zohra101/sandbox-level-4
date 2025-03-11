import React, { useEffect, useState } from "react";
import { NavbarActive } from "./NavbarActive.jsx";

export function MyGreeting() {
	const [greeting, setGreeting] = useState("Amazing world!");
	const [didMount, setDidMount] = useState(false);

	//userEffect(componentDidMountOrUpdate,[greeting]);
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [greeting]);
	useEffect(componentDidUnmount, []);

	return (
		<>
			<header>
				<NavbarActive />
			</header>
			<main>
				<h3>My Greeting</h3>
				<p>{greeting}</p>
			</main>
		</>
	);

	function changeGreeting() {
		setGreeting("Have a good day!");
	}

	function componentDidMount() {
		setDidMount(true);
		console.log("The component mounted. The greeting is " + greeting);
		setTimeout(changeGreeting, 3000);
	}

	function componentDidUpdate() {
		if (didMount === true)
			console.log("The component updated. The greeting is " + greeting);
		// else {
		// setDidMount(true);
		// console.log(
		// 	"The component mounted successfully. The greeting is " + greeting
		// );
		// setTimeout(changeGreeting, 3000);
		// }
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The component unmounted.");
		};
	}
}
