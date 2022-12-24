/* import libraries */
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

/* import image */
import graduationResearchImage from '../../assets/project-images/graduationResearch.png';
import hiraganaClassifierImage from '../../assets/project-images/hiragana.png';
import csc868Image from '../../assets/project-images/csc868.png';
import csc317Image from '../../assets/project-images/csc317.png';
import csc600Image from '../../assets/project-images/csc600.png';
import portfolioImage from '../../assets/project-images/portfolio.png';
import racePresictionImage from '../../assets/project-images/racePrediction.png';

/*
    Project Component  
*/

type ProjectProps = {
    name: string;
    srcName: string;
    title: string,
    overview: string;
    period: string,
    tools: Array<string>;
};

const graduationResearchProps: ProjectProps = {
    name: "GraduationResearch",
    srcName: graduationResearchImage,
    title: "Graduation Research on Image Recognition",
    overview: "The purpose of this research is to identify if a tumor is malignant or benign.",
    period: "(2020.4-2021.7)",
    tools: ["Pytorch","Numpy","Pandas","Scikit-Learn","Matplotlib","Git"],
}

const hiraganaClassifierProps: ProjectProps = {
    name: "HiraganaClassifier",
    srcName: hiraganaClassifierImage,
    title: "Hiragana Classifier",
    overview: "The purpose of this team project is to create an image classifier web app.",
    period: "(2022 Thanksgiving)",
    tools: ["Tensorflow","Flask","JavaScript","AWS","Bootstrap"],
}

const csc868Props: ProjectProps = {
    name: "CSC868",
    srcName: csc868Image,
    title: "CSC868 Trader App Team Project",
    overview: "The purpose of this team project is to develop a trader app with agile devlopment in a team.",
    period: "(2022 Fall)",
    tools: ["JavaScript","MySQL","NodeJS","ExpressJS","Handlebars","AWS","Bootstrap"],
}

const csc317Props: ProjectProps = {
    name: "CSC317",
    srcName: csc317Image,
    title: "CSC317 Photo App",
    overview: "The purpose of this course is to create Photo App.",
    period: "(2021 Fall)",
    tools: ["HTML/CSS","JavaScript","MySQL","NodeJS","ExpressJS","Handlebars"],
}

const csc600Props: ProjectProps = {
    name: "CSC600",
    srcName: csc600Image,
    title: "CSC600 Music Instrument",
    overview: "The purpose of this course is to create a music instrument and a visualizer.",
    period: "(2022 Spring)",
    tools: ["TypeScirpt","React","ToneJS","SQLite","TachyonsCSS"],
}

const portfolioProps: ProjectProps = {
    name: "Portfolio",
    srcName: portfolioImage,
    title: "My Portfolio Website",
    overview: "The purpose is to create my portfolio Web site and for a fun.",
    period: "(2022 July)",
    tools: ["TypeScirpt","React","TachyonsCSS"],
}

const racePredictionProps: ProjectProps = {
    name: "RacePrediction",
    srcName: racePresictionImage,
    title: "Race Prediction",
    overview: "The purpose is to predict results of horse race.",
    period: "(2020 July - 2022 July)",
    tools: ["Tensorflow","Numpy","Pandas","Scikit-Learn","Matplotlib","Selenium","Requests","BeautifulSoup"],
}

const projectList: Array<ProjectProps> = [
    graduationResearchProps,
    hiraganaClassifierProps,
    csc868Props,
    csc317Props,
    csc600Props,
    portfolioProps,
    racePredictionProps,
];

/*
    This function creates the NavLink to each project page
*/
function ProjectContent({ name, srcName, title, overview, period, tools }: ProjectProps): JSX.Element {
    return (
        <NavLink 
            to={name} 
            className='flex-column ma mv1 pv2 w-40 w-50-ns shadow-5 br4 ba b--washed-green bg-white-40 bg-animate hover-bg-light-blue link color-inherit' 
        >
            <div className='relative tc ma w-90 h-auto'>
                <img src={srcName} alt={srcName} className='img w-150px h-150px'></img>
            </div>
            
            <div className='w-auto tc word-wrap f4 f6-ns b dark-pink mh1 mv1'>{title}</div>
            <div className='tl mh2 mv1 f4 f6-ns purple'>Overview</div>
            <p className='mh2 mv1 f5 f7-ns'>{overview}</p>
            <p className='mh2 mv1 f5 f7-ns'>{period}</p>
            <div className='tl mh2 mv1 f4 f6-ns blue'>Tools</div>
            <div className='mh2 mv1 f5 f7-ns flex flex-wrap items-center justify-start'>
                {tools.map((tool) => {
                    return (
                        <div className='tc mv1 mh2 w-auto mh0 br2 hover-bg-blue' key={tool} >{tool}</div>
                    )
                })}
            </div>
        </NavLink>
    )
};

/*
    This function returns a default project page 
*/
export function DefaultProjectPage(): JSX.Element {
    return (
        <div>
            <div className='tl f2 f4-ns b ml1 mv1'>Project</div>
            <div className='ma pv2 w-90 w-100-ns flex flex-wrap items-top justify-start'>
                {projectList.map((project) => {
                    return (
                        <ProjectContent 
                            name={project.name} 
                            srcName={project.srcName} 
                            title={project.title} 
                            overview={project.overview} 
                            period={project.period} 
                            tools={project.tools} 
                            key={project.title} 
                    />
                    )
                })}
            </div>
        </div>
    ) 
}

/*
    This function creates the main content of Project with a motion animation
*/
export function Project() {
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
    return (
        <motion.div 
            id="project-container" 
            className='pv2'
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
            <Outlet />
        </motion.div>
    )
};