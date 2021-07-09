import React, {useState, useEffect} from 'react'
import { useAuthState } from '../../Context/index.js'

const ProfesionalExperience = () => {
    const userDetails = useAuthState();
    const [experience, setExperience] = useState([])
    const [company_name, setCompany] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [description, setDescription] = useState("")

    // useEffect(() => {
        
    // }, [])
    
    const submitForm = (e) => {
        e.preventDefault();
        
        let bodyRequest = {
            "company_name": company_name,
            "start": start,
            "end": end,
            "description": description
        }

        console.log(bodyRequest);
        
        fetch('https://api.hardmakers.com/api/v1/profile/experience/',{
            method: 'POST',
            body: JSON.stringify(bodyRequest),
            headers: {
                'Authorization': `Token ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCompany("")
            setStart("")
            setEnd("")
            setDescription("")
            getExperiende()
        })
    }   

    const getExperiende = () => {
        fetch('https://api.hardmakers.com/api/v1/profile/experience/',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setExperience(data.data)
        })
    }
    
    getExperiende()

    return (
        <>
        
            <section className="section">
                <section className="section__background">
                    <section className="section__content">
                        <section className="section__grid">
                        
                            <h3 className="form__title">Agregar Experiencia profesional</h3>
                            <form className="form">
                                <h5>Experiencia profesional:</h5>
                                <label className="form__label" htmlFor="empresa">
                                    <span>Empresa:</span>
                                    <input className="form__input" type="text" placeholder="Empresa" name="company_name" value={company_name} onChange={ e => setCompany(e.target.value)}/>
                                </label>
                                {/* <label className="form__label" htmlFor="puesto">
                                    <span>Puesto:</span>
                                    <input className="form__input" type="text" placeholder="puesto" name="puesto"/>
                                </label> */}
                                <label className="form__label" htmlFor="description">
                                    <span>Puesto:</span>
                                    <input className="form__input" type="text" placeholder="puesto_descripción" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </label>
                                {/* <label className="form__label" htmlFor="puesto_ubicacion">
                                    <span>Ubicación:</span>
                                    <input className="form__input" type="text" placeholder="puesto_ubicacion" name="puesto_ubicacion"/>
                                </label> */}
                                <div className="form__column--2">
                                    <label className="form__label" htmlFor="start">
                                        <span>Fecha de inicio:</span>
                                        <input className="form__date" type="date" name="start" value={start} onChange={e => setStart(e.target.value)}/> 
                                    </label>
                                    <label className="form__label" htmlFor="end">
                                        <span>Fecha de inicio:</span>
                                        <input className="form__date" type="date" name="end" value={end}  onChange={ e => setEnd(e.target.value)}/> 
                                    </label>
                                </div>
                                <div className="form__footer">
                                    <button className="secondary__button" onClick={submitForm}>Agregar otro</button>
                                    <button className="primary__button" onClick={submitForm}>Guardar y continuar</button>
                                </div>
                            </form>
                        </section>
                    </section>
                </section>
            </section>
            <section className="section">

            <section className="section__background">
            </section>
                <section className="section__content">
                    <section className="section__grid">
                        <h3 className="form__title">Mi Experiencia profesional</h3>
                        <section className="form">
                                <table>
                                    <tr>
                                        <th>Compañia</th>
                                        <th>Puesto</th>
                                        <th>Inicio</th>
                                        <th>Fin</th>
                                    </tr>
                                    
                                    {experience.map((job)=>(
                                    <tr key={job.id}>
                                        
                                        <td>{job.company_name}</td>
                                        <td>{job.description}</td>
                                        <td>{job.start}</td>
                                        <td>{job.end}</td>
                                    </tr>
                                ))}
                                    
                                </table>
                        
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default ProfesionalExperience
