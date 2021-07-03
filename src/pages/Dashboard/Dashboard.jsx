import React from "react";
import "./dashboard.scss";
import puntajes from "./images/img-puntajes.jpg";
import reporte from "./images/img-reportes.jpg";
import Avatar from '../../components/pruebaDashboard/menuleft/Avatar';
import AvatarTitle from '../../components/pruebaDashboard/menuleft/AvatarTitle';
import Head from "../../components/pruebaDashboard/menuleft/Head";
import NavProfile from "../../components/pruebaDashboard/menuleft/NavProfile";
import NavUser from "../../components/pruebaDashboard/menuleft/NavUser";
import { useAuthState } from '../../Context';

import { BrowserRouter as Router, Switch, Route,  Link, useLocation, NavLink } from 'react-router-dom';

import Profile from '../profile/Profile';
import AppRoutes from '../../components/AppRoutes'


const Dashboard = ({user}) => {
  return (
    <>
      <div>
        <div className="grid">
          <aside className="sidenav">
            <Head />
            <NavProfile user="Username"/>
            <NavUser/>
          </aside>
          <Router>
            <Switch>
              <AppRoutes exact path='/dashboard/profile' component={Profile}/>
            </Switch>
          </Router>



      
        </div>
      </div>
    </>
  );
};

export default Dashboard;



{/* <div className="main">
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
</div> */}