import React from "react";
import { Header } from "./Header";

export function Domain() {
	const domain = window.location.hostname;
	const port = window.location.port;

	return (
		<>
			<Header />
			<main>
				<h1>Domain</h1>
				<p>domain: {domain}</p>
				<p>port: {port}</p>
			</main>
		</>
	);
}
