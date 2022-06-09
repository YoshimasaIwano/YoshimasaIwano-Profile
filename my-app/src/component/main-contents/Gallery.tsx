import shootingStart from '../../assets/main-pictures/shootingStar.png';
import tsunoshima from '../../assets/main-pictures/tsunoshima.png';
import nemophila from '../../assets/main-pictures/nemophila.png';
import yosemiteFall from '../../assets/main-pictures/yosemiteFall.png';

/*
    Gallery Component  
*/

export function Gallery() {
    return (
        <div id="gallery-container" className='pv2 tc'>
            <div className='tl f2 b ml1 mv1'>Gallery</div>
            <Pictures />
        </div>
    )
}

function Pictures(): JSX.Element {
    return (
        <div className='pv2 flex flex-wrap items-top justify-start'>
            <img src={shootingStart} alt='shooting star' className='w-50'></img>
            <img src={tsunoshima} alt='tsunoshima' className='w-50'></img>
            <img src={nemophila} alt='nemophila' className='w-50'></img>
            <img src={yosemiteFall} alt='yosemite fall' className='w-50'></img>
        </div>
    )
}