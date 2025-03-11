import React, { useEffect } from "react";

// export function YouTube() {
// 	return (
// 		<>
// 			<h3>YouTube</h3>
// 			<iframe
// 				width="560"
// 				height="315"
// 				src="https://www.youtube.com/embed/lYIdqDcoPiA?si=uc8pvhJ63CaScAZE"
// 				title="YouTube video player"
// 				frameBorder="0"
// 				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 				referrerPolicy="strict-origin-when-cross-origin"
// 				allowFullScreen={true}></iframe>
// 		</>
// 	);
// }

export function YouTube(props) {
	const src = props.src;
	const label = props.label;
	const captions = props.children;
	const dimensions = {
		width: "100vw",
		height: "56.25vw",
	};
	const depth = {
		borderRadius: "10px",
		boxShadow: "10px 10px grey",
	};

	useEffect(componentDidUnmount, []);

	return (
		<>
			<h3>{label}</h3>
			<p>{captions}</p>
			<div style={{ dimensions }}>
				<iframe
					style={depth}
					width="1152"
					height="768"
					src={src}
					// label={label}
					// src="https://www.youtube.com/embed/lYIdqDcoPiA?si=uc8pvhJ63CaScAZE"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>
		</>
	);

	function componentDidUnmount() {
		return function () {
			console.log("YouTube component unmounted.");
		};
	}
}
