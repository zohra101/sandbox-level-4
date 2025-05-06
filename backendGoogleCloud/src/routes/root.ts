import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function root(request: Request, response: Response) {
    const { url } = request;
<<<<<<< HEAD
    response.send(`<h1>Express Template</h1><p>Backend root page.</p>`);
=======
    response.send(`<h1>Express Template< /h1><p>Backend root page.</p>`);
>>>>>>> edcc2e2 (all changes since last commit)
    debugger;

    // response.send({ message: "Hello world!"});
}
