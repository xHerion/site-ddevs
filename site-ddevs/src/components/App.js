import './App.css';
import React from 'react';
import Logo from '../src/logo/logo_transparent.png'


function App() {
  return (
    <div >
      <div className='Box'>
        <div className='navbar'>
          <p className='navbar-options'>Inicio</p>
          <p className='navbar-options'>Portifólio</p>
          <p className='navbar-options'>Contato</p>
        </div>
      <img src={Logo} className='logo-banner' alt='logo-ddevs'/>
      </div>
   

    </div>
  );
}

export default App;
