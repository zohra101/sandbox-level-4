import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function update() {
	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};

	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request: UpdateCommandInput = {
		TableName: "logins",
		Key: {email: "abc@logins.com",},
        AttributeUpdates: { password: { Value:"new234" } },
	};

	const response = await niceClient.update(request);
	return response;
}
