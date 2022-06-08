import React from 'react';

export function Project() {
    return (
        <div id="project-container" className='pv2 tc f1'>
            <h5 className='tl ml1 mv1'>Project</h5>
            <div className='pv2 flex flex-wrap items-top justify-start'>
                <GraduationResearch />
                <CSC317 />
                <CSC600 />
            </div>
        </div>
    )
}

function GraduationResearch(): JSX.Element {
    return (
        <div className='pv2 tc w-50'>
            <h6 className='mh1 mv1'>Graduation Research</h6>
            <div className='flex-column'>
                <div className='tl'>
                    <div className='tl mh1 mv1 f3'>
                        Overview
                    </div>
                    <p className='mh2 mv1 f4'>
                        The purpose of this research is to identify if a tumor is malignant or benign.
                    </p>
                </div>
                <div className='tl'>
                    <div className='mh1 mv1 f3'>
                        Tools
                    </div>
                    <div className='mh2 mv1 flex flex-wrap items-center justify-start'>
                        <div className='w-third mh0 f4'>Pytorch</div>
                        <div className='w-third mh0 f4'>Numpy</div>
                        <div className='w-third mh0 f4'>Pandas</div>
                        <div className='w-third mh0 f4'>Scikit-Learn</div>
                        <div className='w-third mh0 f4'>Matplotlib</div>
                        <div className='w-third mh0 f4'>Git</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CSC317(): JSX.Element {
    return (
        <div className='pv2 tc w-50'>
            <h6 className='mh1 mv1'>CSC317</h6>
            <div className='flex-column'>
                <div className='tl'>
                    <div className='tl mh1 mv1 f3'>
                        Overview
                    </div>
                    <p className='mh2 mv1 f4'>
                        The purpose of this course is to create Photo App.
                    </p>
                </div>
                <div className='tl'>
                    <div className='mh1 mv1 f3'>
                        Tools
                    </div>
                    <div className='mh2 mv1 flex flex-wrap items-center justify-start'>
                        <div className='w-third mh0 f4'>HTML/CSS</div>
                        <div className='w-third mh0 f4'>JavaScript</div>
                        <div className='w-third mh0 f4'>MySQL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CSC600(): JSX.Element {
    return (
        <div className='pv2 tc w-50'>
            <h6 className='mh1 mv1'>CSC600</h6>
            <div className='flex-column'>
                <div className='tl'>
                    <div className='tl mh1 mv1 f3'>
                        Overview
                    </div>
                    <p className='mh2 mv1 f4'>
                        The purpose of this course is to create a music instrument and a visualizer.
                    </p>
                </div>
                <div className='tl'>
                    <div className='mh1 mv1 f3'>
                        Tools
                    </div>
                    <div className='mh2 mv1 flex flex-wrap items-center justify-start'>
                        <div className='w-third mh0 f4'>TypeScirpt</div>
                        <div className='w-third mh0 f4'>React</div>
                    </div>
                </div>
            </div>
        </div>
    )
}