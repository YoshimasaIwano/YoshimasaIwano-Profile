/* import libraries */
import Particles from 'react-tsparticles';
import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

/* import image */
import yoshi from '../../assets/yoshi30.png';

/*
    Profile Component  
*/

const aboutMeVariant: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.6,
      duration: 2.0
    }
  },
  hidden: {
    opacity: 0,
    scale: 1,
    y: 200
  }
};

const helloVariant: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.0,
      delay: 0.7
    }
  },
  hidden: {
    opacity: 0,
    scale: 0.5
  }
};

/*
    This function creates an element with a scroll animation
*/
function AboutMe(): JSX.Element {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={aboutMeVariant}
      initial="hidden"
      animate={control}
    >
      <div className="tl f3 f5-ns">
        <h3 className="ml1 mv1">Yoshimasa Iwano (岩野 善允)</h3>
        <p className="mh3 mh1-ns mv4 mv2-ns">
          I was born in Japan and brought up in Fukuoka until high school. I had
          a lot of difficulities in my life.
          <br />
          Fortunately, I got a scholarship and completed my Bachelor's degree of
          Engineering from University of Tsukuba in 2021.
          <br />
          I'm currently pursuing a Master's degree in Computer Science from San
          Francisco State University.
        </p>
        <p className="mh3 mh1-ns mv4 mv2-ns">
          I am interested in Computer Vision and Software Development.
          <br />
          In my undergraduate, I was in Visual Media Laboratory at University of
          Tsukuba in Japan. I was doing researh on medical imaging. Here's a
          <a
            className="no-underline b white-70 hover-light-yellow"
            href="../graduate_research_final.pdf"
          >
            {' '}
            paper.
          </a>
          <br />
          I also have some experience of Software Development at SFSU. The
          detail is in Project section.
          <br />I am familiar with technologies such as Pytorch, Tensorflow,
          Numpy, Pandas, Scikit-Learn, React, and Node.js
        </p>
        <p className="mh3 mh1-ns mv4 mv2-ns">
          As a fast learner and a motivated person, I can adapt to any changes
          without problems.
          <br />I went through and overcame some difficult situations with a
          resolute and invincible sprit, so I am well-prepared to tackle
          challenges and maximize my ability.
        </p>
      </div>
    </motion.div>
  );
}

/*
    This function creates an element with a scroll animation
*/
function Hello(): JSX.Element {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={helloVariant}
      initial="hidden"
      animate={control}
    >
      <div className="washed-blue">Hello</div>
      <div className="dark-blue">
        I'm Yoshimasa Iwano
        <img id="yoshi-img" className="ml1" src={yoshi} alt="yoshi"></img>
        <br />
        Yoshindar
      </div>
    </motion.div>
  );
}

/*
    This is parameters of tsParticles (moving background)
*/
const params: RecursivePartial<IOptions> = {
  fpsLimit: 120,
  particles: {
    bounce: {
      vertical: {
        value: {
          min: 0.25,
          max: 0.95
        }
      },
      horizontal: {
        value: {
          min: 0.65,
          max: 0.95
        }
      }
    },
    color: {
      value: [
        '#3998D0',
        '#2EB6AF',
        '#A9BD33',
        '#FEC73B',
        '#F89930',
        '#F45623',
        '#D62E32',
        '#EB586E',
        '#9952CF'
      ]
    },
    number: {
      value: 0
    },
    destroy: {
      mode: 'split',
      split: {
        count: 1,
        factor: {
          value: {
            min: 1.1,
            max: 2
          }
        },
        rate: {
          value: {
            min: 1,
            max: 2
          }
        }
      }
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: {
        min: 30,
        max: 50
      }
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        maxSpeed: 20
      },
      speed: {
        min: 5,
        max: 20
      },
      direction: 'none',
      random: true,
      straight: false,
      outModes: {
        bottom: 'split',
        default: 'split',
        top: 'split'
      }
    }
  },
  detectRetina: true,
  emitters: {
    direction: 'top',
    life: {
      count: 0,
      duration: 0.2
      // delay: 1.1,
    },
    rate: {
      delay: 1.2,
      quantity: 10
    },
    size: {
      width: 0,
      height: 0
    },
    speed: {
      min: 10,
      max: 20
    }
  }
};

/*
    delay for tsParticles
*/
function delay(sec: number) {
  return new Promise((f) => setTimeout(f, sec));
}

/*
    initialize function for tsParticles
*/
async function customInit(engine: Engine): Promise<void> {
  await delay(1500);
  return loadFull(engine);
}

/*
    This function creates the main content of Profile with a motion animation
*/
export function Profile() {
  /*
         --------------------------------------
        |                                      |
        |               Top Nav                |
        |                                      |
         --------------------------------------
        |                                      |
        |                                      |
        |         *   Main Contents  *         |
        |                                      |
        |                                      |
         --------------------------------------
        |                                      |
        |                Footer                |
        |                                      |
         --------------------------------------
    */
  return (
    <motion.div
      id="profile-container"
      className="pv7 pv6-ns tc f1 f3-ns"
      initial={{
        opacity: 0.5,
        x: 200
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 1.0
      }}
    >
      <Hello />
      <Particles params={params} init={customInit} />
      <div className="mb7">
        <ul
          id="sns"
          className="ph0 flex justify-center items-center list mv2 overflow-hidden"
        >
          <li className="mh1 dib br3">
            <a
              className="dib w-100 h-100 tc f3 f5-ns h3 white"
              href="https://github.com/YoshimasaIwano"
            ></a>
          </li>
          <li className="mh1 dib br3">
            <a
              className="dib w-100 h-100 tc f3 f5-ns h3 white"
              href="https://www.linkedin.com/in/yoshi-fukuoka/"
            ></a>
          </li>
          <li className="mh1 dib br3">
            <a
              className="dib w-100 h-100 tc f3 f5-ns h3 white"
              href="https://www.facebook.com/profile.php?id=100028308006480"
            ></a>
          </li>
          <li className="mh1 dib br3">
            <a
              className="dib w-100 h-100 tc f3 f5-ns h3 white"
              href="https://www.instagram.com/yoshimasa_iwano/"
            ></a>
          </li>
          <li className="mh1 dib br3">
            <a
              className="dib w-100 h-100 tc f3 f5-ns h3 white"
              href="https://note.com/yoshimasa_iwano/"
            ></a>
          </li>
        </ul>
      </div>
      <AboutMe />
    </motion.div>
  );
}
