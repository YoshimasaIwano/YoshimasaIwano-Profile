import { ImageData } from '../../assets/food/Food';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

/*
    Food Detail Component  
*/

type ImageState = {
    id: number,
    isOpen: boolean,
}

export function Food() {
    const initState: ImageState = {
        id: 0,
        isOpen: false,
    }
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all"); 
    const [state, setState] = useState(initState);

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
                    <div className='w-250px h-250px'>
                        <img 
                            className='w-250px h-250px pointer' 
                            src={img.src} 
                            alt={img.category} 
                            onClick={() => setState({
                                id: img.id,
                                isOpen: true
                                })
                            }>
                        </img>
                        {state.isOpen && (
                            <Lightbox
                                mainSrc={ImageData[state.id-1].src}
                                imageCaption={ImageData[state.id-1].description}
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
