import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

//function handler() {}; //Declare the handler as an empty function
export function env(request: Request, response: Response) {
  const data = { mode: process.env.mode };
	response.send(data);
}
