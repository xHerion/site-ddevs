import '../CSS/Home.css';
import React from 'react';
import Logo from '../../src/logo/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import 'animate.css'

function Home() {
  return (
    <>
      <div className='main'>
        <div className='Box' >
          <div className='navbar '>
            <p className='navbar-options animate__animated animate__zoomIn'>Inicio</p>
            <p className='navbar-options animate__animated animate__zoomIn'>Portifólio</p>
            <div className='SearchPosition animate__animated animate__zoomIn'>
              <p className='contato-position animate__animated animate__zoomIn'>Contato</p>
              <FontAwesomeIcon className='Search' icon={faMagnifyingGlass} ></FontAwesomeIcon>
            </div>
          </div>

          <div className='caixaBanner'>
            <img src={Logo} id='logo-banner' alt='logo-ddevs' />
          </div>

        </div>
        <div id='espaco' className='animate__animated animate__zoomIn'>
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

      <div>
        <div className='caixaTituloProjetos'>
          <h1 id='tituloProjetos'>Portifólio</h1>
        </div>


        <div class="scroll">

          <input type="radio" name="grupo" id="rd_programa1" checked="true" />
          <input type="radio" name="grupo" id="rd_programa2" checked="true" />
          <input type="radio" name="grupo" id="rd_programa3" checked="true" />
          <input type="radio" name="grupo" id="rd_programa4" checked="true" />
          <input type="radio" name="grupo" id="rd_programa5" checked="true" />

          <section class="sections">
            <section class="bloco" id="programa1">PROGRAMA 1</section>
            <section class="bloco" id="programa2">PROGRAMA 2</section>
            <section class="bloco" id="programa3">PROGRAMA 3</section>
            <section class="bloco" id="programa4">PROGRAMA 4</section>
            <section class="bloco" id="programa5">PROGRAMA 5</section>
          </section>
        </div>

        <nav className="links">

          <label for="rd_programa1">Programa 1</label>
          <label for="rd_programa2">Programa 2</label>
          <label for="rd_programa3">Programa 3</label>
          <label for="rd_programa4">Programa 4</label>
          <label for="rd_programa5">Programa 5</label>

        </nav>
      </div>
    </>
  );
}

export default Home;
