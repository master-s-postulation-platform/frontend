import React from 'react'
import { useLocation } from 'react-router-dom';

import Footer from './footer/footer';
import FooterDashboard from './footer/FooterDashboard';

const RouterFooter = () => {
  
  console.log(location);
  if (location.pathname.includes("/dashboard")) {
    return <FooterDashboard/>
  } else {
    return <Footer />
  }
}

export default RouterFooter;
