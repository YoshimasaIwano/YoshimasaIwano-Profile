import { ImageData } from '../../assets/landscape/Landscape';
import { useState } from 'react';

/*
    Landscape Detail Component  
*/

export function Landscape() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all"); 
    return (
        <>
            <input 
                className='input mv2 ph4 f3 br4'
                placeholder='e.g) japan, usa' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3'>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("all")}>all</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("sea")}>Sea</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("mountain")}>Mountain</button>
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
                    <img className='w-250px h-250px' src={img.src} alt={img.category}></img>
                )}
            </div>
        </>
        
    )
}
