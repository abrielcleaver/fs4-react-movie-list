import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies }) {
  return <div>
    <h2> Welcome to MoviesList</h2>
    {allMovies.map((movie, i) => 
      <Movie key={`${movie.title}-${i}`} {...movie} />
    )}
  </div>;
}
