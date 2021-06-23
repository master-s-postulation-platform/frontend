import React from 'react'

const Idioms = () => {
    return (
        <section className="section">
            <section className="section__background">
                <section className="section__content">
                    <section className="section__grid">
                        <h3 className="form__title">Idiomas:</h3>
                        <form className="form">
                            <label className="form__label" htmlFor="idioma">
                                <span>Idioma: (grado de dominio):</span>
                                <select name="idioma" className="form__select">
                                    <option >Selecciona:</option>
                                    <option value="A1" >Nivel de inglés A1</option>
                                    <option value="A2" >Nivel de inglés A1</option>
                                    <option value="B1" >Nivel de inglés B1</option>
                                    <option value="B2" >Nivel de inglés B2</option>
                                    <option value="C1" >Nivel de inglés C1</option>
                                    <option value="C2" >Nivel de inglés C2</option>
                                    
                                </select>
                            </label>
                            <div className="form__footer">
                                
                                <button className="primary__button">Guardar y continuar</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Idioms
