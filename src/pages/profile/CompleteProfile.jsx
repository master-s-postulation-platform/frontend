import React from 'react'

const CompleteProfile = () => {
    return (
        <section className="section">
            <section className="section__background">
                <section className="section__content">
                    <section className="section__grid">

                    <h3 className="form__title">
                        Completa tu perfil
                    </h3>
                        
                    <form className="form">
                        <h4 className="form__subtitle">
                            Para crear su perfil, debe completar los siguientes datos:
                        </h4>

                        <label className="form__label" htmlFor="empresa">
                            <span>Empresa:</span>
                            <input className="form__input" type="text" placeholder="Empresa" name="empresa"/>
                        </label>
                        <label className="form__label" htmlFor="empresa">
                            <span>Empresa:</span>
                            <input className="form__input" type="text" placeholder="Empresa" name="empresa"/>
                        </label>
                        <label className="form__label" htmlFor="empresa">
                            <span>Empresa:</span>
                            <input className="form__input" type="text" placeholder="Empresa" name="empresa"/>
                        </label>
                        <label className="form__label" htmlFor="empresa">
                            <span>Empresa:</span>
                            <input className="form__input" type="text" placeholder="Empresa" name="empresa"/>
                        </label>
                    
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

export default CompleteProfile
