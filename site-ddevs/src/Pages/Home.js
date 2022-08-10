import React from "react";
import "animate.css";
import Header from "../components/Header";
import Portifolio from "../components/Portifolio";
import Sobre from "../components/Sobre";

function Index() {

  return (
    <>
      <div className="main">
        <div id="header">
          <Header />
        </div>
        <div id="sobre">
          <Sobre />
        </div>
        <div id="portifolio">
          <Portifolio />
        </div>
      </div>
    </>
  );
}

export default Index;
