import axios from "axios";
// SE GUARDA LA API KEY EN UNA CONSTANTE. UNA MEJOR PRACTICA SERIA GUARDARLA EN UN ARCHIVO .ENV Y LEERLO CON EL PAQUETE DOTENV
export const API_KEY = "?apikey=46862f21&"
//SE CREA UNA INSTANCIA DE AXIOS CON LA URL BASE DE DONDE SE VA A CONSUMIR LA API
export const api = axios.create({baseURL:`http://www.omdbapi.com`});

//FUNCION PARA HACER LA PETICION GET A LA URL ASIGNADA JUNTO CON LOS PARAMETROS SI ESTE LOS REQUIERE
export const get= async(url, params)=>{

  try {
    const res = await api.get(url, {params});
    return res.data;
  } catch (error) {
    console.error(error.message);
  }

}
//OBTIENE TODAS LAS PELICULAS QUE CONTENGAN LA PALABRA "BATMAN" EN ELLA. YA QUE NO HAY EN EL BACKEND UNA RUTA EN LA CUAL SOLICITE UNA LISTA DE PELICULAS POR AÑO, GENERO, O ALGUN OTRO ATRIBUTO QUE PERMITA LISTARLAS
export const getMovies = ()=>{
  return(get(`${API_KEY}s=batman&type=movie`))
}


//OBTIENE LAS PELICULAS POR MEDIO DEL ID "imdbID"
export const getMovieById=(id)=>{
  return(get(`${API_KEY}i=${id}`))
}

//OBTIENE LAS PELICULAS POR MEDIO DE UNA PALABRA A BUSCAR
export const getMovieByTitle=(title)=>{
  return(get(`${API_KEY}s=${title}`))
}