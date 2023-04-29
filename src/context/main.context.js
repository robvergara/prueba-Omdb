import React from "react";
import { getMovieById } from "../services/network";

export const MainContext = React.createContext()

export const MainProvider=({children})=>{

  const [movies, setMovies] = React.useState(null);

  //FUNCION ENCARGADA DE TRAER LOS DETALLES DE UNA PELICULA EN ESPECIFICO CUANDO SE LE ENVIA EL "imdbID"
  const movieDetails=async (id)=>{
    // console.log(id)
    const specificMovie = await (getMovieById(id))
    // console.log(specificMovie)
    return(specificMovie)
  }


  return(
    <MainContext.Provider
      value={{
        movies,
        setMovies,
        movieDetails,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}