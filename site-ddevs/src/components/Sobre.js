import React, { useRef, useEffect } from 'react'
import "../CSS/sobre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faCaretUp
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";

function Sobre() {

    const ref = useRef(null);

    useEffect(() => {
        var sobre = document.querySelector('.Caixasobre');
        var fecha = document.querySelector('.fecha');
        var icon = document.querySelector('.iconUp');
        var espaco = document.querySelector('#espaco')

       

        sobre.addEventListener('mousemove', () => {
            sobre.style.fontSize = 'large'
            espaco.style.background = 'black'
        });

        fecha.addEventListener('mousemove', () => { 
            
            sobre.style.fontSize = '0'
            icon.style.display = 'none'
            espaco.style.background = 'none'
        });


        icon.addEventListener('click', () => {
            sobre.style.fontSize = '0'
            icon.style.display = 'none'
            espaco.style.background = 'none'
        });

        sobre.addEventListener('mousemove', () => {
            icon.style.display = 'flex'
        });


    }, []);

    return (

        <div>
            <div className='fecha'></div>


            <div id='espaco' className="animate__animated animate__zoomIn">

                <div ref={ref} className="Caixasobre">
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
                <div className='iconUp'><a className='aIcon'>
                    <FontAwesomeIcon icon={faCaretUp} /></a>
                </div>
            </div>
        </div>
    ); 
}; 


export default Sobre