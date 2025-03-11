// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React, { useEffect } from "react";
import { handleClick } from "../../controllers/handleClick.js";
import { handleSubmit } from "../../controllers/handleSubmit.js";
import "./Home.scss";
import midEastImage from "../../assets/images/archcopy.png";
import { Carousel } from "../Carousel.jsx";
import { NavbarActive } from "./NavbarActive.jsx";

export function Home() {
	useEffect(componentDidMount, []);

	const adjective = "easier";
	const message = `The command line is ${adjective} now.`;

	const domain = window.location.hostname;
	console.log(`Home domain: ${domain}`);
	console.log(`Home arch path: ${midEastImage}`);

	return (
		<>
			<header id="homeHeader">
				<NavbarActive />
			</header>
			<main
				className="m-3"
				id="homeMain"
			>
				<h1 id="homeTitle">React is awesome.</h1>
				<div
					style={{
						width: "fit-content",
						justifySelf: "center",
					}}
				>
					<img
						id="midEastImage"
						src={midEastImage}
						data-bs-title="A picture of an arch"
						data-bs-toggle="tooltip"
						width="75% !important"
					/>
				</div>
				<p className="highlight">The message is: {message}</p>
				<button onClick={handleClick}>Click</button>
				<div>
					<br></br>
				</div>
				<Carousel />
				<output id="outputTag"></output>
				<form
					className="mb-3"
					onSubmit={handleSubmit}
				>
					<input type="text"></input>
					<input type="submit"></input>
				</form>
			</main>
		</>
	);
}

function componentDidMount() {
	document.getElementById("midEastImage");
	console.log(`midEastImage: ${midEastImage}`);

	document.getElementById("titleTag");
	titleTag.innerHTML = "Home";

	const midEastImageTooltip = document.getElementById("midEastImage");
	new bootstrap.Tooltip(midEastImageTooltip);
}
