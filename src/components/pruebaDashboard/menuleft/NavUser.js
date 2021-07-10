import React from 'react';
import reportes from "../../../pages/Dashboard/images/icono-reportes.png";
import puntaje from "../../../pages/Dashboard/images/icono-categoria-puntaje.svg";
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useAuthState } from '../../../Context'

import Head from './Head';
import NavProfile from './NavProfile';
import "../menuleft/navUser.scss"

function NavUser() {
  const userDetails = useAuthState();

  let users = userDetails.admin;

  return (
    <>
      <div className="navUser">
        <Head />
        <NavProfile user="Administrador" />
        { users === true ? <ItemAdmin /> : <ItemUser/> }

        
      </div>
    </>
  )
}

export default NavUser;

function ItemUser() {
  return (
    <>
      <div className="title__user22">
        <span className="title__user1">
          <p>Vista de usuario </p>
        </span>
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
              <Link to="/dashboard" >Datos Básicos</Link>
            </span>
          </div>
        </li>
        <li>
          <div className="navList__subheading">
            <span className="navList__subheading-icon"></span>
            <span className="navList__subheading-title">
              <Link to="/dashboard/jobs">Situación Laboral</Link>
            </span>
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
      )
}


function ItemAdmin() {
  return (
    <>
      <div className="title__user22">
        <span className="title__user1">
          <p>Vista Administrador </p>
        </span>
      </div>
        <ul className="navList" >
          <li>
            <div className="navList__subheading">
              <br/>
              <span className="navList__subheading-icon"></span>
              <span className="navList__subheading-title">
                <Link to="/dashboard/postulantes">Postulantes</Link>
              </span>
            </div>
          </li>
          <li>
            <div className="navList__subheading">
              <span className="navList__subheading-icon"></span>
              <span className="navList__subheading-title">
                <Link to="/dashboard/usuario">Administradores</Link>
              </span>
            </div>
          </li>

        </ul>
    </>
  )
}