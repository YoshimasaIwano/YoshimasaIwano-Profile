import React from 'react';

export function Project() {
    return (
        <div id="project-container" className='pv2'>
            <div className='tl f2 b ml1 mv1'>Project</div>
            <div className='pv2 flex flex-wrap items-top justify-start'>
                <GraduationResearch />
                <CSC317 />
                <CSC600 />
            </div>
        </div>
    )
}

type ProjectProps = {
    name: string;
    overview: string;
    tools: Array<string>;
}

function ProjectContent({ name, overview, tools }: ProjectProps): JSX.Element {
    return (
        <div className='pv2 w-50'>
            <div className='tc f3 b mh1 mv1'>{name}</div>
            <div className='flex-column'>
                <div className=''>
                    <div className='mh1 mv1 f3'>Overview</div>
                    <p className='mh2 mv1 f4'>{overview}</p>
                </div>
                <div className=''>
                    <div className='mh1 mv1 f3'>Tools</div>
                    <div className='f4 mh2 mv1 flex flex-wrap items-center justify-start'>
                        {tools.map((tool) => {
                            return (
                                <div className='w-third mh0'>{tool}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

function GraduationResearch(): JSX.Element {
    const name: string = "Graduation Research" 
    const overview: string = "The purpose of this research is to identify if a tumor is malignant or benign."
    const tools: Array<string> = ["Pytorch","Numpy","Pandas","Scikit-Learn","Matplotlib","Git"]
    return (
        <ProjectContent name={name} overview={overview} tools={tools} />
    )
}

function CSC317(): JSX.Element {
    const name: string = "CSC317" 
    const overview: string = "The purpose of this course is to create Photo App."
    const tools: Array<string> = ["HTML/CSS","JavaScript","MySQL"]
    return (
        <ProjectContent name={name} overview={overview} tools={tools} />
    )
}

function CSC600(): JSX.Element {
    const name: string = "CSC600" 
    const overview: string = "The purpose of this course is to create a music instrument and a visualizer."
    const tools: Array<string> = ["TypeScirpt","React"]
    return (
        <ProjectContent name={name} overview={overview} tools={tools} />
    )
}