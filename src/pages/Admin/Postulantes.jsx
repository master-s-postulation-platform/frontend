import React from 'react';
import { Link, useLocation, NavLink, useHistory, useParams } from 'react-router-dom';



const Postulantes = () => {
  const userId = 100;
  // const url = `/usuario/:${userId}`;
  const url = `usuario/:${userId}`;

  return (
    <div>
      
        
          <Link to={url}><h1>Postulantes administracion Postulantes administracion Postulantes administracion Postulantes administracion</h1></Link>
        

      
    </div>
  )
}

export default Postulantes


