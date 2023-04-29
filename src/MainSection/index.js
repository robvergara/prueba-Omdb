import React from "react";  
import { getMovies } from "../services/network";
import { MovieItem } from "../MovieItem";
import { SearchBar } from "../SearchBar";
import { MainContext } from "../context/main.context";

export const MainSection=()=>{
  const {movies, setMovies} = React.useContext(MainContext)

  //EFECTO PARA TRAER TODAS LAS PELICULAS DE BATMAN 
  React.useEffect(()=>{

    const batmanMovies =async()=>{
      const movieList = await getMovies();
      // console.log(movieList)
      setMovies(movieList.Search)
    }
    batmanMovies();
  },[])

  // console.log(movies)
  return(
    <div className="container">

      <div className="text-center my-3">
        <h1 className="mb-3">Películas</h1>
        {/* COMPONENTE DE BARRA DE BUSQUEDA POR NOMBRE */}
        <SearchBar />
      </div>

      {movies != null && (
        <div className="row">
        {movies.map(movie =>(
          //COMPONENTE DE CADA ITEM DE LA LISTA DE PELICULAS 
          <MovieItem movie={movie} key={movie.imdbID}/>
        ))}
        </div>
      )}
    </div>
  )
}