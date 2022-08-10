import React from 'react'
import "../CSS/portifolio.css";
import "animate.css";

function Portifolio() {
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

        <div>
            <div className="caixaTituloProjetos">
                <h1 id="tituloProjetos">Portifólio</h1>
            </div>

            <div class="scroll">
                {itens.map((item, index) => (
                    <input key={index} type="radio" name="grupo" id={item.rd} />
                ))}


                <section class="sections">
                    {itens.map((item, index) => (
                        <section key={index} class="bloco" id={item.id} checked="true">
                            {item.texto}
                        </section>
                    ))}


                </section>
            </div>

            <nav className="links">
                {itens.map((item, index) => (
                    <label key={index} for={item.rd}>{item.texto}</label>
                ))}

            </nav>
        </div>
    )
}

export default Portifolio