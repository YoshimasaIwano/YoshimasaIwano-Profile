/*
    CSC600 Detail Component  
*/

export function CSC600() {
    return (
        <>
            <div className='tl f2 b ml1 mv1'>CSC600</div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Purpose</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The purpose of this project is to create a music instrument and visualizer, then work on plylist database as a team.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Tools</div>
            <div className='dt ma flex-row tc w-80'>
                {ToolList.map((tool) => {
                    return <ToolContent name={tool.name} description={tool.description} />
                })}
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Instrument</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    I created a metallophone, which produces different sounds according to keys. 
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Visualizer</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    I created a visualizer, which shows 2D waveform. X axis expresses the length of sounds, while gray scale indicates pitch of sound. In other words, high pitch sound is white and low pitch sound is black.    
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Playlist DataBase</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    I worked on creating playlist database, which has a song name and artist name. I added the searching function that uses both song names and artist names.
                </p>
            </div>
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