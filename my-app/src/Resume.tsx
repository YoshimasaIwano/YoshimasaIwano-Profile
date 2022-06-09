import React from 'react';

export function Resume() {
    return (
        <div id="resume-container" className='pv2 tc'>
            <div className='tl f2 b ml1 mv1'>Resume</div>
            <div className='light-yellow f3'>
                Here's my resume. (As of Jun/2022) <br />
                You can download my resume clicking the button below.
            </div>
            <div className='flex-nowrap'>
                <a className='no-underline b mh3 f3 dark-green hover-light-yellow' href="./resume[YoshimasaIwano].pdf" download="./resume[YoshimasaIwano].pdf">
                    Download My Resume
                </a>
                <img src='./resume[YoshimasaIwano].png' alt='resume' className='content-center w-80 h-100'></img>
            </div>
        </div>
    )
}