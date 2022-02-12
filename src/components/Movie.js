import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const Movie = (props) => {

  const clickHandler = () => props.onDeleteMovie(props.id);

  return (
    <div className='movie-container'>

      <div className='grid grid-col-2 movie-top-area'>
        <p className=''>{props.title}</p>
        <FaWindowClose 
          className='icon-cursor icon-size-dbl-xlg grid-x-right'
          onClick={clickHandler}
        />
      </div>

      <p className='movie-description'>{props.description}</p>
    
    </div>
  );

};

export default Movie;
