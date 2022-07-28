import '../CSS/App.css';
import React from 'react';
import Logo from '../../src/logo/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import banner1 from '../banner1.png'


function App() {
  return (
    <div className='body'>
      <div className='Box'>
        <div className='navbar'>
          <p className='navbar-options'>Inicio</p>
          <p className='navbar-options'>Portifólio</p>

          <div className='SearchPosition'>
            <p className='contato-position'>Contato</p>
            <FontAwesomeIcon className='Search' icon={faMagnifyingGlass} ></FontAwesomeIcon>
          </div>
        </div>
        <img src={Logo} className='logo-banner' alt='logo-ddevs' />
      </div>
    { 
    /* 
   
    Inicio da estrutura para o carrossel 
    <------------------------------>
    */ 
    }

    </div>
  );
}

export default App;
