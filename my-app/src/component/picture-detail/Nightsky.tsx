/* import libraries */
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { motion } from 'framer-motion';

/* import images */
import { ImageData } from '../../assets/nightsky/Nightsky';

/*
    Night sky Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

/*
    This function creates Nightsky detail page with a motion animation
*/
export function Nightsky() {
    const initState: ImageState = {
        id: 0,
        isOpen: false,
    }
    const [query, setQuery] = useState("");
    const [place, setPlace] = useState("all"); 
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
            <div className='tl f2 f4-ns b ml1 mv1 pb2'>Night sky</div>
            <input 
                className='input mv2 ph4 f3 f5-ns br4'
                placeholder='e.g.) summer, 2021, etc' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3 f5-ns'>
                <button className='mh3 mt2 pv2 ph4 w-auto f3 f5-ns bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setPlace("all")}>All</button>
                <button className='mh3 mt2 pv2 ph3 w-auto f3 f5-ns bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setPlace("nikko")}>Nikko</button>
                <button className='mh3 mt2 pv2 w-auto f3 f5-ns bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setPlace("fukushima")}>Fukushima</button>
            </div>
            <div className='mv3 ma w-90 flex flex-wrap items-top justify-center'>
                {ImageData.filter((img) => {
                    if (place !== "all" && place.toLowerCase() !== img.place.toLowerCase()) {
                        return
                    }
                    if (query === '') {
                        return img
                    } else if (img.keywords.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    } else if (img.place.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    }
                }).map((img) => 
                    <div className='w-150px h-150px' key={img.src} >
                        <img 
                            className='w-150px h-150px pointer' 
                            src={img.src} 
                            alt={img.place} 
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
