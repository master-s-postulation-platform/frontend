import React from 'react'

const Education = () => {
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
                                    <select name="ultimo_grado" className="form__select">
                                        <option >Selecciona:</option>
                                        <option value="bachillerato_terminado" >Bachillerato terminado</option>
                                        <option value="bachillerato_trunco" >Bachillerato sin terminar</option>
                                        <option value="carrera_terminada" >Carrera terminada</option>
                                        <option value="carrera_trunco" >Carrera sin terminar</option>
                                    </select>
                                </label>
                                <label className="form__label" htmlFor="anio_finalizacion">
                                    <span>Año de finalización:</span>
                                    <input className="form__date" type="date" name="anio_finalizacion" /> 
                                </label>
                            </div>
                            <label className="form__label" htmlFor="institución">
                                <span>institución:</span>
                                <select name="ultimo_grado" className="form__select">
                                    <option >Selecciona:</option>
                                    
                                </select>
                            </label>
                            <label className="form__label" htmlFor="grado">
                                <span>Grado obtenido:</span>
                                <select name="grado" className="form__select">
                                    <option >Selecciona:</option>
                                    
                                </select>
                            </label>
                            <div className="form__footer">
                                <button className="secondary__button">Guardar y agregar más</button>
                                <button className="primary__button">Guardar y continuar</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Education
