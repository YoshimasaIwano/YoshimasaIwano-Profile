import React from 'react';

export function Profile() {
    return (
        <div id="profile-container" className='pv7 tc f1'>
            <div className='mb7'>
                <div className='washed-blue'>
                    Hello
                </div>
                <div className='dark-blue'>
                    I'm Yoshimasa Iwano 
                    <img id="yoshi-img" className='ml1' src='./yoshi30.png' alt='yoshi'></img>
                </div>
                <ul id="sns" className='flex justify-center items-center list mv2 overflow-hidden'>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://github.com/YoshimasaIwano"></a></li>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://www.linkedin.com/in/yoshi-fukuoka/"></a></li>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://www.facebook.com/profile.php?id=100028308006480"></a></li>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://www.instagram.com/yoshimasa_iwano/"></a></li>
                </ul>
            </div>
            <div>
                <h5 className='tl ml1 mv1'>Yoshimasa Iwano</h5>
                <p className='tl ml3 mv4 f3'>
                    I was born in Japan and brought up in Fukuoka until high school. I had a lot of difficulities in my life.<br/>
                    Fortunately, I got a scholarship and completed my Bachelor's degree of Engineering from University of Tsukuba in 2021.<br/>
                    I'm currently pursuing a Master's degree in Computer Science from San Francisco State University.</p>
                <p className='tl ml3 mv4 f3'>
                    I am interested in Computer Vision and Software Development.<br/>
                    In my undergraduate, I was in Visual Media Laboratory at University of Tsukuba in Japan. I was doing researh on medical imaging. Here's a 
                    <a className='no-underline b dark-green hover-light-yellow' href='https://github.com/YoshimasaIwano/graduation-reaserach-on-lymph-tumor/blob/main/graduate_research_final.pdf'> paper.</a><br/>
                    I also have some experience of Software Development at SFSU. The detail is in Project section.<br/>
                    I am familiar with technologies such as Pytorch, Tensorflow, Numpy, Pandas, Scikit-Learn, React, and Node.js
                </p>
                <p className='tl ml3 mv4 f3'>
                    As a fast learner and a motivated person, I can adapt to any changes without problems.<br/>
                    I went through and overcame some difficult situations with a resolute and invincible sprit, so I am well-prepared to tackle challenges and maximize my ability.
                </p>
            </div>
        </div>
    )
}