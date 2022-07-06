import { NavLink, Outlet } from 'react-router-dom';
import graduationResearchImage from '../../assets/project-images/graduationResearch.png';
import CSC317Image from '../../assets/project-images/CSC317.png';
import CSC600Image from '../../assets/project-images/CSC600.png';

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
    srcName: string;
    title: string,
    overview: string;
    period: string,
    tools: Array<string>;
};

const GraduationResearchProps: ProjectProps = {
    name: "GraduationResearch",
    srcName: graduationResearchImage,
    title: "Graduation Research on Image Recognition",
    overview: "The purpose of this research is to identify if a tumor is malignant or benign.",
    period: "(2020.4-2021.7)",
    tools: ["Pytorch","Numpy","Pandas","Scikit-Learn","Matplotlib","Git"],
}

const CSC317Props: ProjectProps = {
    name: "CSC317",
    srcName: CSC317Image,
    title: "CSC317 Photo App",
    overview: "The purpose of this course is to create Photo App.",
    period: "(2021 Fall)",
    tools: ["HTML/CSS","JavaScript","MySQL","NodeJS","ExpressJS","Handlebars"],
}

const CSC600Props: ProjectProps = {
    name: "CSC600",
    srcName: CSC600Image,
    title: "CSC600 Music Instrument",
    overview: "The purpose of this course is to create a music instrument and a visualizer.",
    period: "(2022 Spring)",
    tools: ["TypeScirpt","React","ToneJS","SQLite"],
}

const ProjectList: Array<ProjectProps> = [
    GraduationResearchProps,
    CSC317Props,
    CSC600Props,
];

function ProjectContent({ name, srcName, title, overview, period, tools }: ProjectProps): JSX.Element {
    return (
        <NavLink to={name} className='flex-column ma mv1 pv2 w-40 shadow-5 br4 ba b--washed-green bg-white-40 bg-animate hover-bg-light-blue link color-inherit'>
            <div className='relative ma w-80 h-auto'>
                <img src={srcName} alt={srcName} className='img'></img>
            </div>
            
            <div className='w-auto tc word-wrap f4 b dark-pink mh1 mv1'>{title}</div>
            <div className='tl mh2 mv1 f4 purple'>Overview</div>
            <p className='mh2 mv1 f5'>{overview}</p>
            <p className='mh2 mv1 f5'>{period}</p>
            <div className='tl mh2 mv1 f4 blue'>Tools</div>
            <div className='f5 mh2 mv1 flex flex-wrap items-center justify-start'>
                {tools.map((tool) => {
                    return (
                        <div className='tc mv1 mh2 w-auto mh0 br2 hover-bg-blue'>{tool}</div>
                    )
                })}
            </div>
        </NavLink>
    )
};

export function DefaultProjectPage(): JSX.Element {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>Project</div>
            <div className='ma pv2 w-90 flex flex-wrap items-top justify-start'>
                {ProjectList.map((project) => {
                    return <ProjectContent name={project.name} srcName={project.srcName} title={project.title} overview={project.overview} period={project.period} tools={project.tools} />
                })}
            </div>
        </>
    ) 
}