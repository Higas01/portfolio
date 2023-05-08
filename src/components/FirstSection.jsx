import React, { useState } from "react";
import "./FirstSection.css";

import astronauta from "../images/astronauta.png";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsLink, BsLinkedin } from "react-icons/bs";
import { Element } from "react-scroll";

const FirstSection = () => {
  return (
    <Element name="home">
      <section className="first-section">
        <div>
          <h1 className="h1-first-section">Higor Matheus</h1>
          <TypeAnimation
            sequence={[2000, "Full Stack Developer"]}
            wrapper="h2"
            speed={20}
            cursor={true}
            className="h2-first-section"
          />
          <div className="container-icon-first-section">
            <a
              href="https://github.com/Higas01"
              target="_blank"
              className="icon-first-section"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/higor-matheus-rocha-porangaba-634b82262/"
              target="_blank"
              className="icon-first-section"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <img
          src={astronauta}
          alt="Imagem de um astronauta lendo"
          className="astronauta"
        />
      </section>
    </Element>
  );
};

export default FirstSection;
