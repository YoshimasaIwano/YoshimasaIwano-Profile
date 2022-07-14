/* import libraries */
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { motion } from 'framer-motion';

/* import images */
import { ImageData } from '../../assets/flower/Flower';

/*
    Flower Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

/*
    This function creates Flower detail page with a motion animation
*/
export function Flower() {
    const initState: ImageState = {
        id: 0,
        isOpen: false,
    }
    const [query, setQuery] = useState("");
    const [color, setColor] = useState("all"); 
    const [state, setState] = useState(initState);

    return (
        <motion.div
            initial={{
                opacity: 0.5,
                scale: 0.8,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <div className='tl f2 b ml1 mv1 pb2'>Flower</div>
            <input 
                className='input mv2 ph4 f3 br4'
                placeholder='e.g.) nemophila, sakura, plum' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3'>
                <button className='mh3 mt2 pv2 ph4 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("all")}>All</button>
                <button className='mh3 mt2 pv2 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("yellow")}>Yellow</button>
                <button className='mh3 mt2 pv2 ph3 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("blue")}>Blue</button>
                <button className='mh3 mt2 pv2 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("white")}>White</button>
                <button className='mh3 mt2 pv2 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("other")}>Other</button>
            </div>
            <div className='mv3 ma w-90 flex flex-wrap items-top justify-center'>
                {ImageData.filter((img) => {
                    if (color !== "all" && color.toLowerCase() !== img.color.toLowerCase()) {
                        return
                    }
                    if (query === '') {
                        return img
                    } else if (img.keywords.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    } else if (img.color.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    }
                }).map((img) => 
                    <div className='w-250px h-250px' key={img.src}>
                        <img 
                            className='w-250px h-250px pointer' 
                            src={img.src} 
                            alt={img.color} 
                            onClick={() => setState({
                                id: img.id,
                                isOpen: true
                                })
                            }
                        >
                        </img>
                        {state.isOpen && (
                            <Lightbox
                                mainSrc={ImageData[state.id-1].src}
                                imageCaption={ImageData[state.id-1].description}
                                onCloseRequest={() => setState({
                                    id: state.id,
                                    isOpen: false
                                })}
                            />
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    )
}
