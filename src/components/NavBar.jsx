import React, { useState } from "react";
import "./NavBar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const NavBar = () => {
  const handleOpenBurguer = () => {
    const menuBurguer = document.querySelector(".menu-burguer-close");
    menuBurguer.classList.remove("menu-burguer-close");
    menuBurguer.classList.add("menu-burguer-open");

    const body = document.querySelector("body");
    const html = document.querySelector("html");
    body.classList.add("body-menu-burguer");
    html.classList.add("body-menu-burguer");

    const navbar = document.querySelector(".navbar-burguer");
    navbar.classList.remove("navbar-burguer");
    navbar.classList.add("navbar-menu-burguer-hidden");
  };

  const handleCloseBurguer = () => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    body.classList.remove("body-menu-burguer");
    html.classList.remove("body-menu-burguer");

    const menuBurguer = document.querySelector(".menu-burguer-open");
    menuBurguer.classList.remove("menu-burguer-open");
    menuBurguer.classList.add("menu-burguer-close");

    const navbar = document.querySelector(".navbar-menu-burguer-hidden");
    navbar.classList.remove("navbar-menu-burguer-hidden");
    navbar.classList.add("navbar-burguer");
  };

  return (
    <>
      <nav className="navbar-burguer">
        <button className="menu-burguer" onClick={handleOpenBurguer}>
          <AiOutlineMenu />
        </button>
        <h2 className="h2-burguer">Bem-vindo!</h2>
      </nav>
      <nav className="navbar">
        <h2>Bem-vindo!</h2>
        <ul className="navbar-home">
          <li className="li-navbar">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              data-text="ToBottom"
            >
              Início
            </Link>
          </li>
          <li className="li-navbar">
            <Link
              activeClass="active"
              to="sobremim"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              data-text="ToBottom"
            >
              Sobre mim
            </Link>
          </li>
          <li className="li-navbar">
            <Link
              activeClass="active"
              to="habilidades"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              data-text="ToBottom"
            >
              Habilidades
            </Link>
          </li>
          <li className="li-navbar">
            <Link
              activeClass="active"
              to="projetos"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              data-text="ToBottom"
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-burguer-close">
        <button className="close-menu-burguer" onClick={handleCloseBurguer}>
          <AiOutlineClose />
        </button>
        <ul>
          <li className="li-menu-burguer">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              data-text="ToBottom"
              onClick={handleCloseBurguer}
            >
              Início
            </Link>
          </li>
          <li className="li-menu-burguer">
            <Link
              activeClass="active"
              to="sobremim"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              data-text="ToBottom"
              onClick={handleCloseBurguer}
            >
              Sobre mim
            </Link>
          </li>
          <li className="li-menu-burguer">
            <Link
              activeClass="active"
              to="habilidades"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              data-text="ToBottom"
              onClick={handleCloseBurguer}
            >
              Habilidades
            </Link>
          </li>
          <li className="li-menu-burguer">
            <Link
              activeClass="active"
              to="projetos"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              data-text="ToBottom"
              onClick={handleCloseBurguer}
            >
              Projetos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
