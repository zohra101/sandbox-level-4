import { Request, Response } from "express";
import { read } from "../modules/dynamoDB/read";
import { create } from "../modules/dynamoDB/create";
import { update } from "../modules/dynamoDB/update";
import { del } from "../modules/dynamoDB/del";

//function handler() {}; //Declare the handler as an empty function
export async function crud(request: Request, response: Response) {
    const result = await read();
    // const result = await create();
    // const result = await update();
    // const result = await del();
    response.send(result);
}
