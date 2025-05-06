import React from "react";
import { NavLink } from "react-router";
import { getRootPath } from "../utils/getRootPath";
import { SignInArea } from "./signin/SignInArea";

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
					to={`${rootPath}/react-feedback-practice`}
				>
					React Feedback Practice
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/react-render-practice`}
				>
					React Render Practice
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/server`}
				>
					Server
				</NavLink>
				<SignInArea />
			</nav>
		</>
	);
}
