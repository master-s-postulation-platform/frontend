import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'

const Profile = () => {
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
                        <label className="form__label" htmlFor="apellidos">
                            <span>Apellidos:</span>
                            <input className="form__input" type="text" placeholder="Apellidos" name="apellidos"/>
                        </label>
                        <label className="form__label" htmlFor="nombre">
                            <span>Nombre:</span>
                            <input className="form__input" type="text" placeholder="Nombre" name="nombre"/> 
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
                            <label className="form__label" htmlFor="pais_residencia">
                                <span>País de residencia</span>
                                <select name="pais_residencia" className="form__select">
                                    <option disabled>Selecciona una opción</option>
                                    <option value="femenino">Colombia</option>
                                    <option value="masculino">México</option>
                                </select>
                            </label>

                        </div>
                        <div className="form__footer">
                            <button className="secondary__button">Guardar parcial</button>
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
