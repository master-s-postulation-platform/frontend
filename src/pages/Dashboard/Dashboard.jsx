import React from "react";
import "./dashboard.scss";
import puntaje from "./images/img-puntajes.jpg";
import reportes from "./images/img-reportes.jpg";
import logo from "./images/Logo-TJ-Admin.svg";
import iconUser from "./images/Icono-Usuario.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  NavLink,
} from "react-router-dom";

import Profile from "../profile/Profile";
import AppRoutes from "../../components/AppRoutes";

const Dashboard = ({ user }) => {
  return (
    <>
      <div>
        <div className="grid">
          <header className="header">
            <div></div>
            <nav className="menuCSS3">
              <ul>
                <li>
                  <a href="#">
                    <img src={iconUser} alt="Icono Usuario" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Perfil</a>
                    </li>
                    <li>
                      <a href="#">Cerrar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </header>
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
          <Router>
            <Switch>
              <AppRoutes exact path="/dashboard/profile" component={Profile} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

{
  /* <div className="main">
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
</div> */
}
