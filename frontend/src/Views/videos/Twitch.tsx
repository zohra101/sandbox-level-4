import React from "react";

export function Twitch(props) {
	const src = props.src;
	const label = props.label;
	return (
		<>
			<h3>{label}</h3>
			<iframe
				// src="https://clips.twitch.tv/embed?clip=GenerousCaringSamosaTriHard-aiscKCsQD39TWH7L&parent=localhost&parent=localhost:5050"
				src={src}
				frameBorder="0"
				allowFullScreen={true}
				scrolling="no"
				height="378"
				width="620"></iframe>
		</>
	);
}
