import { describe, it, expect } from "@jest/globals";
import { authenticationSimulationDB } from "./authenticationSimulationDB.js";
import { logins } from "./logins.js";

describe("The authenticationSimulationDB function", () => {
	it("authenticates when email and password are correct", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "aaa";

		//ACT
		const isAuthenticated = await authenticationSimulationDB(email, password);

		//ASSERT
		expect(isAuthenticated).toBe(true);
	});

	it("doesn't authenticate when email is correct, but the password is wrong", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "456yut";

		//ACT
		const isAuthenticated = await authenticationSimulationDB(email, password);

		//ASSERT
		expect(isAuthenticated).toBe(false);
	});

	it("doesn't authenticate when email is not in the list", async () => {
		//ARRANGE
		const email = "xyz@logins.com";
		const password = "aaa";

		//ACT
		const isAuthenticated = await authenticationSimulationDB(email, password);

		//ASSERT
		expect(isAuthenticated).toBe(false);
	});

	it("doesn't authenticate when email is in the list, but password is empty", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "";

		//ACT
		const isAuthenticated = await authenticationSimulationDB(email, password);

		//ASSERT
		expect(isAuthenticated).toBe(false);
	});

	it("doesn't authenticate when email is empty, but password is in the list", async () => {
		//ARRANGE
		const email = "";
		const password = "aaa";

		//ACT
		const isAuthenticated = await authenticationSimulationDB(email, password);

		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
});

function correctApikey() {
	//ARRANGE
	const apiKey = "api123xyz";
	api;

	//ACT
	const client = new DatabaseSimulation(apiKey);

	//ASSERT
	expect(client.isConnected).toBe(true);
}

describe("The DatabaseSimulation getData method", () => {
	it("returns login of the matching email", correctEmail);
	it("does not return login if email is not in list", wrongEmail);
	it("does not return login if email format is wrong", wrongEmailFormat);
	// it("does not return login if email is object", wrongEmailFormat);
	// it("does not return login if email is number", wrongEmailFormat);
});

async function correctEmail() {
	//ARRANGE
	const apiKey = "api123xyz";
	const client = new DatabaseSimulation(apiKey);
	const email = "abc@logins.com";

	//ACT
	const response = await client.getData(logins, email);

	//ASSERT
	expect(response).toEqual({ email: "abc@logins.com", password: "aaa" });
}

async function wrongEmail() {
	//ARRANGE
	const apiKey = "api123xyz";
	const client = new DatabaseSimulation(apiKey);
	const email = "zzz@logins.com";

	//ACT
	const response = await client.getData(logins, email);

	//ASSERT
	expect(response).toEqual({});
}
