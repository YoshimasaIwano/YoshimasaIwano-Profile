/* import libraries */
import { useRef } from 'react';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { motion } from 'framer-motion';

/* import images */
import resultsImage from '../../assets/race-prediction-img/results.png';
import heatmapImage from '../../assets/race-prediction-img/heatmap.png';

/*
    RacePrediction Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

const imageArray: Array<string> = [
    resultsImage,
    heatmapImage,
]

type ToolProps = {
    name: string;
    description: string;
}

const TensorflowProps: ToolProps = {
    name: "Tesnsorflow",
    description: "Tensorflow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications.",
}

const NumpyProps: ToolProps = {
    name: "Numpy",
    description: "Numpy is the fundamental package for scientific computing with Python. It is used for handling data.",
}

const PandasProps: ToolProps = {
    name: "Pandas",
    description: "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language. It is used for creating a data frame.",
}

const ScikitLearnProps: ToolProps = {
    name: "Scikit-Learn",
    description: "Scikit-Learn is an open source and commercialy usable built on Numpy, Scipy, and Matplotlib, and is simple and efficient tools for predictive data analysis. It is used for mainly SVM ",
}

const MatplotlibProps: ToolProps = {
    name: "Matplotlib",
    description: "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. Is is used for ploting a graph",
}

const SeleniumProps: ToolProps = {
    name: "Selenium",
    description: "Selenium automates browsers. That's it!",
}

const RequestsProps: ToolProps = {
    name: "Requests",
    description: "Requests is an elegant and simple HTTP library for Python, built for human beings.",
}

const BeautifulSoupProps: ToolProps = {
    name: "Beautiful Soup",
    description: "Beautiful Soup is a Python library for pulling data out of HTML and XML files.",
}

const toolList: Array<ToolProps> = [
    TensorflowProps,
    NumpyProps,
    PandasProps,
    ScikitLearnProps,
    MatplotlibProps,
    SeleniumProps,
    RequestsProps,
    BeautifulSoupProps,
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
    This function creates RacePrediction detail page with a motion animation
    and has a scroll reference table
*/
export function RacePrediction() {
    const motivationRef = useRef<null | HTMLDivElement>(null);
    const toolsRef = useRef<null | HTMLDivElement>(null);
    const dataRef = useRef<null | HTMLDivElement>(null);
    const webScrapingRef = useRef<null | HTMLDivElement>(null);
    const dataCleaningRef = useRef<null | HTMLDivElement>(null);
    const modelRef = useRef<null | HTMLDivElement>(null);
    const resultsRef = useRef<null | HTMLDivElement>(null);
    
    const scrollToMotivation = () => motivationRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToTools = () => toolsRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToData = () => dataRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToWebScraping = () => webScrapingRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToDataCleaning = () => dataCleaningRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToModel = () => modelRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToResults = () => resultsRef.current?.scrollIntoView({
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
            <div className='tl f2 f4-ns b ml1 mv1'>Race Prediction</div>
            <div className='db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-70 w-100-ns'>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToMotivation}>・Motivation</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToTools}>・Tools</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToData}>・Data</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToWebScraping}>・Web Scraping</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToDataCleaning}>・Data Cleaning</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToModel}>・Model</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToResults}>・Results</button>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={motivationRef}>Motivation</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    The motivation is I want to apply my knowledge of machine learning to real world problems.
                </p>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    Here is 
                    <a className='no-underline b white hover-light-yellow' href='https://github.com/YoshimasaIwano/Race-Prediction'> Github Repository</a>
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={toolsRef}>Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {toolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} key={tool.name} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={dataRef}>Data</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    I used <a className='no-underline b white hover-light-yellow' href='https://www.netkeiba.com/'> netkeiba </a>
                    to collect race and horse data.<br />
                    I collected around 20000 race data from 1986 to 2022 and around 63000 horse data, who raced in JRA. 
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={webScrapingRef}>Web Scraping</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    ・Get URL<br />
                    &ensp; Using webdriver of Selenium, I can access netkeiba.com and collect the urls of race and horse data pages, and save them in each folder. <br />
                    ・Get HTML<br />
                    &ensp; Using Requests and urls I got from the previous step, I got HTML files and save them in a folder.<br />
                    ・Create data csv<br />
                    &ensp; Using BeautifulSoup and htmls, I created raw race and horse data csv files. 
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={dataCleaningRef}>Data Cleaning</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    Initially, there's a lot of columns of which value is a string, so I have to convert them into numbers. <br />
                    I added other features such as the resutls of the last 3 races and pedigree information. 
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={modelRef}>Model</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    ・ResRace<br />
                    &ensp; ResRace is based on Resnet, which has skipping connections to make layers deeper.<br />
                     ResRace predicts the order of each horse in a race, so it might predict multiple horses in a race are the first. (Winner) <br />
                    ・TransRace<br />
                    &ensp; TransRace is based on Transformer, which has self-attention architechture to pay attention to the relation between horses. <br/>
                     By making use of the advantage of time-sequential data structure, TransRace predicts identical orders in a race.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={resultsRef}>Results</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    Before evaluating the models, I split the data into train and validation with 99:1, so I used 202 race data, which contain 4848 predictions. <br />
                    Here is the summary of the results. Speaking to winner, Precision is 0.188, Recall is 0.22, and F-1 score is 0.203.<br/>
                    In my opinion, this prediction is better than human prediction.
                </p>
                <img 
                    className='db ma mv3 w-50 h-50 w-80-ns h-80-ns pointer' 
                    src={resultsImage} 
                    alt="Results" 
                    onClick={() => setState({
                        id: 0,
                        isOpen: true
                    })}
                >
                </img>
                <img 
                    className='db ma mv3 w-50 h-50 w-80-ns h-80-ns pointer' 
                    src={heatmapImage} 
                    alt="Heatmap" 
                    onClick={() => setState({
                        id: 1,
                        isOpen: true
                    })}
                >
                </img>
            </div>
        </motion.div>
    )
}

