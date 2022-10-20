
import { Flower } from './entity/Flower';
import { MyDataSource } from './data-source';

MyDataSource.initialize()
  .then(async () => {
    const flower1 = new Flower();
    
    flower1.src = "src"; // /assets/flower/img1.png
    flower1.color = "white";
    flower1.keywords = "hibiscus";
    flower1.description = "This is a picture of hibiscus.";

    // const flowerRepository = MyDataSource.getRepository(Flower);
    await MyDataSource.manager.save(flower1);
    console.log("image was saved: ",flower1);
  })
  .catch((error) => console.log("Error: ", error));