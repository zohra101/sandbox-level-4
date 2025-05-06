import React from "react";

export function Vimeo(props) {
	const src = props.src;
	const label = props.label;
	return (
		<>
			<h3>{label}</h3>
			<div
				style={{
					padding: "30%",
					position: "relative",
				}}>
				<iframe
					// src="https://player.vimeo.com/video/267034685?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
					src={src}
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						width: "55%",
						height: "50%",
					}}
					title="Meena Ladies Dance|Rajasthani Dance"></iframe>
			</div>
			<script src="https://player.vimeo.com/api/player.js"></script>
		</>
	);
}
