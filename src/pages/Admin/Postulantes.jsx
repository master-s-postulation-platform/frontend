import React, { useState, useEffect } from 'react';
import { useAuthState } from '../../Context';
import {Link} from 'react-router-dom';


const Postulantes = () => {
  const userDetails = useAuthState();

  
  
  const [postulantes, setPostulantes] = useState([]);
  const [count, setCount] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);

  
  
  
  useEffect(() => {
    fetch('https://api.hardmakers.com/api/v1/administration/candidates/?page=1&ippage=18', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${userDetails.token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setPostulantes(data.data.data)
      setCount(data.data)
    })
  }, [])


 
  
  const pages = [];
  for (let i = 0; i <= Math.ceil(count.length / itemsPerPage); i++) {
    pages.push(i);
  }
  
  return (
    <section className="section">
      <section className="section__background">
        <div className="section__content">
          <div className="section__grid">
              <div className="section__report">
                <div className="section__reportLogo">
                </div>
                <h1 className="section__reporTitle">Reportes</h1>
              </div>
              <div className="section__numberPostulantes">
                <h1>Usuarios registrados:  {count.count}</h1>
              </div>
              <table className="section__tablePostu">
                <thead className="section__thead">
                    <tr>
                        <th>Usuarios / Postulantes</th>
                        <th>Review status</th>
                        <th>Estado proceso</th>
                        <th>Puntaje total</th>
                        <th>Ver Perfil</th>
                    </tr>
                </thead>
                <tbody>
                {
                  postulantes.map((postulante) => (
                    <tr key={postulante.id}>
                      <td>{postulante.user.username}</td>
                      <td>{postulante.is_reviewed === false ? "No Revisado" : "Revisado" }</td>
                      <td>{postulante.process_status === false ? "No Aceptado" : "Aceptado" }</td>
                      <td>{postulante.total_score}</td>
                      <td><Link to={`dashboard/usuario/${postulante.user.id}`} className="link__postulante">{postulante.user.id}</Link></td>
                    </tr>
                  )
                )}
                </tbody>
              </table>
              <br/>
              <div>
                <button>Prev</button>
                <button>1</button>
                <button>2</button>
                <button>next</button>
              </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Postulantes


