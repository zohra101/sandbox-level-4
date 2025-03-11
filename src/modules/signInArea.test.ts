import { describe, it, test } from "@jest/globals";
import {  } from "";

describe("Testing the database simulation", DatabaseSimulation());

it("correct email", correctEmail);
async function correctEmail() {
	//ARRANGE
	const apiKey = "xyz321";
	const client = new DatabaseSimulation(apiKey);
	const email = "abc@logins.com";

	//ACT
	const response = await client.getData(logins, email);

	//ASSERT
	expect(response).toEqual({ email: "abc@logins.com", password: "aaa" });
}

it("incorrect email", invalidEmail);
async function invalidEmail() {
	//ARRANGE
	const apiKey = "xyz321";
	const client = new DatabaseSimulation(apiKey);
	const email = "zzz@logins.com";

	//ACT
	const response = await client.getData(logins, email);

	//ASSERT
	expect(response).toEqual({});
} 
