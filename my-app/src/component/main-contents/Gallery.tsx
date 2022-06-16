import shootingStar from '../../assets/main-pictures/shootingStar.png';
import tsunoshima from '../../assets/main-pictures/tsunoshima.png';
import nemophila from '../../assets/main-pictures/nemophila.png';
import yosemiteFall from '../../assets/main-pictures/yosemiteFall.png';
import { NavLink, Outlet } from 'react-router-dom';

/*
    Gallery Component  
*/

export function Gallery() {
    return (
        <div id="gallery-container" className='pv2 tc'>
            <div className='tl f2 b ml1 mv1 pb2'>Gallery</div>
            <Outlet />
        </div>
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
    srcName: yosemiteFall,
    text: "Food",
}

const MainPicturesList: Array<MainPicturesProps> = [
    nightskyPic,
    landscapePic,
    flowerPic,
    foodPic,
];

function MainPicture({ srcName, text }: MainPicturesProps): JSX.Element {
    return (
        <NavLink to={text} className='w-50 relative dim' >
            <img src={srcName} alt={srcName} className='w-100 h-100'></img>
            <div id='text-in-img'>{text}</div>
        </NavLink>
    )
}

export function DefaultGalleryPage(): JSX.Element {
    return (
        <>
            <div className='flex flex-wrap items-top justify-start bg-white'>
                {MainPicturesList.map((main) => {
                    return <MainPicture srcName={main.srcName} text={main.text} />
                })}
            </div>
        </>
    )
}