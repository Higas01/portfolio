import React from "react";
import "./ThreeSection.css";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTypescript, SiHtml5, SiCss3, SiMysql, SiNestjs } from "react-icons/si";
import { Element } from "react-scroll";
const ThreeSection = () => {
  return (
    <Element name="habilidades">
      <section className="three-section">
        <div className="full-container-three-section">
          <h1 className="h1-three-section">Habilidades</h1>

          <div className="container-icons">
            <div className="box">
              <h2>React</h2>
              <FaReact className="React icon-three-section" />
              <div className="content">
                <p>
                  O React é uma biblioteca criada para construir telas de forma
                  declarativa
                </p>
              </div>
            </div>
            <div className="box">
              <h2>JavaScript</h2>
              <FaJs className="JS icon-three-section" />
              <div className="content">
                <p>
                  JavaScript é uma linguagem de script orientada a objetos,
                  multiplataforma. É uma linguagem pequena e leve.
                </p>
              </div>
            </div>
            <div className="box">
              <h2>NodeJS</h2>
              <FaNodeJs className="nodeJS icon-three-section" />
              <div className="content">
                <p>
                  O NodeJS é uma poderosa plataforma para construir de forma
                  rápida e fácil aplicações de rede escaláveis.
                </p>
              </div>
            </div>
            <div className="box">
              <h2>MongoDB</h2>
              <DiMongodb className="MongoDB icon-three-section" />
              <div className="content">
                <p>
                  É um banco de dados opensource, de alta performance e
                  flexível, sendo considerado o principal banco de dados NoSQL.
                </p>
              </div>
            </div>
            <div className="box">
              <h2>TypeScript</h2>
              <SiTypescript className="typeScript icon-three-section" />
              <div className="content">
                <p>
                  Typescript é uma linguagem de código aberto desenvolvida pela
                  Microsoft que foi construída em cima do Javascript
                </p>
              </div>
            </div>
            <div className="box">
              <h2>HTML</h2>
              <SiHtml5 className="HTML icon-three-section" />
              <div className="content">
                <p>
                  HTML é uma linguagem de marcação utilizada na construção de
                  páginas na Web
                </p>
              </div>
            </div>
            <div className="box">
              <h2>CSS</h2>
              <SiCss3 className="CSS icon-three-section" />
              <div className="content">
                <p>
                  É uma maneira de dar estilo ao código criado por linguagens
                  como HTML, XML ou XHTML, por exemplo.
                </p>
              </div>
            </div>
            </div>
        </div>
      </section>
    </Element>
  );
};

export default ThreeSection;
