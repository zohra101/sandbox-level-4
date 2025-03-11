import React from "react";

export function LocalVideo(props) {
	const src = props.src;
	const label = props.label;
	return (
		<>
			<h3>{label}</h3>
			<video
				// src="\assets\videos\5607991-uhd_3840_2160_30fps.mp4"
				src={src}
				controls
				width="1152px"></video>
		</>
	);
}
