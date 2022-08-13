import React from 'react'
import Logo from '../../src/logo/logo_invertido.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import "../CSS/Header.css";
import "../CSS/portifolio.css";

const Header = () => {

  return (
    <div className='Box' >
      <div className='navbar '>
        <p className='navbar-options animate__animated animate__zoomIn'><a href='#'>Inicio</a></p>
        <p className='navbar-options animate__animated animate__zoomIn' ><a href='#'>Portifólio</a></p>
        <div className='SearchPosition animate__animated animate__zoomIn'>
          <p className='contato-position animate__animated animate__zoomIn'><a href='#'>Contato</a></p>
          <a href='#' id='searchIconBox'><FontAwesomeIcon className='Search' icon={faMagnifyingGlass} ></FontAwesomeIcon></a>
        </div>
      </div>
      <div className='logoBox'>
        <a href='#'><img src={Logo} id='logo-banner' alt='logo-ddevs' /></a>
      </div>
    </div>
  );
};



export default Header;

