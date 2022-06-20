import { ImageData } from '../../assets/food/Food';
import { useState } from 'react';

/*
    Food Detail Component  
*/

export function Food() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all"); 
    return (
        <>
            <div className='tl f2 b ml1 mv1 pb2'>Food</div>
            <input 
                className='input mv2 ph4 f3 br4'
                placeholder='e.g) ramen, burger' 
                onChange={event => setQuery(event.target.value)}
            />
            <div className='mv2 f3'>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("all")}>All</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("homemade")}>Homemade</button>
                <button className='mh3 pv2 w-20 f3 bn br3 shadow-5 pointer hover-bg-white-90' onClick={() => setCategory("restaurant")}>Restaurant</button>
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
