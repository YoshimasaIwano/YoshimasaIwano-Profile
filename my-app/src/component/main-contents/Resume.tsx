import resumePicture from '../../assets/resume[YoshimasaIwano].png';

/*
    Resume Component  
*/

export function Resume() {
    return (
        <div id="resume-container" className='pv2 tc'>
            <div className='tl f2 b ml1 mv1'>Resume</div>
            <div className='light-yellow f3'>
                Here's my resume. (As of Jun/2022) <br />
                You can download my resume clicking the button below.
            </div>
            <div className='flex-nowrap mv3'>
                <a className='no-underline b mv3 mh3 ph2 f3 dark-green bg-navy hover-yellow hover-bg-green br2 ' href="./resume[YoshimasaIwano].pdf" download="./resume[YoshimasaIwano].pdf">
                    Download My Resume
                </a>
                <img src={resumePicture} alt='resume' className='content-center mv3 w-80 h-100'></img>
            </div>
        </div>
    )
}