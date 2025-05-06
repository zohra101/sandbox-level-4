import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, GetCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";


dotenv.config(); //Attaches the env variables in .env to the process object

export async function read() {
	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};

	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request: GetCommandInput = {
		TableName: "logins",
		Key: { 
			email: "abc@logins.com" 
		},
	};

	const response = await niceClient.get(request);
	const loginData = response.Item;
	return loginData;
}
