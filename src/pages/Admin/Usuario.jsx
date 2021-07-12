import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { useAuthState } from '../../Context';

const Usuario = () => {

  const userDetails = useAuthState();
  const { idUser } = useParams();
  console.log(idUser)
  
  useEffect(()=>{
    fetch(`https://api.hardmakers.com/api/v1/administration/candidates/${idUser}`,{ 
      method: 'GET',
      headers: {
          'Authorization': `Token ${userDetails.token}`,
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  },[])

  return ( 
    <div>
      <section>
        <section className="section">
          <section className="section__background">
            <section className="section__content">
              <section className="section__grid">
                <h3 className="form__title">Usuario {idUser}</h3>   
                <div className="user">

                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
    )
}

export default Usuario

// {
//   "error": false,
//   "message": null,
//   "data": {
//     "id": 1,
//     "user": {
//       "email": "testuser@mail.com",
//       "username": "wilantury",
//       "first_name": "wilson Antury",
//       "last_name": "antury torres",
//       "id": 1
//     },
//     "birthday": "2004-06-25",
//     "total_score": 0,
//     "home_phone": "32434324",
//     "work_phone": null,
//     "mobile_phone": "3156763872837",
//     "is_reviewed": false,
//     "created": "2021-06-30T18:01:32.738495-05:00",
//     "updated": "2021-06-30T18:35:09.297911-05:00",
//     "score": {
//       "id": 1,
//       "job_status_score": 0,
//       "language_score": 0,
//       "prof_exp_score": 0,
//       "education_score": 0
//     },
//     "gender": {
//       "id": 1,
//       "gender": "Masculino"
//     },
//     "civil_status": {
//       "id": 1,
//       "c_status": "soltero"
//     },
//     "Address": {
//       "id": 1,
//       "address_line1": "Carrera 100 # 30-23 local 1 oficina 2 apto 43",
//       "address_line2": null,
//       "postal_code": null,
//       "city": {
//         "id": 1,
//         "city_name": "Ciudad de Mexico",
//         "country": 1
//       },
//       "country": {
//         "id": 1,
//         "country_name": "Mexico"
//       }
//     },
//     "process_status": null,
//     "job_status": {
//       "id": 1,
//       "has_job": true,
//       "company_name": "Antury E",
//       "salary": 2500000,
//       "change_opt": true,
//       "created": "2021-06-30T18:35:09.275153-05:00",
//       "updated": "2021-06-30T18:35:37.068947-05:00"
//     }
//   }
// }