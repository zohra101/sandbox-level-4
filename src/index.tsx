import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Views/home/Home.js";
import { Videos } from "./Views/videos/Videos.js";
import { MyGreeting } from "./Views/home/MyGreeting.js";
import { Domain } from "./Views/navbar/Domain.js";
import { getRootPath } from "./utils/getRootPath.js";
import { ResponsiveDesign } from "./Views/ResponsiveDesign.js";

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
