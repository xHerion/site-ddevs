import '../CSS/App.css';
import React from 'react';
import Logo from '../../src/logo/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div>
      <div className='Box'>
        <div className='navbar'>
          <p className='navbar-options'>Inicio</p>
          <p className='navbar-options'>Portifólio</p>
          <p className='navbar-options'>Contato</p>      
          <div>
          </div>
        </div>
        <img src={Logo} className='logo-banner' alt='logo-ddevs' />
      </div>
      <FontAwesomeIcon icon={faCoffee }></FontAwesomeIcon>
    </div>
  );
}

export default App;
