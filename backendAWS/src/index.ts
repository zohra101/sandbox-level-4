import express from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import { quote } from "./routes/quote";
import { trivia } from "./routes/trivia";
import { home } from "./routes/home";
import { client } from "./routes/client";
import { headers } from "./routes/headers";
import { request } from "./routes/request";
import { query } from "./routes/query";
import { env } from "./routes/env";
import serverless from "serverless-http";
import dotenv from "dotenv";
import { crud } from "./routes/crud";
import { read } from "./routes/read";

dotenv.config();
console.log("Dotenv configured");
console.log("Current mode:", process.env.mode); 

const hostname = "localhost"; //Local domainnpm
const port = 9000; //Common backend ports are 3000, 8080, 9000
const path = "/"; //The path from where the server info will be rendered in the browser

const app = express(); //Instantiate an express.js object
app.use(cors());
app.get("/", root); //The handler runs when the path is visited in the URL
app.get("/api", api); //The handler runs when the path is visited in the URL
app.get("/quote", quote); //The handler runs when the path is visited in the URL
app.get("/trivia", trivia); //The handler runs when the path is visited in the URL
app.get("/home", home); //The handler runs when the path is visited in the URL
app.get("/client", client); //The handler runs when the path is visited in the URL
app.get("/headers", headers); //The handler runs when the path is visited in the URL
app.get("/request", request); //The handler runs when the path is visited in the URL
app.get("/query", query); //The handler runs when the path is visited in the URL
app.get("/env", env); //The handler runs when the path is visited in the URL
app.get("/crud", crud); //The handler runs when the path is visited in the URL
app.get("/read", read); //The handler runs when the path is visited in the URL

console.log("Current mode:", process.env.mode); // Force logging the mode

const isRunningLocally = process.env.mode === "development";

if (isRunningLocally) {
	app.listen(port, hostname, handleListen); //Listen on the specified port and hostname
} else {
	console.log("Server not starting locally because mode is:", process.env.mode);
}


function handleListen() {
    console.log(`Listening on http://${hostname}:${port}...`);
    console.log('Open a terminal and run "npm run build".');
    console.log('To debug, start this server in JavaScript Debug terminal.');
}


export const handler = serverless(app); //Convert Express app into a serverless app compatible with AWS Lambda