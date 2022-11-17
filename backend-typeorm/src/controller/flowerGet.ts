import { Request, Response } from "express";

import { MyDataSource } from "../data-source";
import { FlowerData } from "../entity/FlowerData";

/**
 * Loads all posts from the database.
 */
export async function flowerGet(req: Request, res: Response) {

    // get a post repository to perform operations with post
    const flowerRepository = MyDataSource.getRepository(FlowerData);

    // load posts
    const flowers = await flowerRepository.manager.find(FlowerData);

    // return loaded posts
    res.json(flowers);
}

// "scripts": {
//     "build": "tsc --build",
//     "start": "ts-node src/index.ts",
//     "start:dev": "nest start --watch",
//     "start:debug": "nest start --debug --watch"
//  }