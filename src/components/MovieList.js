import React from 'react'
import MovieCard from './MovieCard'

function MovieList({Film}) {
    return (
        <div className="movie-list">
            
            {Film.map ((el , key) => 
            <MovieCard key = {el.id } Aflem = {el} />  
            
            
            
            )  } 
        </div>
    )
}

export default MovieList
