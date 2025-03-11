import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Views/home/Home.jsx";
import { Videos } from "./Views/Videos.jsx";
import { MyGreeting } from "./Views/home/MyGreeting.jsx";
import { Domain } from "./Views/navbar/Domain.jsx";
import { getRootPath } from "./utils/getRootPath.js";
import { ResponsiveDesign } from "./Views/ResponsiveDesign.jsx";

// const root = createRoot(window.bodyTag);
const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const rootPath = getRootPath();

root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path={`${rootPath}/`}
				element={<Home />}
			/>
			<Route
				path={`${rootPath}/home`}
				element={<Home />}
			/>
			<Route
				path={`${rootPath}/videos`}
				element={<Videos />}
			/>
			<Route
				path={`${rootPath}/greeting`}
				element={<MyGreeting />}
			/>
			{/* <Route
				path={`${rootPath}/imagemap`}
				element={<ImageMap />}
			/> */}
			{/* <Route
				path={`${rootPath}/outputPractice`}
				element={<OutputPractice />}
			/> */}
			<Route
				path={`${rootPath}/domain`}
				element={<Domain />}
			/>
			<Route
				path={`${rootPath}/responsive`}
				element={<ResponsiveDesign />}
			/>
		</Routes>
	</BrowserRouter>
);
