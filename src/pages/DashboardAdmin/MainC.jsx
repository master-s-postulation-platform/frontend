import React from "react";

const MainC = () => (
  <div className="main">
    <div className="main-header">
      <div className="main-header__intro-wrapper">
        <div className="main-header__welcome">
          <div className="main-header__welcome-title text-light">
            Bienvenido, <strong>Darlene Robertson</strong>
          </div>
          <div className="main-header__welcome-subtitle">¿Cómo estás hoy?</div>
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
);
export default MainC;
