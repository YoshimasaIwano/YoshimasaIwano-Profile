import { ImageData } from '../../assets/nightsky/Nightsky';
import { useState } from 'react';

/*
    Night sky Detail Component  
*/

export function Nightsky() {
    const [query, setQuery] = useState("");
    const [place, setPlace] = useState("all"); 
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
                    <img className='w-250px h-250px' src={img.src} alt={img.place}></img>
                )}
            </div>
        </>
        
    )
}
