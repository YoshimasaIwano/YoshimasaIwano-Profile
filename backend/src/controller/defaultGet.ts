import { Request, Response } from "express";


/**
 * Loads all posts from the database.
 */
export async function defaultGet(req: Request, res: Response) {
    // return loaded posts
    res.json({message: "flower data"});
}