import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function api(request: Request, response: Response) {
    // const data = ({ message: "hello"}) ;
<<<<<<< HEAD
    const data = { 
        origin: request.headers.origin,
=======
    const data = { origin: request.headers.origin,
>>>>>>> edcc2e2 (all changes since last commit)
        query: request.query,
     };
    response.send(data);
}
