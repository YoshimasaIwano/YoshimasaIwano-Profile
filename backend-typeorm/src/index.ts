// import exp = require("constants");
import { MyDataSource } from "./data-source";
import { FlowerData } from "./entity/FlowerData";

import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";
const path = require("path");

MyDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    // const flower1 = new Flower();
    // flower1.src = "/assets/flower/img1.png";  
    // flower1.color = "white";
    // flower1.keywords = "hibiscus";
    // flower1.description = "This is a picture of hibiscus.";

    // const flowerRepository = MyDataSource.getRepository(FlowerData);
    // await MyDataSource.manager.save(flower1);
    // console.log("image was saved: ",flower1);
    // console.log("Saved a new flower with id: " + flower1.id)

    console.log("Loading flower from the database...")
    const flowers = await MyDataSource.manager.find(FlowerData)
    console.log("Loaded flower: ", flowers)

    console.log("Here you can setup and run express / fastify / any other framework.")

    const app = express();
    const PORT = process.env.port || 3001;
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // app.get('/', (req, res) => {
    //     res.send();
    // })

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("./"));
      
        app.get("*", (req, res) => {
          res.sendFile(path.join(__dirname, "index.html"));
        });
      }

    app.listen(process.env.port || PORT);
    console.log(`express application is up an running on port: ${PORT}`);

}).catch(error => console.log(error))
