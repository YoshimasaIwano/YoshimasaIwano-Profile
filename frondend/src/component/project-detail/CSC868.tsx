/* import libraries */
import { useRef } from 'react';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { motion } from 'framer-motion';

/* import images */
import search from '../../assets/csc868-img/search.png';
import message from '../../assets/csc868-img/messageForm.png';
import register from '../../assets/csc868-img/registerForm.png';
import login from '../../assets/csc868-img/loginForm.png';
import post from '../../assets/csc868-img/postForm.png';
import userDashboard from '../../assets/csc868-img/userDashboard.png';

/*
    CSC868 Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

const imageArray: Array<string> = [
    search,
    message,
    register,
    login,
    post,
    userDashboard,
]

type ToolProps = {
    name: string;
    description: string;
}

const JavaScriptProps: ToolProps = {
    name: "JavaScript",
    description: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. It is most well-known as the scripting language for Web pages.",
}

const MySQLProps: ToolProps = {
    name: "MySQL",
    description: "MySQL is the world's most popular open source database.",
}

const NodeJSProps: ToolProps = {
    name: "NodeJS",
    description: "NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
}

const ExpressJSProps: ToolProps = {
    name: "ExpressJS",
    description: "ExpressJS is a fast, unopinionated, minimalist web framework for Node.js",
}

const HandlebarsProps: ToolProps = {
    name: "Handlebars",
    description: "Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.",
}

const AWSProps: ToolProps = {
    name: "AWS",
    description: "Amazom Web Services (AWS) provides a highly reliable, scalable, low-cost infrastracture platform in the cloud.",
}

const BootstrapProps: ToolProps = {
    name: "Bootstrap",
    description: "Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.",
}

const toolList: Array<ToolProps> = [
    JavaScriptProps,
    MySQLProps,
    NodeJSProps,
    ExpressJSProps,
    HandlebarsProps,
    AWSProps,
    BootstrapProps,
];

function ToolContent({ name, description }: ToolProps): JSX.Element {
    return (
        <div className='dt-row f4 f6-ns'>
            <div className='dtc pv1 w-30 bb br b--white-50'>
                {name}
            </div>
            <div className='tl dtc pv1 ph2 w-70 bb b--white-50'>
                {description}
            </div>
        </div>
    )
}     

/*
    This function creates CSC868 detail page with a motion animation
    and has a scroll reference table
*/
export function CSC868() {
    const purposeRef = useRef<null | HTMLDivElement>(null);
    const toolsRef = useRef<null | HTMLDivElement>(null);
    const searchRef = useRef<null | HTMLDivElement>(null);
    const messageFormRef = useRef<null | HTMLDivElement>(null);
    const registerFormRef = useRef<null | HTMLDivElement>(null);
    const loginFormRef = useRef<null | HTMLDivElement>(null);
    const postFormRef = useRef<null | HTMLDivElement>(null);
    const userDashboardRef = useRef<null | HTMLDivElement>(null);
    const myResponsibilityRef = useRef<null | HTMLDivElement>(null);
    const challengesRef = useRef<null | HTMLDivElement>(null);
    const scrollToPurpose = () => purposeRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToTools = () => toolsRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToSearch = () => searchRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToMessageForm = () => messageFormRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToRegisterForm = () => registerFormRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToLoginForm = () => loginFormRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToPostForm = () => postFormRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToUserDashboard = () => userDashboardRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToMyResponsibility = () => myResponsibilityRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToChallenges = () => challengesRef.current?.scrollIntoView({
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
                        isOpen: false,
                    })}
                />
            )}
            <div className='tl f2 f4-ns b ml1 mv1'>CSC868 Trader App Team Project</div>
            <div className='db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-70 w-100-ns'>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToPurpose}>・Purpose and Outcomes</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToTools}>・Tools</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToSearch}>・Search</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToMessageForm}>・Message Form</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToRegisterForm}>・Register Form</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToLoginForm}>・Login Form</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToPostForm}>・Post Form</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToUserDashboard}>・User Dashboard</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToMyResponsibility}>・My Responsibility</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToChallenges}>・Challenges</button>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={purposeRef}>Purpose and Outcomes</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    The purpose of this project is to implement a trader web application with agile development in a team. <br />
                </p>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    Here is the links for
                    <a className='no-underline b white hover-light-yellow' href='https://github.com/YoshimasaIwano/csc868-team7'> Github </a>
                    and 
                    <a className='no-underline b white hover-light-yellow' href='http://gatertrader.com/'> Website </a>
                </p>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    In terms of techniques, I learned a lot about backend skills such as EC2 of AWS and MySQL. <br />
                    Also, I realized the importance of communication in a team project. I am the most experienced student among the other team members, so I helped them set up the development environment and told them how to learn new tools.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={toolsRef}>Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {toolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} key={tool.name} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={searchRef}>Search</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    
                </p>
                <div className='flex'>
                    <img 
                        className='db ma mv3 w-50 h-50 pointer' 
                        src={search} 
                        alt="Search" 
                        onClick={() => setState({
                            id: 0,
                            isOpen: true
                            })
                        }
                    >
                    </img>
                </div>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={messageFormRef}>Message Form</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    After logging in, you will see log out navigation bar on the top, and you can post a new image.<br />  
                </p>
                <img 
                        className='db ma mv3 w-50 h-50 pointer' 
                        src={message} 
                        alt="Message" 
                        onClick={() => setState({
                            id: 1,
                            isOpen: true
                            })
                        }
                    >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={registerFormRef}>Register Form</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    After creating a new image post, you will see a new post on the main page. when you click an image, you can see the detail of the image and comment on the post.
                </p>
                <img 
                        className='db ma mv3 w-50 h-50 pointer' 
                        src={register} 
                        alt="Register" 
                        onClick={() => setState({
                            id: 2,
                            isOpen: true
                            })
                        }
                    >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={loginFormRef}>Login Form</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    You can search an image using the searching bar. You can type in title, description, and comment. After clicking the search button, you will see the result on the main page.  
                </p>
                <img 
                        className='db ma mv3 w-50 h-50 pointer' 
                        src={login} 
                        alt="Login" 
                        onClick={() => setState({
                            id: 3,
                            isOpen: true
                            })
                        }
                    >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={postFormRef}>Post Form</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    You can search an image using the searching bar. You can type in title, description, and comment. After clicking the search button, you will see the result on the main page.  
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 w-80-ns h-80-ns pointer' 
                    src={post} 
                    alt="Post" 
                    onClick={() => setState({
                        id: 4,
                        isOpen: true
                        })
                    }
                >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={userDashboardRef}>User Dashboard</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    You can search an image using the searching bar. You can type in title, description, and comment. After clicking the search button, you will see the result on the main page.  
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 w-80-ns h-80-ns pointer' 
                    src={userDashboard} 
                    alt="User Dashboard" 
                    onClick={() => setState({
                        id: 5,
                        isOpen: true
                        })
                    }
                >
                </img>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={myResponsibilityRef}>My Responsibility</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    You can search an image using the searching bar. You can type in title, description, and comment. After clicking the search button, you will see the result on the main page.  
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={challengesRef}>Challenges</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    You can search an image using the searching bar. You can type in title, description, and comment. After clicking the search button, you will see the result on the main page.  
                </p>
            </div>
        </motion.div>
    )
}

