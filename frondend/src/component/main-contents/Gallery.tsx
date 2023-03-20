/* import libraries */
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

/* import images */
import nightskyImage from '../../assets/main-pictures/nightsky_thumbnail.png';
import landscapeImage from '../../assets/main-pictures/landscape_thumbnail.png';
import flowerImage from '../../assets/main-pictures/flower_thumbnail.png';
import foodImage from '../../assets/main-pictures/food_thumbnail.png';

/*
    Gallery Component  
*/

type MainPicturesProps = {
  srcName: string;
  text: string;
};

const nightsky: MainPicturesProps = {
  srcName: nightskyImage,
  text: 'Nightsky'
};

const landscape: MainPicturesProps = {
  srcName: landscapeImage,
  text: 'Landscape'
};

const flower: MainPicturesProps = {
  srcName: flowerImage,
  text: 'Flower'
};

const food: MainPicturesProps = {
  srcName: foodImage,
  text: 'Food'
};

const mainPicturesList: Array<MainPicturesProps> = [
  nightsky,
  landscape,
  flower,
  food
];

/*
    This function creates the NavLink to each category page
*/
function MainPicture({ srcName, text }: MainPicturesProps): JSX.Element {
  return (
    <NavLink to={text} className="w-50 relative dim">
      <img src={srcName} alt={srcName} className="w-100 h-100"></img>
      <div id="text-in-img" className="f2 f3-ns b">
        {text}
      </div>
    </NavLink>
  );
}

/*
    This function returns a default gallery page 
*/
export function DefaultGalleryPage(): JSX.Element {
  return (
    <div className="mb6-ns">
      <div className="tl f2 f4-ns b ml1 mv1 pb2">Gallery</div>
      <div className="flex flex-wrap items-top justify-start bg-white">
        {mainPicturesList.map((main) => {
          return (
            <MainPicture
              srcName={main.srcName}
              text={main.text}
              key={main.text}
            />
          );
        })}
      </div>
    </div>
  );
}

/*
    This function creates the main content of Gallery with a motion animation
*/
export function Gallery() {
  /*
         --------------------------------------
        |                                      |
        |               Top Nav                |
        |                                      |
         --------------------------------------
        |                                      |
        |                                      |
        |         *   Main Contents  *         |
        |                                      |
        |                                      |
         --------------------------------------
        |                                      |
        |                Footer                |
        |                                      |
         --------------------------------------
    */
  return (
    <motion.div
      id="gallery-container"
      className="pv2 tc"
      initial={{
        opacity: 0.5,
        x: 200
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 1.0
      }}
    >
      <Outlet />
    </motion.div>
  );
}
