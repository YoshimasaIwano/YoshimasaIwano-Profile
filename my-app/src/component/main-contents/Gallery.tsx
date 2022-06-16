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
            <div className='w-50 relative hover-bg-white-20'>
                <img src={shootingStart} alt='shooting star' className='w-100 h-100'></img>
                <div id='text-in-img'>night sky</div>
            </div>
            <div className='w-50 relative hover-bg-white-20'>
                <img src={tsunoshima} alt='tsunoshima' className='w-100 h-100'></img>
                <div id='text-in-img'>landscape</div>
            </div>
            <div className='w-50 relative hover-bg-white-20'>
                <img src={nemophila} alt='nemophila' className='w-100 h-100'></img>
                <div id='text-in-img'>flower</div>
            </div>
            <div className='w-50 relative hover-bg-white-20'>
                <img src={yosemiteFall} alt='yosemite fall' className='w-100 h-100'></img>
                <div id='text-in-img'>food</div>
            </div>
        </div>
    )
}