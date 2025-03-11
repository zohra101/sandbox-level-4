// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React, { useEffect } from "react";

export function ImageMap() {
	useEffect(componentDidMount, []);
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<img
					// width=" 25%"
					id="shapes"
					usemap="#my-image-map"
					src="../assets/2d-shapes.jpg"
					alt="shapes"
				/>
				<map name="my-image-map">
					<area
						title="Click the rectangle."
						coords="195,70 365,170"
						shape="rect"
						href="https://www.oed.com/dictionary/rectangle_n?tab=factsheet#26289840"></area>
					<area
						title="Click here."
						coords="609,116,56 "
						shape="circle"
						href="#circle"></area>
					<area
						title="Click me!"
						coords="609,523, 635,509, 658,539, 636,579, 608, 602, 573,575, 564,563, 558, 528, 578, 509"
						shape="poly"
						href="http://google.com"></area>
				</map>
			</main>
		</>
	);

	function componentDidMount() {
		// Select the image by id
		const img = document.getElementById("shapes");

		// If the image exists and the imageMapResize function is available, apply the resize logic
		if (img && window.imageMapResize) {
			imageMapResize();
		}
	}
}
