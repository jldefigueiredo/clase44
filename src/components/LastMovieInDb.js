import React from "react";
import PropTypes from "prop-types";

function LastMovieInDb(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Duracion</th>
          <th scope="col">Rating</th>
          <th scope="col">Genero</th>
          <th scope="col">Premios</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Billy Elliot</td>
          <td>123</td>
          <td>5</td>
          <td>Comedia</td>
          <td>5</td>
        </tr>
        <tr>
        <td>Billy Elliot</td>
          <td>123</td>
          <td>5</td>
          <td>Comedia</td>
          <td>5</td>
        </tr>
        <tr>
        <td>Billy Elliot</td>
          <td>123</td>
          <td>5</td>
          <td>Comedia</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
}
export default LastMovieInDb;
