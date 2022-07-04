import yoshi from '../../assets/yoshi30.png';

import Particles from 'react-tsparticles';
import { loadFountainPreset } from 'tsparticles-preset-fountain';
import { Bounce, Engine, IOptions, RecursivePartial, Split } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

/*
    Profile Component  
*/

export function Profile() {
    const params: RecursivePartial<IOptions> = {
        fpsLimit: 120,
        particles: {
            bounce: {
                vertical: {
                    value: {
                        min: 0.85,
                        max: 0.95,
                    },
                },
                horizontal: {
                    value: {
                        min: 0.75,
                        max: 0.95,
                    }
                }
            },
            color: {
                value: ["#3998D0", "#2EB6AF", "#A9BD33", "#FEC73B", "#F89930", "#F45623", "#D62E32", "#EB586E", "#9952CF"],
            },
            number: {
                value: 0,
            },
            destroy: {
                mode: "split",
                split: {
                    count: 1,
                    factor: {
                        value: {
                            min: 1.1,
                            max: 2,
                        },
                    },
                    rate: {
                        value: {
                            min: 1,
                            max: 4,
                        },
                    },
                },
            },
            opacity: {
                value: 0.3,
            },
            size: {
                value: {
                    min: 30,
                    max: 50,
                },
            },
            move: {
                enable: true,
                gravity: {
                    enable: true,
                    maxSpeed: 100,
                },
                speed: {
                    min: 20,
                    max: 50,
                },
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    bottom: "split",
                    default: "bounce",
                    top: "bounce",
                },
            },
        },
        detectRetina: true,
        emitters: {
            direction: "top",
            life: {
                count: 0,
                duration: 2,
                delay: 0.2,
            },
            rate: {
                delay: 0.1,
                quantity: 5,
            },
            size: {
                width: 0,
                height: 0,
            },
        },
    }

    function customInit(engine: Engine ): Promise<void> {
        return loadFull(engine);
    }

    return (
        <div id="profile-container" className='pv7 tc f1'>
            <Particles params={params} init={customInit}/>
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
                    <a className='no-underline b white-70 hover-light-yellow' href='../graduate_research_final.pdf'> paper.</a><br/>
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

// params={{
//     detectRetina: true,
//     interactivity: {
//       detectsOn: "canvas",
//       modes: { repulse: { distance: 300 } },
//       events: {
//         onHover: {
//           enable: true,
//           mode: "grab",
//         },
//         onclick: { enable: true, mode: "repulse" },
//       },
//     },
//     responsive: [
//       {
//         maxWidth: 400,
//         options: { particles: { number: { value: 10 } } },
//       },
//       {
//         maxWidth: 600,
//         options: { particles: { number: { value: 15 } } },
//       },
//       {
//         maxWidth: 1000,
//         options: { particles: { number: { value: 30 } } },
//       },
//       {
//         maxWidth: 1200,
//         options: {
//           particles: { number: { value: 45 } },
//         },
//       },
//       {
//         maxWidth: 5000,
//         options: {
//           particles: { number: { value: 60 } },
//         },
//       },
//     ],
//     particles: {
//       color: { value: currentColor },
//       lineLinked: { color: currentColor },
//       life: {
//         duration: {
//           value: 200,
//           random: { enable: true, minimumValue: 100 },
//         },
//       },
//     },
//   }}