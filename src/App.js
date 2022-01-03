
import './App.css';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Add from './components/Add';
import {Movies} from './components/Movies';
import MovieList from './components/MovieList';
import {useState} from 'react' ;


function App() {
  const [ Films , setFilms] = useState (Movies) ;
  const addHandler = (newFilm) => {
  setFilms (
    [...Films , newFilm]
  )

  }


  return (
    <div className="App">
      
      <NavBar />
      <Filter />
      <Add addHandler={addHandler} />
      <MovieList Film = {Films} />

      
    </div>
  );
}

export default App;
