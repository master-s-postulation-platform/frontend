import React from "react";
import "../../assets/styles/components/NavMenu.scss";
import reportes from "./images/Icono-reportes.svg";
import logo from "./images/logo-talent-job-gris.svg";
import puntaje from "./images/img-puntajes.jpg";

const NavMenu = () => (
  <aside className="sidenav">
    <div className="">
      <div className="logo">
        <img src={logo} alt="Logo Talent Jobs" />
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
            <span className="navList__subheading-title">Administradores</span>
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
            <span className="navList__subheading-title">Situación laboral</span>
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
            <span className="navList__subheading-title">Escolaridad</span>
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
);

export default NavMenu;
