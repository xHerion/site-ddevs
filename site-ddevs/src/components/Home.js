import "../CSS/Home.css";
import React from "react";
import Logo from "../../src/logo/logo_transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import Header from "./Header";

function Home() {
  const itens = [
    {
      rd: "rd_programa1",
      id: "programa1",
      texto: "Programa 1",
    },
    {
      rd: "rd_programa2",
      id: "programa2",
      texto: "Programa 2",
    },
    {
      rd: "rd_programa3",
      id: "programa3",
      texto: "Programa 3",
    },
    {
      rd: "rd_programa4",
      id: "programa4",
      texto: "Programa 4",
    },
    {
      rd: "rd_programa5",
      id: "programa5",
      texto: "Programa 5",
    },
  ];

  return (
    <>
      <div className="main">
        <Header />
        <div id="espaco" className="animate__animated animate__zoomIn">
          <div className="Caixasobre">
            <div className="caixaTituloSobre">
              <h1 className="tituloSobre">
                <FontAwesomeIcon id="caretIcon" icon={faCaretDown} />
                Sobre nós
              </h1>
            </div>
            <div className="caixaTexto">
              <p className="sobre">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="caixaTituloProjetos">
          <h1 id="tituloProjetos">Portifólio</h1>
        </div>

        <div class="scroll">
          {itens.map((item, index) => (
            <input key={index} type="radio" name="grupo" id={item.rd} checked="true"/>
          ))}


          <section class="sections">
            {itens.map((item, index)=>(
              <section key={index} class="bloco" id={item.id}>
                {item.texto}
              </section>
            ))}

            
          </section>
        </div>

        <nav className="links">
            {itens.map((item, index)=>(
              <label key={index} for={item.rd}>{item.texto}</label>
            ))}

        </nav>
      </div>
    </>
  );
}

export default Home;
