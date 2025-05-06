import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, GetCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "./Account";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function readAccount(targetEmail: string, targetPassword: string): Promise<Account | undefined> {
	if (typeof targetEmail === "object") return undefined;
	if (targetEmail === undefined || targetPassword === undefined) return undefined;

	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};



	//Connect to DynamoDB
	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request: GetCommandInput = {
		TableName: "logins",
		Key: { email: targetEmail },
	};


	const response = await niceClient.get(request);
	let account = response.Item as Account;
	if (account && account.password !== targetPassword) account = undefined;

	return account;
}


