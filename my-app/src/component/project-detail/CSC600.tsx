import Metallophone from '../../assets/CSC600-img/metallophone.png';
import searchSong from '../../assets/CSC600-img/searchSong.png';
import CSC600emoVideo from '../../assets/CSC600-img/CSC600 Demo.mp4';
import { useRef } from 'react';

/*
    CSC600 Detail Component  
*/

export function CSC600() {
    const purposeRef = useRef<null | HTMLDivElement>(null);
    const toolsRef = useRef<null | HTMLDivElement>(null);
    const instrumentRef = useRef<null | HTMLDivElement>(null);
    const visualizerRef = useRef<null | HTMLDivElement>(null);
    const playlistRef = useRef<null | HTMLDivElement>(null);
    const demoVideoRef = useRef<null | HTMLDivElement>(null);
    const scrollToPurpose = () => purposeRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToTools = () => toolsRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToInstrument = () => instrumentRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToVisualizer = () => visualizerRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToPlaylist = () => playlistRef.current?.scrollIntoView({
        behavior: 'smooth',
    });
    const scrollToDemoVideo = () => demoVideoRef.current?.scrollIntoView({
        behavior: 'smooth',
    });

    return (
        <>
            <div className='tl f2 b ml1 mv1'>CSC600</div>
            <div className='db ma br4 flex-row flex-nowrap justify-items-center tc bg-white-50 w-50'>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f3 w-80 pointer' onClick={scrollToPurpose}>・Purpose</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f3 w-80 pointer' onClick={scrollToTools}>・Tools</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f3 w-80 pointer' onClick={scrollToInstrument}>・Instrument</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f3 w-80 pointer' onClick={scrollToVisualizer}>・Visualizer</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f3 w-80 pointer' onClick={scrollToPlaylist}>・Playlist Database</button>
                <button className='mh2 mv1 br3 bn tl bg-white-50 f3 w-80 pointer' onClick={scrollToDemoVideo}>・Demo Video</button>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={purposeRef}>Purpose</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The purpose of this project is to create a music instrument and visualizer, then work on plylist database as a team.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={toolsRef}>Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {ToolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={instrumentRef}>Instrument</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    I created a metallophone, which produces different sounds according to keys. 
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={visualizerRef}>Visualizer</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    I created a visualizer, which shows 2D waveform. X axis expresses the length of sounds, while gray scale indicates pitch of sound. In other words, high pitch sound is white and low pitch sound is black.    
                </p>
            </div>
            <img src={Metallophone} className="db ma mv3 w-50 h-50"></img>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={playlistRef}>Playlist DataBase</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    I worked on creating playlist database, which has a song name and artist name. I added the searching function that uses both song names and artist names.
                </p>
                <img src={searchSong} className="db ma mv3 w-50 h-50"></img>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80' ref={demoVideoRef}>Demo Video</div>
            <video controls playsInline className="db ma mv3 w-50 h-50" >
                <source src={CSC600emoVideo} type="video/mp4"></source>
            </video>
        </>
        
    )
}

type ToolProps = {
    name: string;
    description: string;
}

const typeScriptProps: ToolProps = {
    name: "TypeScript",
    description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
}

const ReactProps: ToolProps = {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
}

const ToneJSProps: ToolProps = {
    name: "ToneJS",
    description: "ToneJS is a Web Audio framework for creating interactive music in the browser.",
}

const SQLiteProps: ToolProps = {
    name: "SQLite",
    description: "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.",
}

const ToolList: Array<ToolProps> = [
    typeScriptProps,
    ReactProps,
    ToneJSProps,
    SQLiteProps,
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