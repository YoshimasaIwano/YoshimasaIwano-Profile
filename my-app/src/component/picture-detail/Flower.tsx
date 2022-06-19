import { ImageData } from '../../assets/flower/Flower';
import { useState } from 'react';

/*
    Flower Detail Component  
*/

export function Flower() {
    const [query, setQuery] = useState("");
    const [color, setColor] = useState("all"); 
    return (
        <>
            <div className='tl f2 b ml1 mv1 pb2'>Flower</div>
            <input 
                className='input mv2 ph4 f3 br4'
                placeholder='e.g) nemophila, sakura, plum' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3'>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("all")}>all</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("yellow")}>Yellow</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("blue")}>Blue</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("white")}>White</button>
                <button className='mh3 mt2 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setColor("other")}>Other</button>
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
                    <img className='w-250px h-250px' src={img.src} alt={img.color}></img>
                )}
            </div>
        </>
        
    )
}
