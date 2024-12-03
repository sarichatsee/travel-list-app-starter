import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' for ascending, 'desc' for descending

  const handleAddMovie = (title) => {
    const newMovie = {
      id: Date.now(),
      title,
      watched: false,
    };
    setMovies([...movies, newMovie]);
  };

  const handleToggleWatched = (id) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(updatedMovies);
  };

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const handleSortMovies = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title); // Ascending order
      } else {
        return b.title.localeCompare(a.title); // Descending order
      }
    });
    setMovies(sortedMovies);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <div>
        <button onClick={handleSortMovies}>
          {sortOrder === "asc" ? (
            <i className="fa-solid fa-arrow-down-z-a"></i>
          ) : (
            <i className="fa-solid fa-arrow-up-z-a"></i>
          )}
          Sort by Title
        </button>
      </div>
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
