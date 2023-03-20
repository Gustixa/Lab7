import React from 'react'
import '../Styles/Search.css'

export default function Search () {
  return (
    <div className="searchBox">
      <input className="search" type="text" placeholder="Busca en la red sin que te rastreen"/>
      <button className="searchButton" type="submit"><i className="fa-regular fa-magnifying-glass"/>Enviar</button>
    </div>
  )
}
