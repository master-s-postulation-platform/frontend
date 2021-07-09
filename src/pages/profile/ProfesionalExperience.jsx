import React from 'react';

const ProfesionalExperience = () => {
    return (
        <section className="section">
            <section className="section__background">
                <section className="section__content">
                    <section className="section__grid">
                        <h3 className="form__title">Experiencia profesional</h3>
                        <form className="form">
                            <h5>Experiencia profesional:</h5>
                            <label className="form__label" htmlFor="empresa">
                                <span>Empresa:</span>
                                <input className="form__input" type="text" placeholder="Empresa" name="company" value={company} onChange={e => (setCompany(e.target.value))} />
                            </label>
                            <label className="form__label" htmlFor="puesto">
                                <span>Puesto:</span>
                                <input className="form__input" type="text" placeholder="puesto" name="puesto" />
                            </label>
                            <label className="form__label" htmlFor="puesto_descripción">
                                <span>Descripción:</span>
                                <textarea className="form__input" type="text" placeholder="puesto_descripción" name="puesto_descripción" />
                            </label>
                            <label className="form__label" htmlFor="puesto_ubicacion">
                                <span>Ubicación:</span>
                                <input className="form__input" type="text" placeholder="puesto_ubicacion" name="puesto_ubicacion" />
                            </label>
                            <div className="form__column--2">
                                <label className="form__label" htmlFor="puesto_inicio">
                                    <span>Fecha de inicio:</span>
                                    <input className="form__date" type="date" name="puesto_inicio" />
                                </label>
                                <label className="form__label" htmlFor="puesto_final">
                                    <span>Fecha de inicio:</span>
                                    <input className="form__date" type="date" name="puesto_final" />
                                </label>
                            </div>
                            <div className="form__footer">
                                <button className="secondary__button">Agregar</button>
                                <button className="primary__button">Guardar y continuar</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ProfesionalExperience
