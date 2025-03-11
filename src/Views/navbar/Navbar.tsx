import React from "react";
import { Link } from "react-router";
import { getRootPath } from "../../utils/getRootPath.js";

export function Navbar() {
	
	const rootPath = getRootPath();
	return (
		<>
			<nav>
				<Link to={`${rootPath}/home`}>HOME | </Link>
				<Link to={`${rootPath}/greeting`}>GREETING | </Link>
				<Link to={`${rootPath}/videos`}>VIDEOS | </Link>
				{/* <Link to={`${rootPath}/outputPractice`}>OUTPUT PRACTICE | </Link> */}
				<Link to={`${rootPath}/domain`}>DOMAIN </Link>
			</nav>

		</>
	);
}
