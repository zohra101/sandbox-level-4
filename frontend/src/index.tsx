import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { HandleRefresh } from "./Views/HandleRefresh";
import { Header } from "./Views/Header";
import { Footer } from "./Views/Footer";
import { getRootPath } from "./utils/getRootPath";
import { Server } from "./Views/Server";
import { Home } from "./Views/Home";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";

// const root = createRoot(window.bodyTag);
const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const rootPath = getRootPath();

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<HandleRefresh>
				<Header />
				<Routes>
					<Route
						path={`${rootPath}/`}
						element={<Home />}
					/>
					{/* <Route
						path={`${rootPath}/home`}
						element={<Home />}
					/> */}
					<Route
						path={`${rootPath}/server`}
						element={<Server />}
					/>
				</Routes>
				<Footer />
			</HandleRefresh>
		</BrowserRouter>
	</Provider>
);
