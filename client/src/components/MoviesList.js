import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import MoviesTable from "./MoviesTable";

const MoviesList = ({newMovieAdded}) => {
  
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async()=>{
      const response = await fetch("http://localhost:8081/api/v1/movieData/")
      const responseData = await response.json();
      setMoviesData(responseData);
    }
    fetchMoviesData()
  },[newMovieAdded]);

  return (
    <div className="container mt-5">
     <h1>Favorite Movie List</h1>
      <p>List of favorite movies chosen by the users </p>
      <div className="mt-3 row justify-content-between">
        <div className="col-3">
          <Form.Control type="text" placeholder="Search" />
        </div>
        <div className="col-2">
          <Form.Select >
            <option>Sort by</option>
            <option>movieName</option>
            <option>movieRating</option>
            <option>userName</option>
          </Form.Select>
        </div>
      </div>
      <div className="mt-5">
        <MoviesTable data={moviesData}/>
      </div>
    </div>
  );
};

export default MoviesList;
