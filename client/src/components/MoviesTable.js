import React from "react";
import Table from "react-bootstrap/Table";


const MoviesTable = ({data}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>UserName</th>
          <th>Movie Name</th>
          <th>Rating</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
       {data.map((dataItem, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{dataItem.userName}</td>
          <td>{dataItem.movieName}</td>
          <td>{dataItem.movieRating}</td>
          <td>{dataItem._id}</td>
          <td></td>
        </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MoviesTable
