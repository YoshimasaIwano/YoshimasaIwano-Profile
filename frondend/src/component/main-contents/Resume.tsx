/* import libraries */
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

/* import image */
import resumeImage from '../../assets/resume[YoshimasaIwano].png';

/*
    Resume Component  
*/

type ImageState = {
    isOpen: boolean,
}

/*
    This function creates the main content of Resume with a motion animation
*/
export function Resume() {
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
    const initState: ImageState = {
        isOpen: false,
    }
    const [state, setState] = useState(initState)
    
    return (
        <motion.div 
            id="resume-container" 
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
            <div className='tl f2 f4-ns b ml1 mv1'>Resume</div>
            <div className='f3 f5-ns'>
                Here's my resume. (As of Dec/2022) <br />
                You can download my resume clicking the button below.
            </div>
            <div className='mv3'>
                <a className='no-underline b mv3 mh3 ph2 f3 f5-ns dark-green bg-navy hover-yellow hover-bg-green br2 ' href='./resume[YoshimasaIwano].pdf' download='./resume[YoshimasaIwano].pdf'>
                    Download My Resume
                </a>
                <div className='ma'>
                    <img 
                        className='mv3 w-50 h-40 w-90-ns h-70-ns pointer' 
                        src={resumeImage} 
                        alt="resume [Yoshimasa Iwano]" 
                        onClick={() => setState({
                            isOpen: true
                            })
                        }
                    >
                    </img>
                </div>
                
                {state.isOpen && (
                    <Lightbox
                        mainSrc={resumeImage}
                        onCloseRequest={() => setState({
                            isOpen: false
                        })}
                    />
                )}
            </div>
        </motion.div>
    )
}