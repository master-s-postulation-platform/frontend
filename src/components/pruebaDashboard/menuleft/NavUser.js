import React from "react";
import reportes from "../../../pages/DashboardAdmin/images/icono-reportes.svg";
import puntaje from "../../../pages/DashboardAdmin/images/icono-categoria-puntaje.svg";
import { Link, useLocation, NavLink } from "react-router-dom";

function NavUser() {
  return (
    <>
      <div className="title__user22">
        <span className="title__user1">Vista de usuario</span>
      </div>

      <ul className="navList">
        <li className="navList__heading">
          Talent Jobs
          <img src={reportes} alt="Icono categoria puntajes" />
        </li>
        <li className="navList__heading">
          Mis documentos
          <img src={reportes} alt="Icono categoria puntajes" />
        </li>
        <li className="navList__heading">
          Mi perfil
          <img src={reportes} alt="Icono categoria puntajes" />
        </li>
        <li>
          <div className="navList__subheading">
            <span className="navList__subheading-icon"></span>
            <span className="navList__subheading-title">
              <Link to="/dashboard/profile">Datos Básicos</Link>
            </span>
          </div>
        </li>
        <li>
          <div className="navList__subheading">
            <span className="navList__subheading-icon"> </span>
            <span className="navList__subheading-title">Dirección</span>
          </div>
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
              <Link to="/dashboard/profesional">Experiencia profesional </Link>
            </span>
          </div>
        </li>
        <li>
          <div className="navList__subheading">
            <span className="navList__subheading-icon"></span>
            <span className="navList__subheading-title">
              <Link to="/dashboard/education">Escolaridad</Link>
            </span>
          </div>
        </li>
        <li>
          <div className="navList__subheading">
            <span className="navList__subheading-icon"></span>
            <span className="navList__subheading-title">
              <Link to="/dashboard/idioms">Idioma</Link>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default NavUser;
