import { ImageData } from '../../assets/landscape/Landscape';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { motion } from 'framer-motion';

/*
    Landscape Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

export function Landscape() {
    const initState: ImageState = {
        id: 0,
        isOpen: false,
    }
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all"); 
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
            <div className='tl f2 b ml1 mv1 pb2'>Landscape</div>
            <input 
                className='input mv2 ph4 f3 br4'
                placeholder='e.g.) japan, usa' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3'>
                <button className='mh3 mt2 pv2 ph4 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("all")}>All</button>
                <button className='mh3 mt2 pv2 ph4 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("sea")}>Sea</button>
                <button className='mh3 mt2 pv2 w-auto f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("mountain")}>Mountain</button>
            </div>
            <div className='mv3 ma w-90 flex flex-wrap items-top justify-center'>
                {ImageData.filter((img) => {
                    if (category !== "all" && category.toLowerCase() !== img.category.toLowerCase()) {
                        return
                    }
                    if (query === '') {
                        return img
                    } else if (img.keywords.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    } else if (img.category.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    }
                }).map((img) => 
                    <div className='w-250px h-250px' key={img.src} >
                        <img 
                            className='w-250px h-250px pointer' 
                            src={img.src} 
                            alt={img.category} 
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
