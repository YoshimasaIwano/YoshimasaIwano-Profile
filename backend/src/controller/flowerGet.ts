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

    // update img src path
    flowers.map((flower) => {
        console.log(require(flower.src));
        flower.src = require(flower.src);
    })

    // return loaded posts
    res.json(flowers);
}