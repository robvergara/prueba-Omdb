import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar=()=>{
  return(
    <>
      <header className="">
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <a className="navbar-brand" href={"#"}>Proyecto prueba Tecnoglass</a>
            <NavLink className='navbar-brand' to={'/'}>Home</NavLink>
          </div>
        </nav>
      </header>
    </>
  )
}