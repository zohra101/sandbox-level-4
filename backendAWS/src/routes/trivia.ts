import { query, Request, Response } from "express";
import { getTrivia } from "../modules/getTrivia";

export async function trivia(request: Request, response: Response) {
	const query: any = request.query 
    const result = await getTrivia(query);
	response.send(result);
}

