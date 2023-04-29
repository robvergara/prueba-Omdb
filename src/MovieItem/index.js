import React from "react";
import { MainContext } from "../context/main.context";
import { NavLink } from "react-router-dom";

export const MovieItem=({movie})=>{

  const {movieDetails} = React.useContext(MainContext);

  return (
    <div className="col-4">
      <NavLink className="card-btn"  to={`/movie/${movie.imdbID}`}>
        {/* <a onClick={()=> movieDetails(movie.imdbID)}> */}
          <div className="card">
            <img className="card-img-top" src={`${movie.Poster}`}/>
            <p className="card-title">{movie.Title}</p>
          </div>
        {/* </a> */}
      </NavLink>
    </div>
  )
}