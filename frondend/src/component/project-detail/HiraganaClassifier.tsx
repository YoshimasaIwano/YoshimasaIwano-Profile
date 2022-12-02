/* import libraries */
import { useRef } from 'react';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { motion } from 'framer-motion';

/* import images */
import exampleImage from '../../assets/hiragana-img/hiraganaExamples.png';
import yoImage from '../../assets/hiragana-img/yo.png';
import shiImage from '../../assets/hiragana-img/shi.png';
import maImage from '../../assets/hiragana-img/ma.png';
import saImage from '../../assets/hiragana-img/sa.png';

/*
    RacePrediction Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

const imageArray: Array<string> = [
    exampleImage,
    yoImage,
    shiImage,
    maImage,
    saImage,
]

type ToolProps = {
    name: string;
    description: string;
}

const TensorflowProps: ToolProps = {
    name: "Tesnsorflow",
    description: "Tensorflow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications.",
}

const JavaScriptProps: ToolProps = {
    name: "JavaScript",
    description: "JavaScript is the world's most poplar programming language. It is the language of Web.",
}

const FlaskProps: ToolProps = {
    name: "Flask",
    description: "Flask is considered more pythonic than Django web framework because in common situations the equivalent Flask web application is more explicit.",
}

const AWSProps: ToolProps = {
    name: "AWS",
    description: "Amazom Web Services (AWS) provides a highly reliable, scalable, low-cost infrastracture platform in the cloud.",
}

const toolList: Array<ToolProps> = [
    TensorflowProps,
    JavaScriptProps,
    FlaskProps,
    AWSProps,
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
    This function creates HiraganaClassifier detail page with a motion animation
    and has a scroll reference table
*/
export function HiraganaClassifier() {
    const motivationRef = useRef<null | HTMLDivElement>(null);
    const toolsRef = useRef<null | HTMLDivElement>(null);
    const detailRef = useRef<null | HTMLDivElement>(null);
    const examplesRef = useRef<null | HTMLDivElement>(null);
    
    const scrollToMotivation = () => motivationRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToTools = () => toolsRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToDetail = () => detailRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToExamples = () => examplesRef.current?.scrollIntoView({
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
            <div className='tl f2 f4-ns b ml1 mv1'>Hiragana Classifier</div>
            <div className='db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-70 w-100-ns'>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToMotivation}>・Motivation</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToTools}>・Tools</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToDetail}>・Detail</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer' onClick={scrollToExamples}>・Examples</button>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={motivationRef}>Motivation</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    The motivation is I want to work on team project, so this web application is created with my friend during thanksgiving week in 2022.
                    I want to create a web app using both deeplearning knowledge and software engineering skills and deploy it on AWS.
                </p>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    Here is 
                    <a className='no-underline b white hover-light-yellow' href='http://ec2-54-213-124-146.us-west-2.compute.amazonaws.com:5000/'> the link for Hiragana Classifier</a>
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={toolsRef}>Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {toolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} key={tool.name} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={scrollToDetail}>Detail</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    I used Flask for backend, CSS/JS for frontend, and tensorflow for image classification model.<br/>
                    Specifically, the drawing squre is implemented by CreateJS and popup image of all hiragana is implemented by luminousJS. 
                    The classification model is based on EfficientNetb0 by fine-tuning.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 f5-ns b dark-gray w-80' ref={scrollToExamples}>Examples</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3 f5-ns'>
                    When you draw a hiragana on the white square box, then click the predict button, the image will be sent to the server and the model will return the predicted label and the confidence. <br/>
                    there are some examples.
                </p>
                <div className='flex flex-wrap'>
                    <img 
                        className='ma mv3 w-40 h-40 w-80-ns h-80-ns pointer' 
                        src={yoImage} 
                        alt="yo" 
                        onClick={() => setState({
                            id: 1,
                            isOpen: true
                        })}
                    >
                    </img>
                    <img 
                        className='ma mv3 w-40 h-40 w-80-ns h-80-ns pointer' 
                        src={shiImage} 
                        alt="shi" 
                        onClick={() => setState({
                            id: 2,
                            isOpen: true
                        })}
                    >
                    </img>
                    <img 
                        className='ma mv3 w-40 h-40 w-80-ns h-80-ns pointer' 
                        src={maImage} 
                        alt="ma" 
                        onClick={() => setState({
                            id: 3,
                            isOpen: true
                        })}
                    >
                    </img>
                    <img 
                        className='ma mv3 w-40 h-40 w-80-ns h-80-ns pointer' 
                        src={saImage} 
                        alt="sa" 
                        onClick={() => setState({
                            id: 4,
                            isOpen: true
                        })}
                    >
                    </img>
                </div>
            </div>
        </motion.div>
    )
}

