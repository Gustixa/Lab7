import { useState } from 'react'
import '../Styles/sideBar.css'


export default function sideBar(){

    const [show, setShow] = useState(false)

    return(
        <div className={show ? 'space-toggle' : null} >
            <div className="icon" onClick={() => setShow(show)}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <nav className="nav-bar">
                <div>
                    <ul className="side-nav">
                        <li id="section-tittle">CONFIGURACIÓN</li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/settings#theme">Temas</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/settings">Todas las configuraciones</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/bangs">Atajos de búsqueda</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="side-nav">
                        <li id="section-tittle">ESENCIALES DE PRIVACIDAD</li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/">Búsqueda Privacida</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/app">App y Extensión</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="side-nav">
                        <li id="section-tittle">POR QUÉ PRIVACIDAD</li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://spreadprivacy.com/">Blog sobre Privacidad</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/newsletter">Boletín informativo de Privacidad</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/spread">Ayuda a Difundir la Privacidad</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="side-nav">
                        <li id="section-tittle">QUIÉNES SOMOS</li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/about">Sobre Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/privacy">Política de Privacidad</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/hiring">Oportunidades de Trabajo</a></li>
                        <li className="nav-item"><a className="nav-link" id="link" href="https://duckduckgo.com/press">Kit de Prensa</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="side-nav">
                        <li id="section-tittle">MANTÉN EL CONTACTO</li>
                        <li><a id="link" href="https://twitter.com/duckduckgo">Twitter</a></li>
                        <li><a id="link" href="https://www.reddit.com/r/duckduckgo/">Reddit</a></li>
                        <li><a id="link" href="https://help.duckduckgo.com/">Ayuda</a></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}