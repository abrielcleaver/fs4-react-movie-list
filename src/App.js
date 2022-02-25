// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { useMovieForm } from './Components/Movies/useMovieForm';
import MovieForm from './Components/Movies/MovieForm';
import MovieList from './Components/Movies/MovieList';
import MovieItem from './Components/Movies/MovieItem';

function App() {
  // tracks state for `allMovies`,  `filteredMovies  `movieFormYearReleased`, `movieFormDirector`, `movieTitle`, `movieFormColor`; 
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState('');
 
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

  function handleFilteredMovies(filter) {
    const currentFilteredMovies = allMovies.filter(movie => movie.title.includes(filter));
    setFilteredMovies ? setFilteredMovies(currentFilteredMovies) : setFilteredMovies(filteredMovies); 
  }

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);

    allMovies.splice(index, 1);
    setFilteredMovies('');
    setAllMovies([...allMovies]);
  }

  return (
    <div className="App">
      <Header />
      <div className='current-movie'>
        <MovieForm 
          titleForm={titleForm}
          setTitleForm={setTitleForm}
          directorForm={directorForm}
          setDirectorForm={setDirectorForm}       
          yearForm={yearForm}
          setYearForm={setYearForm}
          colorForm={colorForm}
          setColorForm={setColorForm} 
          addMovie={addMovie}   
        />

        <MovieItem 
          title={titleForm}
          director={directorForm}
          year={yearForm}
          color={colorForm}        
        />
        <div className='filter-movie' onChange={e => handleFilteredMovies(e.target.value)}>
          <p>Filter Movies</p>
          <input/>

          <MovieList 
            allMovies={
              filteredMovies.length 
                ? filteredMovies 
                : allMovies
            } 
            handleDeleteMovie={handleDeleteMovie}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
