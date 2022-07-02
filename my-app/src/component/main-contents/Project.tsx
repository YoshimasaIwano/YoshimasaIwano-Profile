import { NavLink, Outlet } from 'react-router-dom';

/*
    Project Component  
*/

export function Project() {
    return (
        <div id="project-container" className='pv2'>
            <Outlet />
        </div>
    )
};

type ProjectProps = {
    name: string;
    overview: string;
    tools: Array<string>;
};

const GraduationResearchProps: ProjectProps = {
    name: "GraduationResearch",
    overview:  "The purpose of this research is to identify if a tumor is malignant or benign. (2020.4-2021.7)",
    tools: ["Pytorch","Numpy","Pandas","Scikit-Learn","Matplotlib","Git"],
}

const CSC317Props: ProjectProps = {
    name: "CSC317",
    overview: "The purpose of this course is to create Photo App. (2021 Fall)",
    tools: ["HTML/CSS","JavaScript","MySQL","NodeJS","ExpressJS","Handlebars"],
}

const CSC600Props: ProjectProps = {
    name: "CSC600",
    overview: "The purpose of this course is to create a music instrument and a visualizer. (2022 Spring)",
    tools: ["TypeScirpt","React","ToneJS","SQLite"],
}

const ProjectList: Array<ProjectProps> = [
    GraduationResearchProps,
    CSC317Props,
    CSC600Props,
];

function ProjectContent({ name, overview, tools }: ProjectProps): JSX.Element {
    return (
        <NavLink to={name} className='pv2 w-50 br4 ba b--washed-green bg-white-40 bg-animate hover-bg-light-blue link color-inherit'>
            <div className='tc f3 b mh1 mv1'>{name}</div>
            <div className='flex-column'>
                <div className=''>
                    <div className='w-third tc mh1 mv1 f3 purple br2 bg-white-90'>Overview</div>
                    <p className='mh2 mv1 f4'>{overview}</p>
                </div>
                <div className=''>
                    <div className='w-third tc mh1 mv1 f3 blue br2 bg-light-yellow'>Tools</div>
                    <div className='f4 mh2 mv1  flex flex-wrap items-center justify-start'>
                        {tools.map((tool) => {
                            return (
                                <div className='tc mv1 w-third mh0 br2 hover-bg-blue'>{tool}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </NavLink>
    )
};

export function DefaultProjectPage(): JSX.Element {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>Project</div>
            <div className='pv2 flex flex-wrap items-top justify-start'>
                {ProjectList.map((project) => {
                    return <ProjectContent name={project.name} overview={project.overview} tools={project.tools} />
                })}
            </div>
        </>
    ) 
}