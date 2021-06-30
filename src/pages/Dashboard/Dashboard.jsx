import React from "react";
import "./dashboard.scss";
import avatar from "./images/avatar.jpg";
import admin from "./images/fdo-purple-admin.png";
import puntaje from "./images/icono-categoria-puntaje.svg";
import reportes from "./images/Icono-reportes.svg";
import puntajes from "./images/img-puntajes.jpg";
import reporte from "./images/img-reportes.jpg";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="grid">
          <header className="header">
            <div className="header__search">
              <input className="header__input" placeholder="Search..." />
            </div>
            <div className="header__avatar">
              <div className="dropdown">
                <ul className="">
                  <li className="">
                    <span className="">Mi perfil</span>
                  </li>
                  <li className="">
                    <span className="">Cerrar sesió</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <aside className="sidenav">
            <div className="">
              <div className="logo">
                <img
                  src="./images/logo-talent-job-gris.svg"
                  alt="Logo Talent Jobs"
                />
              </div>
            </div>
            <div className="sidenav__profile">
              <div className="sidenav__profile-avatar"></div>
              <div className="sidenav__profile-title">Darlene R</div>
            </div>
            <div className="">
              <ul className="navList">
                <li className="navList__heading">
                  Reportes
                  <img src={reportes} alt="Icono categoria puntajes" />
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"></span>
                    <span className="navList__subheading-title">
                      Usuarios / Postulantes
                    </span>
                  </div>
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"> </span>
                    <span className="navList__subheading-title">
                      Administradores
                    </span>
                  </div>
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"></span>
                    <span className="navList__subheading-title">
                      Ordenar por puntaje
                    </span>
                  </div>
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"></span>
                    <span className="navList__subheading-title">
                      Usuarios registrados
                    </span>
                  </div>
                </li>

                <li className="navList__heading">
                  Categorias puntajes
                  <img src={puntaje} alt="" />
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"></span>
                    <span className="navList__subheading-title">
                      Situación laboral
                    </span>
                  </div>
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"></span>
                    <span className="navList__subheading-title">
                      Experiencia profesional
                    </span>
                  </div>
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"></span>
                    <span className="navList__subheading-title">
                      Escolaridad
                    </span>
                  </div>
                </li>
                <li>
                  <div className="navList__subheading">
                    <span className="navList__subheading-icon"></span>
                    <span className="navList__subheading-title">Idioma</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <div className="main">
            <div className="main-header">
              <div className="main-header__intro-wrapper">
                <div className="main-header__welcome">
                  <div className="main-header__welcome-title text-light">
                    Bienvenido, <strong>Darlene Robertson</strong>
                  </div>
                  <div className="main-header__welcome-subtitle">
                    ¿Cómo estás hoy?
                  </div>
                </div>
                <div>
                  <a href="" download>
                    <span>Download</span>
                    <span>PDF</span>
                  </a>
                  <a href="" download>
                    <span>Download</span>
                    <span>XSL</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="main-overview">
              <div className="overviewCard">
                <div className="overviewCard-description">
                  <h3 className="overviewCard-title">
                    <strong>Reportes</strong>
                  </h3>
                  <div className="">
                    <img src={reporte} alt="Imagen reportes" />
                  </div>

                  <div className="container">
                    <button className="button" href="#0">
                      Ver reportes
                    </button>
                  </div>
                </div>
              </div>
              <div className="overviewCard">
                <div className="overviewCard-description">
                  <h3 className="overviewCard-title">
                    <strong>Puntajes</strong>
                  </h3>
                  <div className="">
                    <img src={puntajes} alt="Imagen puntajes" />
                  </div>
                  <div className="container">
                    <button className="button" href="#0">
                      Ver reportes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
