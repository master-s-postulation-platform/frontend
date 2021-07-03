import React from 'react'
import { useLocation } from 'react-router-dom';

import Header from './header/Header';
import HeaderDashboard from './pruebaDashboard/headerDashboard/HeaderDashboard';
import NavUser from './pruebaDashboard/menuleft/NavUser';

const RouterHeader = () => {
  const dondeEstoy = useLocation();
  console.log(dondeEstoy);
  if (dondeEstoy.pathname.includes("/dashboard")) {
    return (
      <>
        <HeaderDashboard/>
        <NavUser />
      </>
    )

  } else {
    return <Header/>
  }
}

export default RouterHeader
