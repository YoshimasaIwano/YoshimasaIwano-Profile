/* import libraries */
import { useRef } from 'react';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { motion } from 'framer-motion';

/* import images */
import csc317DemoVideo from '../../assets/csc317-img/csc317DemoVideo.mp4';
import registration from '../../assets/csc317-img/registration.png';
import logIn from '../../assets/csc317-img/logIn.png';
import postImage from '../../assets/csc317-img/postImage.png';
import comment from '../../assets/csc317-img/comment.png';
import search from '../../assets/csc317-img/search.png';

/*
    CSC317 Detail Component  
*/

type ImageState = {
  id: number;
  isOpen: boolean;
};

const imageArray: Array<string> = [
  registration,
  logIn,
  postImage,
  comment,
  search
];

type ToolProps = {
  name: string;
  description: string;
};

const HTMLCSSProps: ToolProps = {
  name: 'HTML/CSS',
  description:
    'HTML is the standard markup language for creating Web pages, and CSS is used to format the layout of a webpage.'
};

const JavaScriptProps: ToolProps = {
  name: 'JavaScript',
  description:
    'JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. It is most well-known as the scripting language for Web pages.'
};

const MySQLProps: ToolProps = {
  name: 'MySQL',
  description: "MySQL is the world's most popular open source database."
};

const NodeJSProps: ToolProps = {
  name: 'NodeJS',
  description:
    "NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine."
};

const ExpressJSProps: ToolProps = {
  name: 'ExpressJS',
  description:
    'ExpressJS is a fast, unopinionated, minimalist web framework for Node.js'
};

const HandlebarsProps: ToolProps = {
  name: 'Handlebars',
  description:
    'Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.'
};

const toolList: Array<ToolProps> = [
  HTMLCSSProps,
  JavaScriptProps,
  MySQLProps,
  NodeJSProps,
  ExpressJSProps,
  HandlebarsProps
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
    This function creates CSC317 detail page with a motion animation
    and has a scroll reference table
*/
export function CSC317() {
  const purposeRef = useRef<null | HTMLDivElement>(null);
  const toolsRef = useRef<null | HTMLDivElement>(null);
  const userRef = useRef<null | HTMLDivElement>(null);
  const postRef = useRef<null | HTMLDivElement>(null);
  const commentRef = useRef<null | HTMLDivElement>(null);
  const searchRef = useRef<null | HTMLDivElement>(null);
  const demoVideoRef = useRef<null | HTMLDivElement>(null);
  const scrollToPurpose = () =>
    purposeRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToTools = () =>
    toolsRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToUser = () =>
    userRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToPost = () =>
    postRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToComment = () =>
    commentRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToSearch = () =>
    searchRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  const scrollToDemoVideo = () =>
    demoVideoRef.current?.scrollIntoView({
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
      <div className="tl f2 f4-ns b ml1 mv1">CSC317 Photo App</div>
      <div className="db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-70 w-100-ns">
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToPurpose}
        >
          ・Purpose
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToTools}
        >
          ・Tools
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToUser}
        >
          ・Create a new user
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToPost}
        >
          ・Create a new post
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToComment}
        >
          ・Comment on the post
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToSearch}
        >
          ・Search for the created post
        </button>
        <button
          className="mh2 mv1 br3 bn tl bg-white-50 f4 f6-ns w-50 w-80-ns pointer"
          onClick={scrollToDemoVideo}
        >
          ・Demo Video
        </button>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={purposeRef}>
        Purpose
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          The purpose of this project is to implement a photo management website
          that allows users to post images, search for images and view and
          comment on individual image posts.
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
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={userRef}>
        Create a new user
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          To create a new user and log in as a new user, I created Registration
          page and Log In page.
          <br />
          When you submit a user information to register, all information are
          checked if it is valid.
          <br />
          For example, an username should be more than 2 characters, a password
          should contain a capital character, a number, and a special character
          and should be more than 8 characters. An email address should follow
          the email format. If you enter an invalid information, the error
          message will pop up.
        </p>
        <div className="flex">
          <img
            className="db ma mv3 w-50 h-50 pointer"
            src={registration}
            alt="Registration"
            onClick={() =>
              setState({
                id: 0,
                isOpen: true
              })
            }
          ></img>
          <img
            className="db ma mv3 w-50 h-50 pointer"
            src={logIn}
            alt="LogIn"
            onClick={() =>
              setState({
                id: 1,
                isOpen: true
              })
            }
          ></img>
        </div>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={postRef}>
        Create a new post
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          After logging in, you will see log out navigation bar on the top, and
          you can post a new image.
          <br />
        </p>
        <img
          className="db ma mv3 w-50 h-50 w-80-ns h-80-ns pointer"
          src={postImage}
          alt="PostImage"
          onClick={() =>
            setState({
              id: 2,
              isOpen: true
            })
          }
        ></img>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={commentRef}>
        Comment on the post
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          After creating a new image post, you will see a new post on the main
          page. when you click an image, you can see the detail of the image and
          comment on the post.
        </p>
        <img
          className="db ma mv3 w-50 h-50 w-80-ns h-80-ns pointer"
          src={comment}
          alt="Comment"
          onClick={() =>
            setState({
              id: 3,
              isOpen: true
            })
          }
        ></img>
      </div>
      <div className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80" ref={searchRef}>
        Search for the created post
      </div>
      <div className="db ma flex-row flex-nowrap justify-items-center tc w-80">
        <p className="tl mh2 mv2 f3 f5-ns">
          You can search an image using the searching bar. You can type in
          title, description, and comment. After clicking the search button, you
          will see the result on the main page.
        </p>
        <img
          className="db ma mv3 w-50 h-50 w-80-ns h-80-ns pointer"
          src={search}
          alt="Search"
          onClick={() =>
            setState({
              id: 4,
              isOpen: true
            })
          }
        ></img>
      </div>
      <div
        className="db ma mh1 mv3 f3 f5-ns b dark-gray w-80"
        ref={demoVideoRef}
      >
        Demo Video
      </div>
      <video
        controls
        playsInline
        className="db ma mv3 w-50 h-50 w-80-ns h-80-ns"
      >
        <source src={csc317DemoVideo} type="video/mp4"></source>
      </video>
    </motion.div>
  );
}
