import React from 'react'

const Jobs = () => {
  return (
    <section className="section">
      <section className="section__content">
        <section className="section__grid">
          <h3 className="form__title">Situación laboral</h3>

          <form className="form">

            <div className="form__column--2">
              <label className="form__label" htmlFor="situacion_laboral">
                <span>Situación Laboral:</span>
                <select name="situacion_laboral" className="form__select">
                  <option>¿Se encuentra trabajando actualmente?</option>
                  <option value="empleao_tiempo_completo">Empleada/o trabajando de tiempo completo</option>
                  <option value="empleo_tiempo_parcial">Empleada/o trabajando tiempo parcial</option>
                  <option value="desempleado_buscando_trabajo">Desempleada trabajando tiepo parcial</option>
                  <option value="desempleado_no_buscando_trabajo">Desempleada sin buscar trabajo</option>
                  <option value="jubilado">Jubilado</option>
                </select>
              </label>
              <label className="form__label" htmlFor="cambiar_trabajo">
                <span>¿Desea Cambiar de trabajo?</span>
                <input className="form__input" type="checkbox" name="cambiar_trabajo" />
              </label>
            </div>
            <div className="form__footer">
              {/* <button className="secondary__button">Guardar parcial</button> */}
              <button className="primary__button">Guardar y continuar</button>
            </div>
            </form>
        </section>
        </section>
      </section>
      )
}


export default Jobs;
