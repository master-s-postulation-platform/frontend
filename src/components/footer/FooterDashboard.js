import React from 'react'
import './footerDashboard.scss';
import foo from '../../pages/Dashboard/images/logo-footer.svg';


const FooterDashboard = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__right">
          <p className="footer__copyright">
            © 2021
          </p>
          <p className="footer__signature">
            Talent Jobs
          </p>
        </div>
        <img src={foo} alt="" />
      </div>
    </>
  )
}

export default FooterDashboard;
