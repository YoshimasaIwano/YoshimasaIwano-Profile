import exp = require("constants");
import { MyDataSource } from "./data-source"
import { Flower } from "./entity/Flower"

MyDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    // const flower1 = new Flower();
    // flower1.src = "/assets/flower/img1.png";  
    // flower1.color = "white";
    // flower1.keywords = "hibiscus";
    // flower1.description = "This is a picture of hibiscus.";

    // const flowerRepository = MyDataSource.getRepository(Flower);
    // await MyDataSource.manager.save(flower1);
    // console.log("image was saved: ",flower1);
    // console.log("Saved a new flower with id: " + flower1.id)

    console.log("Loading flower from the database...")
    const flowers = await MyDataSource.manager.find(Flower)
    console.log("Loaded flower: ", flowers.filter((img) => {
        if (img.color.toLowerCase() === "blue") {
            return img
        }
    }))

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
