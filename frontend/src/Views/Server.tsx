import React, { useEffect, useState } from "react";
import axios from "axios";

export function Server() {
	const [serverResponse, setServerresponse] = useState("");
	useEffect(componentDidMount, []);
	return (
		<main>
			<h1>Server</h1>
			{serverResponse}
		</main>
	);

	//Fetch
	// function componentDidMount() {
	// 	const promise = fetch("http://localhost:9000");
	// 	promise.then(handleResponse);
	// }

	// function handleResponse(resolveValue: any) {
	// 	const promise = resolveValue.text();
	// 	promise.then(handleResult);
	// }

	// function handleResult(resolveValue: string) {
	// 	setServerresponse(resolveValue);
	// }

	//Axios get
	// function componentDidMount() {
	// 	// const promise = axios.get("http://localhost:9000/");
	// 	// const promise = axios.get("http://localhost:9000/api");
	// 	const promise = axios.get("http://localhost:9000/api?message=hello");
	// 	promise.then(handleResponse);
	// }
	
	// function handleResponse(resolveValue: any) {
	// 	const response = resolveValue.data;
	// 	const stringified = JSON.stringify(response);
	// 	setServerresponse(`This is the server response: ${stringified}.`);
	// }

	function componentDidMount() {
		getResponse();
	}

		async function getResponse() {
			const response = await axios.get("http://localhost:9000/api?message=hello");
			const stringified = JSON.stringify(response);	
			setServerresponse(`This is the server response: ${stringified}.`);
		}


}
