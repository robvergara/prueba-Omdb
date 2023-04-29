import React from "react";
import { getMovieByTitle } from "../services/network";
import { MainContext } from "../context/main.context";

export const SearchBar=()=>{
  const {setMovies} = React.useContext(MainContext)
  const [value, setValue] = React.useState(null);

  //FUNCION MANEJADORA DEL INPUT QUE LE CAMBIA EL VALOR POR LO ESCRITO EN LA CASILLA 
  const handleChange=(e)=>{
    // console.log(e.target.value)
    setValue(e.target.value)
  }

  //FUNCION QUE SE ENFOCA EN BUSCAR EL TITULO ENVIANDO EL VALOR "VALUE" 
  const onSearch=async(e)=>{
    e.preventDefault()
    // console.log(value)
    const movies =await getMovieByTitle(value)
    // console.log(movies)
    setMovies(movies.Search)
  }
  return(
    <>
      <form onSubmit={onSearch} className="">
        <input className="input mx-2" type="text" placeholder="Busca tu pelicula aquí" onChange={handleChange} name="title"></input>
        <button className="btn btn-outline-primary" type="submit">buscar</button>
      </form>
    </>
  )
}