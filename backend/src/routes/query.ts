import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function query(request: Request, response: Response) {
    const data = {};
    response.send(data);
    debugger;

    // response.send({ message: "Hello world!"});
}