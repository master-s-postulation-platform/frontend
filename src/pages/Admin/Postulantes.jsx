import React, { useState, useEffect } from 'react';
import { useAuthState } from '../../Context';

const Postulantes = () => {
  const userDetails = useAuthState();

  console.log(userDetails.userDetails.admin_auth)
  console.log(userDetails)

  const [postulantes, setPostulantes] = useState([]);

  useEffect(() => {
    fetch('https://api.hardmakers.com/api/v1/administration/candidates/', {
        method: 'GET',
        headers: {
            'Authorization': `Token ${userDetails.token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPostulantes(data.data)
        })

  }, [])
  console.group('Valor estado postulantes');
    console.log(postulantes)
  console.groupEnd()

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
                <h1>Usuarios registrados: 305</h1>
              </div>
              <table className="section__tablePostu">
                <thead className="section__thead">
                    <tr>
                        <th>Usuarios / Postulantes</th>
                        <th>Review status</th>
                        <th>Estado proceso</th>
                        <th>Puntaje total</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carlos Diaz</td>
                    <td>Calificado</td>
                    <td>Aceptado</td>
                    <td>300</td>
                  </tr>
                </tbody>
              </table>

              <h1>Postulantes administracion Postulantes administracion Postulantes administracion Postulantes administracion</h1>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Postulantes


