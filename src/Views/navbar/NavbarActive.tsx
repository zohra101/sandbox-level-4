import React from "react";
import { NavLink } from "react-router";
import { getRootPath } from "../utils/getRootPath.js";
import { SignInArea } from "./SignInArea.jsx";


export function NavbarActive() {
	const rootPath = getRootPath();
	return (
		<>
			<nav className="nav nav-tabs nav-fill bg-secondary">
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/home`}
				>
					Home
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/react-feedback`}
				>
					React Feedback Practice
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/greeting`}
				>
					Greeting
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/videos`}
				>
					Videos
				</NavLink>
				{/* <NavLink
					className="nav-link link-light"
					to={`${rootPath}/outputPractice`}>
					OUTPUT PRACTICE
				</NavLink> */}
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/domain`}
				>
					Domain
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/responsive`}
				>
					Responsive
				</NavLink>
				<SignInArea />
			</nav>
		</>
	);
}
