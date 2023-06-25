import React from "react";
import "./SecondSection.css";

import naveEspacial from "../images/nave-espacial.png";
import { Element } from "react-scroll";

const SecondSection = () => {
  return (
    <Element name="sobremim">
      <section className="second-sec" id="sobremim">
        <h1 className="h1-second-section">Sobre mim</h1>
        <div className="container-second-section">
          <div className="container-second-section-p">
            <p className="p-second-section">
              Me chamo Higor Matheus, comecei meus estudos na programação em
              2021, desde então estudo com foco em me tornar um desenvolvedor
              full-stack. Realizei diversos projetos tanto com tecnologias
              front-end quanto back-end, todos estão presentes em meu github
            </p>
            <p className="p-second-section">
              Atualmente curso Ciência da Computação e a cada dia me apaixono
              cada vez mais pelo mundo da programação
            </p>
          </div>
          <div>
            <img
              src={naveEspacial}
              alt=""
              srcset=""
              className="astronauta-second-section"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default SecondSection;
