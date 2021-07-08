import React from "react";
/* Traigo mi componente de header, aquí empezare a anadir los elementos */
/* import Header from "./Header"; */
/* Ya creado el App.scss le hago referencia importandolo directo */
/* import Footer from "./Footer"; */
import NavMenu from "./NavMenu";
import MainC from "./MainC";

/* import "../pages/DashboardAdmin/dashboard.scss"; */

const Dashboard = () => (
  <div className="App">
    {/* <Header /> */}
    <NavMenu />
    {/* <Footer /> */}
  </div>
);

export default Dashboard;
