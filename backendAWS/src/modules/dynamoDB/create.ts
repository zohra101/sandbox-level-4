import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function create() {
	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};

	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request: PutCommandInput = {
		TableName: "logins",
		Item: {
			email: "def@logins.com",
            password: "def123"
		},
	};

	const response = await niceClient.put(request);
	return response;
	
}
