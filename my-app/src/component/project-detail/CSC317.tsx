import CSC317DemoVideo from '../../assets/demo-video/CSC317DemoVideo.mp4';

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
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Create a new user</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The purpose of this project is to implement a photo management website that allows users to post images, search for images and view and comment on individual image posts.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Create a new post</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The purpose of this project is to implement a photo management website that allows users to post images, search for images and view and comment on individual image posts.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Search for the created post</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The purpose of this project is to implement a photo management website that allows users to post images, search for images and view and comment on individual image posts.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Comment on the post</div>
            <div className='db ma flex-row flex-nowrap justify-items-center tc w-80'>
                <p className='tl mh2 mv2 f3'>
                    The purpose of this project is to implement a photo management website that allows users to post images, search for images and view and comment on individual image posts.
                </p>
            </div>
            <div className='db ma mh1 mv3 f3 b dark-gray w-80'>Demo Video</div>
            <video controls playsInline className="db ma mv3 w-50 h-50" >
                <source src={CSC317DemoVideo} type="video/mp4"></source>
            </video>
        </>
    )
}