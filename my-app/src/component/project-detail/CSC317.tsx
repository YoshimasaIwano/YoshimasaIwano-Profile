import CSC317DemoVideo from '../../assets/CSC317-img/CSC317DemoVideo.mp4';
import Registration from '../../assets/CSC317-img/Registration.png';
import LogIn from '../../assets/CSC317-img/LogIn.png';
import PostImage from '../../assets/CSC317-img/PostImage.png';
import Comment from '../../assets/CSC317-img/Comment.png';
import Search from '../../assets/CSC317-img/Search.png';

/*
    CSC317 Detail Component  
*/

export function CSC317() {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>CSC317</div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Purpose</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The purpose of this project is to implement a photo management website that allows users to post images, search for images and view and comment on individual image posts.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {ToolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Create a new user</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    To create a new user and log in as a new user, I created Registration page and Log In page.<br />
                    When you submit a user information to register, all information are checked if it is valid.
                </p>
                <div className='flex'>
                    <img src={Registration} className="db ma mv3 w-50 h-50"></img>
                    <img src={LogIn} className="db ma mv3 w-50 h-50"></img>
                </div>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Create a new post</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    After logging in, you will see log out navigation bar on the top, and you can post a new image.<br />  
                </p>
                <img src={PostImage} className="db ma mv3 w-50 h-50"></img>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Comment on the post</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    After creating a new image post, you will see a new post on the main page. when you click an image, you can see the detail of the image and comment on the post.
                </p>
                <img src={Comment} className="db ma mv3 w-50 h-50"></img>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Search for the created post</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    You can search an image using the searching bar. You can type in title, description, and comment. After clicking the search button, you will see the result on the main page.  
                </p>
                <img src={Search} className="db ma mv3 w-50 h-50"></img>
            </div>
            
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Demo Video</div>
            <video controls playsInline className="db ma mv3 w-50 h-50" >
                <source src={CSC317DemoVideo} type="video/mp4"></source>
            </video>
        </>
    )
}

type ToolProps = {
    name: string;
    description: string;
}

const HTMLCSSProps: ToolProps = {
    name: "HTML/CSS",
    description: "HTML is the standard markup language for creating Web pages, and CSS is used to format the layout of a webpage.",
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

const ToolList: Array<ToolProps> = [
    HTMLCSSProps,
    JavaScriptProps,
    MySQLProps,
    NodeJSProps,
    ExpressJSProps,
    HandlebarsProps,
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