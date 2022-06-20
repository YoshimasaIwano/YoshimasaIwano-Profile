import { ImageData } from '../../assets/nightsky/Nightsky';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

/*
    Night sky Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

export function Nightsky() {
    const initState: ImageState = {
        id: 0,
        isOpen: false,
    }
    const [query, setQuery] = useState("");
    const [place, setPlace] = useState("all"); 
    const [state, setState] = useState(initState);

    return (
        <>
            <div className='tl f2 b ml1 mv1 pb2'>Night sky</div>
            <input 
                className='input mv2 ph4 f3 br4'
                placeholder='e.g) summer, 2021, etc' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3'>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setPlace("all")}>all</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setPlace("nikko")}>Nikko</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setPlace("fukushima")}>Fukushima</button>
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
                    <div className='w-250px h-250px'>
                        <img 
                            className='w-250px h-250px pointer' 
                            src={img.src} 
                            alt={img.place} 
                            onClick={() => setState({
                                id: img.id,
                                isOpen: true
                                })
                            }>
                        </img>
                        {state.isOpen && (
                            <Lightbox
                                mainSrc={ImageData[state.id-1].src}
                                onCloseRequest={() => setState({
                                    id: state.id,
                                    isOpen:false
                                })}
                            />
                        )}
                    </div>
                )}
            </div>
        </>
        
    )
}
