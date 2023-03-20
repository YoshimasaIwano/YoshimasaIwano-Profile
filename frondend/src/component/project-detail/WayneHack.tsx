/* import libraries */
import { useRef } from 'react';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
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
  id: number;
  isOpen: boolean;
};

const imageArray: Array<string> = [
  exampleImage,
  yoImage,
  shiImage,
  maImage,
  saImage
];

type ToolProps = {
  name: string;
  description: string;
};

const TypeScriptProps: ToolProps = {
  name: 'TypeScript',
  description:
    'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
};

const ReactProps: ToolProps = {
  name: 'React',
  description: 'React is a JavaScript library for building user interfaces.'
};
const AWSProps: ToolProps = {
  name: 'AWS',
  description:
    'Amazom Web Services (AWS) provides a highly reliable, scalable, low-cost infrastracture platform in the cloud.'
};

const BootstrapProps: ToolProps = {
  name: 'Bootstrap',
  description:
    'Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.'
};

const toolList: Array<ToolProps> = [
  TypeScriptProps,
  ReactProps,
  AWSProps,
  BootstrapProps
];

function ToolContent({ name, description }: ToolProps): JSX.Element {
  return (
    <div className="dt-row f4 f6-ns">
      <div className="dtc pv1 w-30 bb br b--white-50">{name}</div>
      <div className="tl dtc pv1 ph2 w-70 bb b--white-50">{description}</div>
    </div>
  );
}

/*
    This function creates WayneHack detail page with a motion animation
    and has a scroll reference table
*/
export function WayneHack() {
  const motivationRef = useRef<null | HTMLDivElement>(null);
  const toolsRef = useRef<null | HTMLDivElement>(null);
  const detailRef = useRef<null | HTMLDivElement>(null);
  const examplesRef = useRef<null | HTMLDivElement>(null);

  const scrollToMotivation = () =>
    motivationRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToTools = () =>
    toolsRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToDetail = () =>
    detailRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToExamples = () =>
    examplesRef.current?.scrollIntoView({
      behavior: 'smooth'
    });

  const initState: ImageState = {
    id: 0,
    isOpen: false
  };
  const [state, setState] = useState(initState);

  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.8
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.5
      }}
    >
      {state.isOpen && (
        <Lightbox
          mainSrc={imageArray[state.id]}
          onCloseRequest={() =>
            setState({
              id: state.id,
              isOpen: false
            })
          }
        />
      )}
      <div className="tl f2 f4-ns b ml1 mv1">Wayne Hack</div>
      <div className="db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-70 w-100-ns">
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToMotivation}
        >
          ・Motivation
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToTools}
        >
          ・Tools
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToDetail}
        >
          ・Detail
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToExamples}
        >
          ・Examples
        </button>
      </div>
      <div
        className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80"
        ref={motivationRef}
      >
        Motivation
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          We believe that there are two types of ordering systems, hunman or
          electrical device, and everyone has an experience of getting something
          different from what you ordered.
          <br />
          Human beings oftens make a mistake, while an electrical ordering
          system has less communication. <br />
          Our product has solve these problems by using a smart ChatBot based on
          ChatGPT.
        </p>
        <p className="tl mh2 mv2 f3 f5-ns">
          Here is
          <a
            className="no-underline b white hover-light-yellow"
            href="https://waynehackingfsu.net/"
          >
            {' '}
            the link for Our ChatBot
          </a>
        </p>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={toolsRef}>
        Tools
      </div>
      <div className="dt ma flex-row tc w-80">
        {toolList.map((tool) => {
          return (
            <ToolContent
              name={tool.name}
              description={tool.description}
              key={tool.name}
            />
          );
        })}
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={detailRef}>
        Detail
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          I used Flask for backend, React and Bootstrap for frontend. The main
          programming language is python for backend and TypeScript for
          frontend.
        </p>
        <p className="tl mh2 mv2 f3 f5-ns">
          This Web application is deployed on EC2 of AWS. Finally, this Website
          is protedted with a https connection.
        </p>
      </div>
      <div
        className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80"
        ref={examplesRef}
      >
        Examples
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          You can start to order typing what you want, and the chatBot will tell
          you some options available. The Chatbot will confirm your order once
          it's done. Finally, the order confimation is poped up showing the home
          button, which leads to menu page.
          <br />
          there are some examples.
        </p>
        <div className="flex flex-wrap">
          <img
            className="ma mv3 w-40 h-40 w-80-ns h-80-ns pointer"
            src={yoImage}
            alt="yo"
            onClick={() =>
              setState({
                id: 1,
                isOpen: true
              })
            }
          ></img>
          <img
            className="ma mv3 w-40 h-40 w-80-ns h-80-ns pointer"
            src={shiImage}
            alt="shi"
            onClick={() =>
              setState({
                id: 2,
                isOpen: true
              })
            }
          ></img>
          <img
            className="ma mv3 w-40 h-40 w-80-ns h-80-ns pointer"
            src={maImage}
            alt="ma"
            onClick={() =>
              setState({
                id: 3,
                isOpen: true
              })
            }
          ></img>
          <img
            className="ma mv3 w-40 h-40 w-80-ns h-80-ns pointer"
            src={saImage}
            alt="sa"
            onClick={() =>
              setState({
                id: 4,
                isOpen: true
              })
            }
          ></img>
        </div>
      </div>
    </motion.div>
  );
}
