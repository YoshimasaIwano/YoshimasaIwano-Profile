import React from 'react';

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
            <img src='./pictures/shootingStar.png' alt='shooting star' className='w-50'></img>
            <img src='./pictures/tsunoshima.png' alt='tsunoshima' className='w-50'></img>
            <img src='./pictures/nemophila.png' alt='nemophila' className='w-50'></img>
            <img src='./pictures/yosemiteFall.png' alt='yosemite fall' className='w-50'></img>
        </div>
    )
}