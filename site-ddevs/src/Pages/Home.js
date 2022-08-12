import React from "react";
import "animate.css";
import Header from "../components/Header";
import Sobre from "../components/Sobre";
import Portifolio from "../components/Portifolio";
import '../CSS/Css_pages/home.css'

const Index = () => {
  return (
    <div className="main">
      <div id="header">
        <Header />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <Portifolio />
    </div>
  );
}

export default Index;
