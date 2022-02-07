import React from 'react';

export default function MovieItem({ color, title, director, year }) {
  return <div className='movie-item' style={{ background: color }}>
    <h3>{title}</h3>
    <p>{year}</p>
    <p>{director}</p>
  </div>;
}
