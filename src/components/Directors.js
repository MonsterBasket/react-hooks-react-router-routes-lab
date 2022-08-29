import React from "react";
import { directors } from "../data";

function Directors() {
  return <>
        <h1>Directors Page</h1>
      {directors.map(a => <div key={a.name}>
          <h4>Name: {a.name}</h4>
          Movies:
          <ul> {a.movies.map(a=> <li key={a}>{a}</li>)}</ul>
        </div>
      )}
    </>;
}

export default Directors;
