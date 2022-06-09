import React from 'react';

export function Project() {
    return (
        <div id="project-container" className='pv2'>
            <div className='tl f2 b ml1 mv1'>Project</div>
            <div className='pv2 flex flex-wrap items-top justify-start'>
                {ProjectPropsList.map((project) => {
                    return <ProjectContent name={project.name} overview={project.overview} tools={project.tools} />
                })}
            </div>
        </div>
    )
};

type ProjectProps = {
    name: string;
    overview: string;
    tools: Array<string>;
};

const GraduationResearchProps: ProjectProps = {
    name: "Graduation Research",
    overview:  "The purpose of this research is to identify if a tumor is malignant or benign.",
    tools: ["Pytorch","Numpy","Pandas","Scikit-Learn","Matplotlib","Git"],
}

const CSC317Props: ProjectProps = {
    name: "CSC317",
    overview: "The purpose of this course is to create Photo App.",
    tools: ["HTML/CSS","JavaScript","MySQL"],
}

const CSC600Props: ProjectProps = {
    name: "CSC600",
    overview: "The purpose of this course is to create a music instrument and a visualizer.",
    tools: ["TypeScirpt","React"],
}

const ProjectPropsList: Array<ProjectProps> = [
    GraduationResearchProps,
    CSC317Props,
    CSC600Props,
];
    
function ProjectContent({ name, overview, tools }: ProjectProps): JSX.Element {
    return (
        <div className='pv2 w-50 br4 bg-animate hover-bg-light-blue'>
            <div className='tc f3 b mh1 mv1'>{name}</div>
            <div className='flex-column'>
                <div className=''>
                    <div className='mh1 mv1 f3'>Overview</div>
                    <p className='mh2 mv1 f4'>{overview}</p>
                </div>
                <div className=''>
                    <div className='mh1 mv1 f3'>Tools</div>
                    <div className='f4 mh2 mv1  flex flex-wrap items-center justify-start'>
                        {tools.map((tool) => {
                            return (
                                <div className='tc mv1 w-third mh0 br2 hover-bg-blue'>{tool}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};
