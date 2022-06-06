import React from 'react';

export function Profile() {
    return (
        <div id="profile-container" className='pv7 tc f1'>
            <div className='washed-blue'>
                Hello
            </div>
            <div className='dark-blue'>
                I'm Yoshimasa Iwano 
                <img id="yoshi-img" className='ml1' src='./yoshi30.png' alt='yoshi'></img>
            </div>
            <ul id="sns" className='flex justify-center items-center list mv2 overflow-hidden'>
                <li className='mh1 dib'><a className='dib tc f3 h3 white' href="https://github.com/YoshimasaIwano"></a></li>
                <li className='mh1 dib'><a className='dib tc f3 h3 white' href="https://www.linkedin.com/in/yoshi-fukuoka/"></a></li>
                <li className='mh1 dib'><a className='dib tc f3 h3 white' href="https://www.facebook.com/profile.php?id=100028308006480"></a></li>
            </ul>
        </div>
    )
}