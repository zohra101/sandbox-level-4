// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React, { useEffect, useState } from "react";
import { NavbarActive } from "../NavbarActive";
import { YouTube } from "./YouTube";
import { Vimeo } from "./Vimeo";
// import { Twitch } from "../videos/Twitch";
import { LocalVideo } from "./LocalVideo";
import "./Videos.scss";

export function Videos() {
	const [video, setVideo] = useState(<YouTube />);
	<YouTube
		label="How to Win at Splendor"
		src="https://www.youtube.com/embed/lYIdqDcoPiA?si=uc8pvhJ63CaScAZE"
	></YouTube>;

	// useEffect(componentDidMount, []);

	return (
		<>
			<header>
				<NavbarActive />
			</header>
			<main id="videos">
				<h2>VIDEOS</h2>
				<LocalVideo
					label="Dolphins"
					src="../assets/videos/5607991-uhd_3840_2160_30fps.mp4"
				/>
				<div>
					<br></br>
				</div>
				{video}
				<script src="https://player.vimeo.com/api/player.js"></script>
				<Vimeo
					label="Rajasthani Dance"
					src="https://player.vimeo.com/video/267034685?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
				/>
				<div>
					<br></br>
				</div>
				{/* <Twitch 
            label="Starfield Clip"
            src="https://clips.twitch.tv/embed?clip=GenerousCaringSamosaTriHard-aiscKCsQD39TWH7L&parent=localhost&parent=localhost:5050"/> */}
			</main>
		</>
	);

	// function componentDidMount() {
	// 	setTimeout(hideVideo, 3000);
	// 	// document.getElementById("titleTag");
	// 	// titleTag.innerHTML = "Videos";
	// }

	// function hideVideo() {
	// 	setVideo(<></>);
	// }
}
