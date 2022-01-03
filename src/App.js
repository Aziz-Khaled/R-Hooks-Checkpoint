
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
// get the data from the user by typing
const [search,setSearch] = useState ("")


// get the data from the user by rating
const [rating,setRating] = useState ("")



  return (
    <div className="App">
      
      <NavBar />
      <Filter setSearch={setSearch} rating ={rating} setRating={setRating} />
      <Add addHandler={addHandler} />
      <MovieList Film = {Films}
      search={search} />

      
    </div>
  );
}

export default App;
