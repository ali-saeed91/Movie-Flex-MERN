import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddMovie.css";

const AddMovie = ({onAddNewMovie}) => {
  const userNameRef = useRef();
  const movieNameRef = useRef();
  const movieRatingRef = useRef();

  const [message, setMessage] = useState("");

  const addMovieHandler = async (e) => {
    e.preventDefault();
    const data = {
      movieName: movieNameRef.current.value.toLowerCase(),
      movieRating: movieRatingRef.current.value,
      userName: userNameRef.current.value.toLowerCase(),
    };
    // console.log(data);
 
    const response = await fetch("http://localhost:8081/api/v1/movieData/", {
        method: "POST",
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(data),
  });

    const responseData = await response.json();
    setMessage(responseData.message);
    movieNameRef.current.value = ""
    movieRatingRef.current.value = ""
    userNameRef.current.value = ""
    setTimeout(() =>{
      setMessage("")
    }, 2000);
    onAddNewMovie();
  };

  return (
    <div className="container mt-5">
      <h1>Rate Your Favourite Movie</h1>
      <p>Fill out the below form and rate your experience</p>
      <div className="mt-3">
        <Form onSubmit={addMovieHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><b>UserName 🤖</b></Form.Label>
            <Form.Control type="text" placeholder="Enter username" ref={userNameRef}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Favourite Movie 🎬</b></Form.Label>
            <Form.Control type="text" placeholder="Enter movie name" ref={movieNameRef}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><b>Movie Rating ⭐⭐⭐⭐⭐</b></Form.Label>
            
            <Form.Select placeholder="Select Rating" ref={movieRatingRef}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Button variant="warning" type="submit">
            Add
          </Button>
            {message !== "" && <p id="msg"><b>✅{message}</b></p>}
        </Form>
      </div>
    </div>
  );
};

export default AddMovie;
