import { useState } from 'react'
import './App.css'
import Cuadro from './componentes/Cuadro'

function App() {

  const dataBoxes = [
    {
      "tittle1":"Privacidad para Firefox",
      "img":"",
      "description":"Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una ",
      "link":"https://duckduckgo.com/",
      "linkName":"extensión de Firefox"

    },
    {}
  ]
  return (
    <div className="App">
      <nav className='menu-toggle'>
        <div className='menu-toggle'>
          <span className='menu-icon'></span>
        </div>
        <ul className='menu-list'>
          <li className='option'>Twitter</li>
          <li className='option'>Reddit</li>
          <li className='option'>Blog</li>
          <li className='option'>Newsletter</li>
        </ul>
      </nav>
      <div>
        <a href="https://duckduckgo.com/" target="_blank">
          <img src='./duckduckgologo.svg' className="logo react" alt="React logo" />
        </a>
      </div>
      <input type="text" placeholder="Busca en la red sin que te rastreen" className="input"/>
      <input type="submit" className="submit" img='search'/>
      <h1>¿Cansado de que te rastreen? Podemos ayudarte.</h1>
      <h3>Consigue protección continua y gratuita para tu privacidad en el navegador con una descarga:</h3>
      <ul className='ul benefits'>
        <li>Búsqueda Privada</li>
        <li>Bloqueo Se Sastreadores</li>
        <li>Encriptación De Sitios</li>
      </ul>
      <button type='submit' className='btn Add'>Añadir DuckDuckGo a Firefox</button>
      <h6>¡Con la confianza de decenas de millones de personas en todo el mundo!</h6>
      <h4>Protección de la Privacidad para Cualquier Dispositivo</h4>

      <div className='infoBox'>
          <Cuadro
            tittle="Privacidad para Firefox"
            image="../public/p1.svg"
            description="Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora
            de encriptación todo en una "
            link="https://duckduckgo.com/app"
            linkdata="extensión de Firefox"
            />
          <Cuadro
            tittle="Motor de Búsqueda Privada"
            image="../public/p2.svg"
            description="Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en "
            link="https://duckduckgo.com/"
            linkdata="duckduckgo.com"
          />
          <Cuadro
            tittle="Navegador Privado"
            image="../public/p3.svg"
            description="Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, 
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
      <h1>Frequently Asked Questions</h1>
      <div className='questions'>
        <details className='Q_boxes'>
          <summary className='summary'>How does DuckDuckGo make money?</summary>
          <p className='detai'>We make our money from private ads on our search engine. On other search engines, ads are based on profiles compiled about you using your personal information like search, browsing, and purchase history. Since we don’t collect that information, search ads on DuckDuckGo are based on the search results page you are viewing, not on you as a person. For example, if you search for cars, we’ll show you ads about cars. Learn more.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>What does Google know about me?</summary>
          <p className='detai'>Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with DuckDuckGo!). And that’s just the tip of the iceberg. Learn more.</p>
        </details>
      </div>
    </div>
  )
}

export default App
