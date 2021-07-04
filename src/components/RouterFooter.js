import React from 'react'
import { useLocation } from 'react-router-dom';

import Footer from './footer/footer';
import FooterDashboard from './footer/FooterDashboard';

const RouterFooter = () => {
  const location = useLocation();
  console.log(location);
  if (location.pathname.includes("/dashboard")) {
    return <FooterDashboard/>
  } else {
    return <Footer />
  }
}

export default RouterFooter;
