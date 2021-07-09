import React, { useState, useEffect } from 'react'
import { useAuthState } from '../../Context/index.js'

const Jobs = () => {

  const [has_job, setJob] = useState(null);
  const [company_name, setCompanyName] = useState('');
  const [salary, setSalary] = useState('');
  const [change_opt, setChangeOpt] = useState(null);
  const userDetails = useAuthState();

  
  useEffect(()=> {
    console.group('Incio UseEffect')
      fetch('https://api.hardmakers.com/api/v1/profile/job_status/',{
          method: 'GET',
          headers: {'Authorization': `Token ${userDetails.token}`}
      })
      .then(response => response.json())
      .then( data => {
          console.log('Test jobs')
          console.log(data)

          setJob(data.data.job_status.has_job)
          setCompanyName(data.data.job_status.company_name)
          setSalary(data.data.job_status.salary)
          setChangeOpt(data.data.job_status.change_opt)

      })
    },[])

  console.groupEnd()

  const submitForm = (e) => {
    console.group('Incio submitForm')
      e.preventDefault();
      
      let bodyRequest = {
          "has_job" : has_job,
          "company_name": company_name,
          "salary": salary,
          "change_opt": change_opt
      }
      console.log('ingreso datos')
      console.log(bodyRequest);

      fetch('https://api.hardmakers.com/api/v1/profile/job_status/',{
          method: 'PUT',
          body: JSON.stringify(bodyRequest),
          headers: {
              'Authorization': `Token ${userDetails.token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          console.log('Resultado')
          console.log(data)
      })
    }
    console.groupEnd('Final submitform');

  
    const onChangeHandler = (e) => {
      setJob(
          e.target.value
      )
    }

    const onHandleCheckbox = (e) => {
      setChangeOpt(
        e.target.checked)
        console.log('prueba')
        console.log(change_opt)
    }




  return (
    <section className="section">
      <section className="section__content">
        <section className="section__grid">
          <h3 className="form__title">Situación laboral</h3>

          <form className="form">

          <label className="form__label" htmlFor="situacion_laboral">
                    <span>Situación Laboral*</span>
                    <select name="situacion_laboral" className="form__select" onChange={onChangeHandler} value={setJob} >
                      <option selected="selected">¿Se encuentra trabajando actualmente?</option>
                      <option value={true}>Si</option>
                      <option value={false}>No</option>
                    </select>
                  </label>
                  <label className="form__label" htmlFor="Empresa">
                    <span>Empresa*</span>
                    <input className="form__input" type="text" name="empresa" value={company_name} onChange={e => (setCompanyName(e.target.value))}/>
                  </label>
 

            <div className="form__column--2">



              <label className="form__label" htmlFor="Salario">
                <span>Salariio mensual</span>
                <small>(antes de impuestos en dólares)</small>
                <input className="form__input" type="number" name="empresa" placeholder="$00.oo" value={salary} onChange={e => (setSalary(e.target.value))}/>
              </label>
              <label className="form__label" htmlFor="cambiar_trabajo">
                <span>¿Desea Cambiar de trabajo?</span>
                  <div className="form__label-switch">
                    <p>No</p>
                    <input className="form__checKbox" type="checkbox" id="switch" name="cambiar_trabajo" value={setChangeOpt} onChange={onHandleCheckbox}/>
                    <label htmlFor="switch" className="lbl"></label>
                    <p>Si</p>
                  </div>
              </label>

            </div>
            <div className="form__footer">
              {/* <button className="secondary__button">Guardar parcial</button> */}
              <button className="primary__button" onClick={submitForm}>Guardar y continuar</button>
            </div>
            </form>
        </section>
        </section>
      </section>
      )
}


export default Jobs;

