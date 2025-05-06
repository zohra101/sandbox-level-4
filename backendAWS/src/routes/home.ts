import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function home(request: Request, response: Response) {
	const data =
		"<html><head><title>My Home Page</title></head><body><h1>Welcome!</h1><p>This is the home page.</p></body></html>";
	response.send(data);
}
