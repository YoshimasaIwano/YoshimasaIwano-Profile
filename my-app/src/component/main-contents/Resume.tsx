import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import resumePicture from '../../assets/resume[YoshimasaIwano].png';

/*
    Resume Component  
*/

type ImageState = {
    isOpen: boolean,
}

export function Resume() {
    const initState: ImageState = {
        isOpen: false,
    }
    const [state, setState] = useState(initState)
    
    return (
        <div id="resume-container" className='pv2 tc'>
            <div className='tl f2 b ml1 mv1'>Resume</div>
            <div className='f3'>
                Here's my resume. (As of Jun/2022) <br />
                You can download my resume clicking the button below.
            </div>
            <div className='mv3'>
                <a className='no-underline b mv3 mh3 ph2 f3 dark-green bg-navy hover-yellow hover-bg-green br2 ' href='./resume[YoshimasaIwano].pdf' download='./resume[YoshimasaIwano].pdf'>
                    Download My Resume
                </a>
                <img 
                    className='mv3 w-90 h-80 pointer' 
                    src={resumePicture} 
                    alt="resume [Yoshimasa Iwano]" 
                    onClick={() => setState({
                        isOpen: true
                        })
                    }
                >
                </img>
                {state.isOpen && (
                    <Lightbox
                        mainSrc={resumePicture}
                        onCloseRequest={() => setState({
                            isOpen:false
                        })}
                    />
                )}
            </div>
        </div>
    )
}