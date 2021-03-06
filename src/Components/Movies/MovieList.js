import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ allMovies }) {
  return <div className='movie-list'>
    <div>
      <h3> Your Movie Posters</h3>
    </div>
    {allMovies.map((movie, i) => 
      <MovieItem key={`${movie}-${i}`} {...movie} />
    )}
  </div>;
}
