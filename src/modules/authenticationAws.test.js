import { describe, it, test } from "@jest/globals";
import { authenticationAws } from "../modules/authenticationAws.js";

describe("The DatabaseSimulation constructor", () => {
	it("connects when the api key is correct", correctApikey);
	it("doesn't connect when the api key is wrong", wrongApiKey);
	it("doesn't connect when the api key is empty", emptyApiKey);
	it("doesn't connect when the api key is a number", numberApikey);
	it("doesn't connect when the api key is a booleTh", booleanApikey);
	it("doesn't connect when the api key is a object", numberApikey);
});

function correctApikey() {
	//ARRANGE
	const apiKey = {
			region: region,
			credentials: {
				accessKeyId: accessKeyId,
				secretAccessKey: secretAccessKey,
			},
		};

	//ACT
	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

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
	const apiKey = "xyz321";
	const client = new DatabaseSimulation(apiKey);
	const email = "abc@logins.com";

	//ACT
	const response = await client.getData(logins, email);

	//ASSERT
	expect(response).toEqual({ email: "abc@logins.com", password: "aaa" });
} 

async function wrongEmail() {
	//ARRANGE
	const apiKey = "xyz321";
	const client = new DatabaseSimulation(apiKey);
	const email = "zzz@logins.com";

	//ACT
	const response = await client.getData(logins, email);

	//ASSERT
	expect(response).toEqual({});
} 