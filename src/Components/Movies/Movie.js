import React from 'react';

export default function Movie({ titleForm, directorForm, yearForm }) {
  return <div className='movie-item'>
    <h1>{titleForm}</h1>
    <h2>Year Released: {yearForm}</h2>
    <h2>Director: {directorForm}</h2>
  </div>;
}
