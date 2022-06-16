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