import { DatabaseSimulation } from "./DatabaseSimulation.jsx";
import { logins } from "./logins.js";

export async function authenticationSimulationDB(email = "", password = "") {
	//Simulates authenticating access to a database; code can run out of order
	const apiKey = "api123xyz"; //Sets api key
	const client = new DatabaseSimulation(apiKey); //Calls DatabaseSimulation class
	debugger;
	const resolveValue = await client.getData(logins, email); //Data needed from the promise; waits until promise is resolved to run
	const matchingLogin = resolveValue; //Gets matchingLogin sent by completed promise in DatabaseSimulation.js
	const isAuthenticated = password === matchingLogin.password; //Sets isAuthenticated if passwords matches the email
	return isAuthenticated; //Cannot return value to promise because promise is not completed without await

	// function getResolveValue(resolveValue) {
	// 	//Returns the login that matched the email
	// 	console.log("Getting the mnatching login...");
	// 	const matchingLogin = resolveValue; //Gets matchingLogin sent by completed promise in DatabaseSimulation.js
	// 	const isAuthenticated = password === matchingLogin.password; //Sets isAuthenticated if passwords matches the email
	// 	return isAuthenticated; //Cannot return value to promise because promise is not completed without await
	// }
}
