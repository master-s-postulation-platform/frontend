import React from 'react'
import { useLocation } from 'react-router-dom';

import Footer from './footer/footer';
import FooterDashboard from './pruebaDashboard/footerDashboard/FooterDashboard';


const RouterFooter = () => {
  const dondeEstoy = useLocation();
  console.log(dondeEstoy);
  if (dondeEstoy.pathname.includes("/dashboard")) {
    return <FooterDashboard/>
  } else {
    return <Footer />
  }
}

export default RouterFooter;
