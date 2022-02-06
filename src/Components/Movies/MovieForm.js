import React from 'react';


export default function MovieForm({ 
  titleForm, 
  setTitleForm, 
  directorForm, 
  setDirectorForm, 
  yearForm, 
  setYearForm, 
  colorForm, 
  setColorForm, 
  addMovie }) {
  
  // On submit, a new movie is added to the view
  function handleSubmit(e) {
    e.preventDefault();
    
    const newMovie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm
    };

    addMovie(newMovie);

    // clear out forms
    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('');
  }
  
  
  return <section>
    <form onSubmit={handleSubmit}>
      <h3>What&apos;s your favorite movie?</h3>
      {/* On changing the movie form, the current movie item updates */}
      <div>
        <label>
        Title
          <input onChange={e => setTitleForm(e.target.value)} required value={titleForm}></input>
        </label>
      </div>
      <div>
        <label>
        Director
          <input onChange={e => setDirectorForm(e.target.value)} required value={directorForm}></input>
        </label>
      </div>
      <div>
        <label>
        Year Released
          <input onChange={e => setYearForm(e.target.value)} required value={yearForm}></input>
        </label>
      </div>
      <div>
        <label>
        Pick Poster Color
          <select onChange={e => setColorForm(e.target.value)} required value={colorForm}>
            <option value='pink'>Pink</option>
            <option value='blue'>Blue</option>
            <option value='red'>Red</option>
            <option value='#228b22'>Green</option>
          </select>
        </label>
      </div>
      <button>Submit Movie</button>
    </form>
  </section>;
}
