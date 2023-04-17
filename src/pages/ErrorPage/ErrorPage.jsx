import { Link } from 'react-router-dom'
import * as React from 'react'

import "./ErrorPage.css"

function Error () {
  return (
    <main>
    <img className="404" src={require("../../assets/404.png")} alt="" />
    <div className='error'> "Oups! La page que vous demandez n'existe pas." </div>
    <Link to="/">Retourner sur la page d’accueil</Link>

  </main>
  )
     
};
export default Error;
