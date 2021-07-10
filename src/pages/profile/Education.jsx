import React, { useState, useEffect } from 'react';
import { useAuthState } from '../../Context/index.js';

const Education = () => {
    const userDetails = useAuthState();
    const [education, setEducation] = useState([]);
    const [institution_name, setInstitution] = useState('');
    const [year_end, setYear] = useState('');
    const [last_grade_id, setGrade] = useState('');
    const [gotten_grade_id, setGotten] = useState('');

    const submitEducation = (e) => {
        e.preventDefault();

        let bodyRequest = {
            "institution_name": institution_name,
            "year_end": year_end,
            "last_grade_id": last_grade_id,
            "gotten_grade_id": gotten_grade_id
        }

        console.log(bodyRequest);

        fetch('https://api.hardmakers.com/api/v1/profile/education/', {
            method: 'POST',
            body: JSON.stringify(bodyRequest),
            headers: {
                'Authorization': `Token ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setInstitution('');
                setYear('');
                setGrade('');
                setGotten('');
            })
    }

    useEffect(() => {
        fetch('https://api.hardmakers.com/api/v1/profile/education/', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEducation(data.data)
            })

    }, [])

    console.group('Prueba')
    console.log(education.forEach((item) => {
        item
    }))

    console.log(education.map(item => item.gotten_grade.name))
    console.groupEnd()

    /* const result = async () => {

        const respuesta = await fetch('https://api.hardmakers.com/api/v1/profile/education/',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setEducation(data.data)
            return data.data;
        })
    }


    console.log(result()) */


    /* const getEducation = () => {
        fetch('https://api.hardmakers.com/api/v1/profile/education/',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setEducation(data.data)
        })
    }
     */




    /* {
        "institution_name":"colegio agustin",
        "year_end":"2010-06-17",
        "last_grade_id":"1",
        "gotten_grade_id":1
    } */

    const handleInstitution = (e) => {
        setInstitution(
            e.target.value
        )
    }

    return (
        <section className="section">
            <section className="section__background">
                <section className="section__content">
                    <section className="section__grid">
                        <h3 className="form__title">Educación:</h3>
                        <form className="form">
                            <div className="form__column--2">
                                <label className="form__label" htmlFor="ultimo_grado">
                                    <span>Nivel de estudios:</span>
                                    <select name="ultimo_grado" className="form__select" onChange={e => (setGotten(e.target.value))} value={gotten_grade_id} >
                                        {/* <option >Selecciona:</option> */}
                                        <option value={1} >Licenciatuara/pregrado terminado</option>
                                        <option value={2} >Licenciatuara/pregrado sin terminado</option>
                                        <option value={3} >Bachillerato terminado</option>
                                        <option value={4} >Bachillerato sin terminar</option>
                                        <option value={5} >Tecnico sin terminar</option>
                                        <option value={6} >Tecnico terminado</option>
                                        <option value={7} >Maestria terminada</option>
                                        <option value={8} >Maestria sin terminar</option>
                                    </select>
                                </label>
                                <label className="form__label" htmlFor="anio_finalizacion">
                                    <span>Año de finalización:</span>
                                    <input className="form__date" type="date" name="anio_finalizacion"
                                        value={year_end} onChange={(e) => (setYear(e.target.value))} />
                                </label>
                            </div>
                            <label className="form__label" htmlFor="institution_name">
                                <span>institución:</span>
                                <input className="form__input" type="text"
                                    placeholder="Institución Educativa" name="institution_name" value={institution_name} onChange={handleInstitution} />
                            </label>
                            <label className="form__label" htmlFor="grado">
                                <span>Grado obtenido:</span>
                                <select name="grado" className="form__select" value={last_grade_id} onChange={e => (setGrade(e.target.value))} >
                                    {/*  <option value={1} >Selecciona:</option> */}
                                    <option value={1} >Licenciatuara/pregrado</option>
                                    <option value={2} >Maestria</option>
                                    <option value={3} >Bachillerato</option>
                                    <option value={4} >Tecnico</option>
                                </select>
                            </label>
                            <div className="form__footer">
                                <button className="secondary__button" onClick={submitEducation}>Guardar y agregar más</button>
                                <button className="primary__button">Guardar y continuar</button>
                            </div>
                        </form>
                        <h3 className="form__title">Mi Experiencia profesional</h3>
                        <section className="form">
                            <table>
                             <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Institución</th>
                                    <th>Ultimo Grado</th>
                                    <th>Fecha Final</th>
                                </tr>
                             </thead>
                            <tbody>
                                {education.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.gotten_grade.name}</td>
                                        <td>{item.institution_name}</td>
                                        <td>{item.last_grade.name}</td>
                                        <td>{item.year_end}</td>
                                    </tr>
                                ))}
                             </tbody>
                            </table>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}


export default Education
