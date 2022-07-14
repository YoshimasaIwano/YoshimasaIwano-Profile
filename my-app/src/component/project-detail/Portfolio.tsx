import homeImage from '../../assets/portfolio-img/home.png';
import projectImage from '../../assets/portfolio-img/project.png';
import resumeImage from '../../assets/portfolio-img/resume.png';
import galleryImage from '../../assets/portfolio-img/gallery.png';
import categorySectionImage from '../../assets/portfolio-img/categorySection.png';

import { useRef } from 'react';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { motion } from 'framer-motion';

/*
    Portfolio Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

const imageArray: Array<string> = [
    homeImage,
    projectImage,
    resumeImage,
    galleryImage,
    categorySectionImage,
]

export function Portfolio() {
    const motivationRef = useRef<null | HTMLDivElement>(null);
    const toolsRef = useRef<null | HTMLDivElement>(null);
    const homeRef = useRef<null | HTMLDivElement>(null);
    const projectRef = useRef<null | HTMLDivElement>(null);
    const resumeRef = useRef<null | HTMLDivElement>(null);
    const galleryRef = useRef<null | HTMLDivElement>(null);
    
    const scrollToMotivation = () => motivationRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToTools = () => toolsRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToHome = () => homeRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToProject = () => projectRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToResume = () => resumeRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToGallery = () => galleryRef.current?.scrollIntoView({
        behavior: 'smooth',
    });

    const initState: ImageState = {
        id: 0,
        isOpen: false,
    }
    const [state, setState] = useState(initState)

    return (
        <motion.div
            initial={{
                opacity: 0.5,
                scale: 0.8,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            {state.isOpen && (
                <Lightbox
                    mainSrc={imageArray[state.id]}
                    onCloseRequest={() => setState({
                        id: state.id,
                        isOpen:false
                    })}
                />
            )}
            <div className='tl f2 b ml1 mv1'>My Portfolio Website</div>
            <div className='db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-50'>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 w-80 pointer' onClick={scrollToMotivation}>・Motivation</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 w-80 pointer' onClick={scrollToTools}>・Tools</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 w-80 pointer' onClick={scrollToHome}>・Home</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 w-80 pointer' onClick={scrollToProject}>・Project</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 w-80 pointer' onClick={scrollToResume}>・Resume</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 w-80 pointer' onClick={scrollToGallery}>・Gallery</button>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={motivationRef}>Motivation</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The motivation is I want to apply my knowledge learned from CSC317 and CSC600 to creating a Website.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={toolsRef}>Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {toolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} key={tool.name} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={homeRef}>Home</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    One of the outstanding point in my Home page is a moving balloon background. Tbis is implemeted by tsParticles. I wrote parameters from scratch.<br />
                    I also implemeted navagation bars on the top by using NavLink and Router in React. you can easily go to Home, Project, Resume, and Gallery page.<br />
                    In addition, you can jump to my social media accounts when you click the icons. 
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 pointer' 
                    src={homeImage} 
                    alt="Home" 
                    onClick={() => setState({
                        id: 0,
                        isOpen: true
                        })
                    }
                >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={projectRef}>Project</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    You can see all of my projects I have ever done and you can see the detail of each project when you click each project block.<br />
                    This is also implemeted by NavLink and Router. The difficulity is this navigation is nested router inside the main navigation.
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 pointer' 
                    src={projectImage} 
                    alt="Project" 
                    onClick={() => setState({
                        id: 1,
                        isOpen: true
                        })
                    }
                >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={resumeRef}>Resume</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The Resume page is simple. There are just a download button and my resume image.<br />
                    If you want to download my resume, you can click the download button. If you want to watch my resume carefully, you can click my resume image.   
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 pointer' 
                    src={resumeImage} 
                    alt="Resume" 
                    onClick={() => setState({
                        id: 2,
                        isOpen: true
                        })
                    }
                >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={galleryRef}>Gallery</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    I like to take pictures and all pictues in this gallery are mine.<br />
                    The initial Gallery page shows 4 categories of images; nightsky, landscape, flower, and food. you can go to each category page.<br />
                    This is also implemted by Navlink and Router.
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 pointer' 
                    src={galleryImage} 
                    alt="Gallery" 
                    onClick={() => setState({
                        id: 3,
                        isOpen: true
                        })
                    }
                >
                </img>
                <p className='tl mh2 mv2 f3'>
                    In each category section, you can see a lot of pictures. You can also filter images using fileter buttons. Moreover, you can search a image using keywords.<br />
                    This function is implemented by React and TypeScript.<br />
                    When you click each image, you will see the detail of the image. This is implemented by Lightbox in React.
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 pointer' 
                    src={categorySectionImage} 
                    alt="Category Section" 
                    onClick={() => setState({
                        id: 4,
                        isOpen: true
                        })
                    }
                >
                </img>
            </div>
        </motion.div>
    )
}

type ToolProps = {
    name: string;
    description: string;
}

const TypeScriptProps: ToolProps = {
    name: "TypeScript",
    description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
}

const ReactProps: ToolProps = {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
}

const toolList: Array<ToolProps> = [
    TypeScriptProps,
    ReactProps,
];
  
function ToolContent({ name, description }: ToolProps): JSX.Element {
    return (
        <div className='dt-row f4'>
            <div className='dtc pv1 w-30 bb br b--white-50'>
                {name}
            </div>
            <div className='tl dtc pv1 ph2 w-70 bb b--white-50'>
                {description}
            </div>
        </div>
    )
} 