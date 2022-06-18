import { ImageData } from '../../assets/nightsky/Nightsky';
import { useState } from 'react';

/*
    Night sky Detail Component  
*/

export function Nightsky() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all"); 
    return (
        <>
            <input 
                className='input mv2 ph4 f3 br4'
                placeholder='Enter Search Keywords' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3'>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("all")}>all</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("nikko")}>Nikko</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("fukushima")}>Fukushima</button>
            </div>
            <div className='mv3 flex flex-wrap items-top justify-start'>
                {ImageData.filter((img) => {
                    if (category !== "all" && category.toLowerCase() !== img.place.toLowerCase()) {
                        return
                    }
                    if (query === '') {
                        return img
                    } else if (img.description.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    } else if (img.place.toLowerCase().includes(query.toLowerCase())) {
                        return img
                    }
                }).map((img) => 
                    <img className='w-50' src={img.src} alt={img.description}></img>
                )}
            </div>
        </>
        
    )
}
