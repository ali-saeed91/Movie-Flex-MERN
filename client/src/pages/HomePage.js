import React, { useState } from "react";
import AddMovie from "../components/AddMovie";
import MoviesList from "../components/MoviesList";

const HomePage = () => {
  const [newMovieAdded, setNewMovieAdded] = useState(false);
  return (
    <div>
      <AddMovie onAddNewMovie={() =>{
        setNewMovieAdded((prevValue) => !prevValue);}}/>
      <MoviesList newMovieAdded={newMovieAdded}/>
    </div>
  );
};

export default HomePage;
