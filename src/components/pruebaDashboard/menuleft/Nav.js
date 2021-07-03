import React from 'react';
import reportes from "../../../pages/Dashboard/images/icono-reportes.svg";
import puntaje from "../../../pages/Dashboard/images/icono-categoria-puntaje.svg";

function Nav() {
  return (
    <>
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

    </>
  )
}

export default Nav;