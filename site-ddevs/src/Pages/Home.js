import React from "react";
import "animate.css";
import Header from "../components/Header";
import Sobre from "../components/Sobre";
import Portifolio from "../components/Portifolio";
import '../CSS/Css_pages/home.css'

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Sobre />
      <div className="closeSobre">    
      </div>
    </div>
  );
}

export default Home;
