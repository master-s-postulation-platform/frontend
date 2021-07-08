import React from 'react'
import { useLocation } from 'react-router-dom';

import Header from './header/Header';
import HeaderDashboard from './header/HeaderDashboard';
import NavUser from './pruebaDashboard/menuleft/NavUser';

const RouterHeader = () => {
  const location = useLocation();
  console.log(location);
  if (location.pathname.includes("/dashboard")) {
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
