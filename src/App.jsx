import { useState, React } from 'react'
import './App.css'
import Cuadro from './componentes/Cuadro'
import Letters from './componentes/Letters'
import Search from './componentes/Search'
import SideBar from './componentes/SideBar'

function App () {

  return (
    <div className="App">
      <SideBar/>
      <div>
        <a href="https://duckduckgo.com/" target="_blank" rel="noopener noreferrer">
        <img src='./duckduckgologo.svg' className="logo react" alt="React logo" />
        <Letters
            text="DuckDuckGo"
        />
        </a>
      </div>
      <Search/>
      <h1>¿Cansado de que te rastreen? Podemos ayudarte.</h1>
      <p>Consigue protección continua y gratuita para tu privacidad en el navegador con una descarga:</p>
      <ul className='ul benefits'>
        <li>Búsqueda Privada</li>
        <li>Bloqueo Se Rastreadores</li>
        <li>Encriptación De Sitios</li>
      </ul>
      <button type='submit' className='btn Add' >Añadir DuckDuckGo a Firefox</button>
      <h6>¡Con la confianza de decenas de millones de personas en todo el mundo!</h6>
      <h4>Protección de la Privacidad para Cualquier Dispositivo</h4>
      <div className='infoBox'>
        <Cuadro
          tittle="Privacidad para Firefox"
          image="../public/p1.svg"
          description="Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, 
          bloqueador de rastreadores y mejora de encriptación todo en una "
          link="https://duckduckgo.com/app"
          linkdata="extensión de Firefox"
        />
        <Cuadro
          tittle="Motor de Búsqueda Privada"
          image="../public/p2.svg"
          description="Busca de forma privada con nuestra 
          app o extensión, añade búsqueda web privada a tu navegador preferido o busca en "
          link="https://duckduckgo.com/"
          linkdata="duckduckgo.com"
        />
        <Cuadro
          tittle="Motor de Búsqueda Privada"
          image="../public/p3.svg"
          description="Nuestro navegador privado para móviles viene 
          equipado con nuestro motor de búsqueda, bloqueador de rastreadores, 
          mejora de encriptación y más. Disponible para "
          link="https://duckduckgo.com/app"
          linkdata="iOS y Android"
        />
      </div>

      <h1>No guardamos tu información
      <br/>personal. Y nunca lo haremos.</h1>
      <p>Nuestra política de privacidad es simple: No colectamos
      <br/>o compartimos ninguna información personal tuya.</p>

      <button type='submit' className='btn Add2'>Instalar DuckDuckGo</button>
      <div>
        <img src="1-monster-v2--pre-animation.svg" alt="" />
      </div>
    </div>
  )
}

export default App
