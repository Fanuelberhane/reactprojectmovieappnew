import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <p className="text-center">
        
      </p>
    );
  }

  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;