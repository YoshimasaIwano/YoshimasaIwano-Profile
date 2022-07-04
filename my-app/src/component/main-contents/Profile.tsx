import yoshi from '../../assets/yoshi30.png';
import type { Engine } from 'tsparticles-engine';
import { loadFountainPreset } from 'tsparticles-preset-fountain';
import Particles from 'react-tsparticles';

/*
    Profile Component  
*/

export function Profile() {
    const options = {
        preset: "fountain",
        background: {
            color: {
                value: "",
            }
        },
        fullScreen: {
            enable: false,
        }
    }

    function customInit(instance: Engine): Promise<void> {
        return loadFountainPreset(instance);
    }

    // options={options} init={customInit}
    return (
        <div id="profile-container" className='pv7 tc f1'>
            <Particles
                params={{
                    fpsLimit: 60,
                    particles: {
                      color: {
                        value: "#000"
                      },
                      links: {
                        enable: true,
                        color: "#000",
                        distance: 150
                      },
                      move: {
                        enable: true
                      }
                    }
                }}
            />
            <div className='mb7'>
                <div className='washed-blue'>
                    Hello
                </div>
                <div className='dark-blue'>
                    I'm Yoshimasa Iwano 
                    <img id="yoshi-img" className='ml1' src={yoshi} alt='yoshi'></img><br />
                    Yoshindar
                </div>
                <ul id="sns" className='ph0 flex justify-center items-center list mv2 overflow-hidden'>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://github.com/YoshimasaIwano"></a></li>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://www.linkedin.com/in/yoshi-fukuoka/"></a></li>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://www.facebook.com/profile.php?id=100028308006480"></a></li>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://www.instagram.com/yoshimasa_iwano/"></a></li>
                    <li className='mh1 dib br3'><a className='dib tc f3 h3 white' href="https://note.com/yoshimasa_iwano/"></a></li>
                </ul>
            </div>
            <div className='tl f3'>
                <h3 className='ml1 mv1'>Yoshimasa Iwano</h3>
                <p className='ml3 mv4'>
                    I was born in Japan and brought up in Fukuoka until high school. I had a lot of difficulities in my life.<br/>
                    Fortunately, I got a scholarship and completed my Bachelor's degree of Engineering from University of Tsukuba in 2021.<br/>
                    I'm currently pursuing a Master's degree in Computer Science from San Francisco State University.</p>
                <p className='ml3 mv4'>
                    I am interested in Computer Vision and Software Development.<br/>
                    In my undergraduate, I was in Visual Media Laboratory at University of Tsukuba in Japan. I was doing researh on medical imaging. Here's a 
                    <a className='no-underline b dark-green hover-light-yellow' href='../graduate_research_final.pdf'> paper.</a><br/>
                    I also have some experience of Software Development at SFSU. The detail is in Project section.<br/>
                    I am familiar with technologies such as Pytorch, Tensorflow, Numpy, Pandas, Scikit-Learn, React, and Node.js
                </p>
                <p className='ml3 mv4'>
                    As a fast learner and a motivated person, I can adapt to any changes without problems.<br/>
                    I went through and overcame some difficult situations with a resolute and invincible sprit, so I am well-prepared to tackle challenges and maximize my ability.
                </p>
            </div>
        </div>
    )
}
