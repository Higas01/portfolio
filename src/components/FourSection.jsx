import React from "react";
import "./FourSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineLink,
} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HMEstoque from "../images/tela inicial.png";
import Login from "../images/Login.png";
import HMFilmes from "../images/HMMovie.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Element } from "react-scroll";

const FourSection = () => {
  return (
    <Element name="projetos">
      <section className="four-section-container">
        <div className="container">
          <h1 className="heading">Projetos</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div className="card">
                <img src={HMEstoque} alt="" />
                <h3>Projeto: HM Estoque</h3>
                <div className="container-links-four-section">
                  <a
                    href="https://github.com/Higas01/projeto-estoque"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://projeto-estoque-gamma.vercel.app/#/"
                    target="_blank"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={Login} alt="" />
                <h3>Projeto: Tela de Login</h3>
                <div className="container-links-four-section">
                  <a
                    href="https://github.com/Higas01/tela-login-react"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://adorable-palmier-3f5b04.netlify.app"
                    target="_blank"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={HMFilmes} alt="" />
                <h3>Projeto: HM Filmes</h3>
                <div className="container-links-four-section">
                  <a
                    href="https://github.com/Higas01/project-movie"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://lambent-pika-971213.netlify.app"
                    target="_blank"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <AiOutlineArrowLeft name="arrow-back-outline" />
              </div>

              <div className="swiper-button-next slider-arrow">
                <AiOutlineArrowRight name="arrow-forward-outline" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

        {/* Media Query */}
        <div className="container-media-query">
          <h1 className="heading">Projetos</h1>
          <div className="card-media-query">
            <img src={HMEstoque} alt="" />
            <h3>Projeto: HM Estoque</h3>
            <div className="container-links-four-section">
              <a
                href="https://github.com/Higas01/projeto-estoque"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                href="https://projeto-estoque-gamma.vercel.app/#/"
                target="_blank"
              >
                <AiOutlineLink />
              </a>
            </div>
          </div>
          <div className="card-media-query">
            <img src={HMFilmes} alt="" />
            <h3>Projeto: HM Filmes</h3>
            <div className="container-links-four-section">
              <a
                href="https://github.com/Higas01/project-movie"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a href="https://lambent-pika-971213.netlify.app" target="_blank">
                <AiOutlineLink />
              </a>
            </div>
          </div>
          <div className="card-media-query">
            <img src={Login} alt="" />
            <h3>Projeto: Tela de Login</h3>
            <div className="container-links-four-section">
              <a
                href="https://github.com/Higas01/tela-login-react"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                href="https://adorable-palmier-3f5b04.netlify.app"
                target="_blank"
              >
                <AiOutlineLink />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default FourSection;
