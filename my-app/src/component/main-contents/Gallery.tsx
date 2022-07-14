import shootingStar from '../../assets/main-pictures/shootingStar.png';
import tsunoshima from '../../assets/main-pictures/tsunoshima.png';
import nemophila from '../../assets/main-pictures/nemophila.png';
import myBestFood from '../../assets/main-pictures/myBestFood.png';

import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

/*
    Gallery Component  
*/

export function Gallery() {
    return (
        <motion.div 
            id="gallery-container" 
            className='pv2 tc'
            initial={{
                opacity: 0.5,
                x: 200,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 1.0,
            }}
        >
            <Outlet />
        </motion.div>
    )
}

type MainPicturesProps = {
    srcName: string;
    text: string;
}


const nightskyPic: MainPicturesProps = {
    srcName: shootingStar,
    text: "Nightsky",
}

const landscapePic: MainPicturesProps = {
    srcName: tsunoshima,
    text: "Landscape",
}

const flowerPic: MainPicturesProps = {
    srcName: nemophila,
    text: "Flower",
}

const foodPic: MainPicturesProps = {
    srcName: myBestFood,
    text: "Food",
}

const mainPicturesList: Array<MainPicturesProps> = [
    nightskyPic,
    landscapePic,
    flowerPic,
    foodPic,
];

function MainPicture({ srcName, text }: MainPicturesProps): JSX.Element {
    return (
        <NavLink 
            to={text} 
            className='w-50 relative dim' 
        >
            <img src={srcName} alt={srcName} className='w-100 h-100'></img>
            <div id='text-in-img'>{text}</div>
        </NavLink>
    )
}

export function DefaultGalleryPage(): JSX.Element {
    return (
        <div>
            <div className='tl f2 b ml1 mv1 pb2'>Gallery</div>
            <div className='flex flex-wrap items-top justify-start bg-white'>
                {mainPicturesList.map((main) => {
                    return <MainPicture srcName={main.srcName} text={main.text} key={main.text}/>
                })}
            </div>
        </div>
    )
}