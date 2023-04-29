import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { MainContext } from "../context/main.context";

export const MovieDetailPage=()=>{

  const {id} = useParams();
  const {movieDetails} = React.useContext(MainContext);
  const [movie, setMovie] = React.useState(null);

  React.useEffect(()=>{
    const movieById = async()=>{
      const movieData = await movieDetails(id);
      // console.log(movieData);
      setMovie(movieData);
    }
    movieById();
  },[])

  return(
    <>
      {movie!=null && (
        <div className="text-center mt-5 ">
          <h1 className="mb-4">DETALLES DE LA PELICULA</h1>
          <div className="row">
            <div className="col-6">
              <img src={`${movie.Poster}`}/>
            </div>
            <div className="col-6">
              <h2>{movie.Title}</h2>
              <p className="text-start">{movie.Plot}</p>

              <div className="row">
                <div className="col-6">
                  <p><b>Fecha de estreno:</b> {movie.Released}</p>  
                </div>
                <div className="col-6">
                  <p><b>Duración: </b>{movie.Runtime}</p>
                </div>
              </div>

              <div className="row text-start">
                <h5><b>Elenco.</b></h5>
                <p><b>Directores: </b> {movie.Director}</p>
                <p><b>Escritores: </b> {movie.Writer}</p>
                <p><b>Actores: </b> {movie.Actors}</p>
              </div>
            </div>
          </div>
          <NavLink className='mt-3 btn btn-outline-secondary' to={'/'}>atrás</NavLink>
        </div>
      )}
    </>
  )
}