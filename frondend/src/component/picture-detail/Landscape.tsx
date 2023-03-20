/* import libraries */
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { motion } from 'framer-motion';

/* import images */
import { ImageData } from '../../assets/landscape/Landscape';

/*
    Landscape Detail Component  
*/

type ImageState = {
  id: number;
  isOpen: boolean;
};

/*
    This function creates Landscape detail page with a motion animation
*/
export function Landscape() {
  const initState: ImageState = {
    id: 0,
    isOpen: false
  };
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [state, setState] = useState(initState);

  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.8
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.5
      }}
    >
      <div className="tl f2 f4-ns b ml1 mv1 pb2">Landscape</div>
      <input
        className="input mv2 ph4 f3 f5-ns br4"
        placeholder="e.g.) japan, usa"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="mv2 f3 f5-ns">
        <button
          className="mh3 mt2 pv2 ph4 w-auto f3 f5-ns bn br3 shadow-5 pointer hover-bg-white-90"
          onClick={() => setCategory('all')}
        >
          All
        </button>
        <button
          className="mh3 mt2 pv2 ph4 w-auto f3 f5-ns bn br3 shadow-5 pointer hover-bg-white-90"
          onClick={() => setCategory('sea')}
        >
          Sea
        </button>
        <button
          className="mh3 mt2 pv2 w-auto f3 f5-ns bn br3 shadow-5 pointer hover-bg-white-90"
          onClick={() => setCategory('mountain')}
        >
          Mountain
        </button>
      </div>
      <div className="mv3 ma mb5-l w-90 flex flex-wrap items-top justify-center">
        {ImageData.filter((img) => {
          if (
            category !== 'all' &&
            category.toLowerCase() !== img.category.toLowerCase()
          ) {
            return;
          }
          if (query === '') {
            return img;
          } else if (img.keywords.toLowerCase().includes(query.toLowerCase())) {
            return img;
          } else if (img.category.toLowerCase().includes(query.toLowerCase())) {
            return img;
          }
        }).map((img) => (
          <div
            className="w-250px h-250px w-150px-ns h-150px-ns bg-white"
            key={img.thumbnail}
          >
            <img
              className="w-250px h-250px w-150px-ns h-150px-ns pointer dim shadow-5"
              src={img.thumbnail}
              alt={img.category}
              onClick={() =>
                setState({
                  id: img.id,
                  isOpen: true
                })
              }
            ></img>
            {state.isOpen && (
              <Lightbox
                mainSrc={ImageData[state.id - 1].src}
                imageCaption={ImageData[state.id - 1].description}
                onCloseRequest={() =>
                  setState({
                    id: state.id,
                    isOpen: false
                  })
                }
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
