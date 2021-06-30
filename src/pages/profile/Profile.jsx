import React, { useEffect, useState } from 'react'
import { useAuthState } from '../../Context'

const Profile = () => {

    const [profileData, setProfileData] = useState([]);
    const [first_name, setName] = useState();
    const userDetails = useAuthState();
    
    const getUserProfile = () => {
        useEffect(()=> {
            fetch('https://api.hardmakers.com/api/v1/profile/page/1',{
                method: 'GET',
                headers: {'Authorization': `Token ${userDetails.token}`}
            })
            .then(response => response.json())
            .then( data => {
                console.log(data.profile.includes('first_name'))

                if (data.profile.includes('first_name') === false) {
                    setName("");
                }
            })
        },[])
    }

    getUserProfile()


    const submitForm = (e) => {
        e.preventDefault();
        console.log('submit click')
        let bodyData = {
            'firstName': first_name
        }

        console.log(bodyData);
        fetch('https://api.hardmakers.com/api/v1/profile/page/1',{
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {'Authorization': `Token ${userDetails.token}`}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
    


    return (
        <section className="section">
            <section className="section__background">
                <section className="section__content">
                    <section className="section__grid">

                    <h3 className="form__title">
                        Crear perfil
                    </h3>
                        
                    <form className="form">
                        <h4 className="form__subtitle">
                            Ingrese la siguiente información:
                        </h4>

                        <h5>Información personal:</h5>
                        <label className="form__label" htmlFor="lastname">
                            <span>Apellidos:</span>
                            <input className="form__input" type="text" placeholder="Apellidos" name="lastname" />
                        </label>
                        <label className="form__label" htmlFor="nombre">
                            <span>Nombre:</span>
                            <input className="form__input" type="text" placeholder="Nombre" name="first_name" value={first_name} onChange={ e => (setName(e.target.value))}/> 
                        </label>
                        <div className="form__column--2">
                            <label className="form__label" htmlFor="sexo">
                                    <span>Sexo:</span>
                                <select name="sexo" className="form__select">
                                    <option>Selecciona una opción</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="masculino">Masculino</option>
                                </select>
                            </label>

                            <label className="form__label" htmlFor="fecha_nacimiento">
                                <span>Fecha de nacimiento:</span>
                                <input className="form__date" type="date" name="fecha_nacimiento" /> 
                            </label>
                        </div>
                        <div className="form__column--2">
                            <label className="form__label" htmlFor="estado_civil">
                                <span>Estado civil:</span>
                                <select name="estado_civil" className="form__select">
                                    <option>Selecciona una opción</option>
                                    <option value="Soltero">Soltero</option>
                                    <option value="Casado">Casado</option>
                                    <option value="union-libre">Unión Libre</option>
                                </select>
                            </label>
                        </div>

                        <h5>Dirección:</h5>
                        <label className="form__label" htmlFor="pais_residencia">
                            <span>País de residencia</span>
                            <select name="pais_residencia" className="form__select">
                                <option disabled>Selecciona una opción</option>
                                <option value="femenino">Colombia</option>
                                <option value="masculino">México</option>
                            </select>
                        </label>
                        <label className="form__label" htmlFor="direccion">
                            <span>Dirección de residencia:</span>
                            <input className="form__input" type="text" placeholder="Direccion" name="direccion"/>
                        </label>

                        <h5>Contacto:</h5>
                        <div className="form__column--2">
                            <label className="form__label" htmlFor="telefono_fijo">
                                <span>Teléfono fijo:</span>
                                <input className="form__input" type="number" name="telefono_fijo" /> 
                            </label>
                            <label className="form__label" htmlFor="telefono_movil">
                                <span>Número movil:</span>
                                <input className="form__input" type="number" name="telefono_movil" /> 
                            </label>
                        </div>


                        <h5>Username:</h5>
                        <label className="form__label" htmlFor="username">
                            <span>Username:</span>
                            <input className="form__input" type="number" name="username" /> 
                        </label>

                        <div className="form__footer">
                            <button className="secondary__button" onClick={submitForm}>Guardar parcial</button>
                            <button className="primary__button">Guardar y continuar</button>
                        </div>
                        
                    </form>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Profile
