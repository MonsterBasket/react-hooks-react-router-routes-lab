import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
        <h1>Actors Page</h1>
      {actors.map(a => <div key={a.name}>
          <h4>Name: {a.name}</h4>
          Movies:
          <ul>{a.movies.map(a=> <li key={a}>{a}</li>)}</ul>
        </div>
      )}
    </div>; 
}

export default Actors;
