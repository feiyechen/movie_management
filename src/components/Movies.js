import React from 'react';
import Movie from './Movie';


const Movies = (props) => {

  return (
    <section className='movie-list-container'>
      {/* <Movie title='Movie 1' description='Here is movie 1'/>
      <Movie title='Movie 2' description='Here is movie 2'/>
      <Movie title='Movie 3' description='Here is movie 3'/> */}
      {props.movies.map((item, index) => 
        (<Movie 
          key={item.id} 
          id={item.id}
          title={item.title} 
          description={item.description}
          onDeleteMovie={props.onDeleteMovie}
        />)
      )}
    </section>
  );

};

export default Movies;
