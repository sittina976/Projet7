import { Link } from 'react-router-dom'
import * as React from 'react'
import "./header.css"




function Header() {

    return (

        // <header className="contained flex">
        <header className="contained flex">

            <div>
                <img className="logo" src={require('../../assets/LOGO.png')} alt="Logo" />
            </div>

            <nav className="mlauto">
                <ul>
                   <li><Link to="/">Accueil</Link></li> 
                   <li><Link to="/a-propos">A Propos</Link></li> 
                </ul>
            </nav>
        </header>
    )
}

export default Header