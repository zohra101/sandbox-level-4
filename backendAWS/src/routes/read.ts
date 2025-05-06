import { Request, Response } from "express";
import { readAccount } from "../modules/dynamoDB/readAccount";
import { Account } from "../modules/dynamoDB/Account";

//function handler() {}; //Declare the handler as an empty function
export async function read(request: Request, response: Response) {
	const email = request.query.email as string; // Extract email from the query object
	const password = request.query.password as string;
	const account: Account = await readAccount(email, password);
	response.send(account);
}
