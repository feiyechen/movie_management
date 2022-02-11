import React from 'react';
import Movie from './Movie';
import { useState, useEffect } from 'react';

const Movies = () => {

  const [movies, setMovies] = useState([]);

  //useEffect will fire off when the component finish loading
  useEffect(()=>{
    const fakeDB = [
      {title: "WandaVision", description: "This is showing on Disney"},
      {title: "Avengers", description: "This is showing on Netflix"},
      {title: "End Game", description: "This is showing on HBO"},
      {title: "Spider man", description: "This is showing on Prime video"},
      {title: "Iron man", description: "This is showing on Youtube"}
    ]

    setMovies(fakeDB);
  }, []); //the [] means calling the function once

  return (
    <section className='movie-list-container'>
      {/* <Movie title='Movie 1' description='Here is movie 1'/>
      <Movie title='Movie 2' description='Here is movie 2'/>
      <Movie title='Movie 3' description='Here is movie 3'/> */}
      {movies.map((item) => 
        (<Movie title={item.title} description={item.description}/>)
      )}
    </section>
  );
};

export default Movies;
