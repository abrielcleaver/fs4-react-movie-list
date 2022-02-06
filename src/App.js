// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useMovieForm } from './Components/Movies/useMovieForm';
import MovieForm from './Components/Movies/MovieForm';
import MovieList from './Components/Movies/MovieList';
import Movie from './Components/Movies/Movie';

function App() {
  // tracks state for `allMovies`,  `filteredMovies  `movieFormYearReleased`, `movieFormDirector`, `movieTitle`, `movieFormColor`; 
  const [allMovies, setAllMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState('');
 
  const {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm, 
  } = useMovieForm('');

  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];

    setAllMovies(updatedMovies);
  }
  return (
    <div className="App">
      <div>
        <MovieForm 
          titleForm={titleForm}
          setTitleForm={setTitleForm}
          directorForm={directorForm}
          setDirectorForm={setDirectorForm}       
          yearForm={yearForm}
          setYearForm={setYearForm}
          colorForm={colorForm}
          setColorForm={setColorForm}    
        />

  
        <Movie 
          title={titleForm}
          director={directorForm}
          year={yearForm}
          color={colorForm}        
        />
        <p>Filter Movies</p>
        <input/>

        <MovieList allMovies={allMovies}/>

      </div>
    </div>
  );
}

export default App;
