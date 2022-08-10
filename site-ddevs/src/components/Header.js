import React from 'react'
import Logo from '../../src/logo/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import "../CSS/Header.css";

const Header = () => {
  return (
    <div className='Box' >
      <div className='navbar '>
        <p className='navbar-options animate__animated animate__zoomIn'>Inicio</p>
        <p className='navbar-options animate__animated animate__zoomIn portifolio'>Portifólio</p>
        <div className='SearchPosition animate__animated animate__zoomIn'>
          <p className='contato-position animate__animated animate__zoomIn'>Contato</p>
          <FontAwesomeIcon className='Search' icon={faMagnifyingGlass} ></FontAwesomeIcon>
        </div>
      </div>
      <div className='caixaBanner'>
        <img src={Logo} id='logo-banner' alt='logo-ddevs' />
      </div>

    </div>
  )
}

export default Header