import '../CSS/App.css';
import React from 'react';
import Logo from '../../src/logo/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import 'animate.css'

function App() {
  return (
    <div>
      <div className='Box' >
        <div className='navbar'>
          <p className='navbar-options'>Inicio</p>
          <p className='navbar-options'>Portifólio</p>
          <div className='SearchPosition'>
            <p className='contato-position'>Contato</p>
            <FontAwesomeIcon className='Search' icon={faMagnifyingGlass} ></FontAwesomeIcon>
          </div>
        </div>
        <div className='caixaBanner'>
          <img src={Logo} id='logo-banner' alt='logo-ddevs' />
        </div>
      </div>
      <div className='animate__animated animate__zoomIn'>
        <div className='Caixasobre'>
          <div className='caixaTituloSobre'>
            <h1 className='tituloSobre'><FontAwesomeIcon id='caretIcon' icon={faCaretDown} />Sobre nós</h1>
          </div>
          <div className='caixaTexto'>
            <p className='sobre'>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
