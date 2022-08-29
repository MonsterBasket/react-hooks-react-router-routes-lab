import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(a => <div key={a.title}>
      <h4>Name: {a.title}</h4>
      <p>Time: {a.time}</p>
      Genres:
      <ul>
        {a.genres.map(a => <li key={a}>{a}</li>)}
      </ul>
      </div>
    )}
  </div>
}

export default Movies;
