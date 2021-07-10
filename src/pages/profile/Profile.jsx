import React, { useEffect, useState, useRef } from 'react'
import { useAuthState } from '../../Context/index.js'

const Profile = () => {

    const userDetails = useAuthState();
    
    const [first_name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("")
    const [gender, setGender] = useState(2)
    const [birthday, setBirthday] = useState("")
    const [country, setCountry] = useState("")
    const [c_status, setCivil] = useState("")
    const [address_line1, setAddress] = useState("")
    const [home_phone, setHomePhone] = useState("")
    const [mobile_phone, setMobilePhone] = useState("")

    /* ref */
    
    useEffect(()=> {
        fetch('https://api.hardmakers.com/api/v1/profile/information/',{
            method: 'GET',
            headers: {'Authorization': `Token ${userDetails.token}`}
        })
        .then(response => response.json())
        .then( data => {
            
            console.log(data)

            if (!data.data.profile[0].user) {
                
            } else {

                const {first_name, last_name, username } = data.data.profile[0].user;
    
                setName(first_name)
                setLastName(last_name)
                setUsername(username)
                setGender(data.data.profile[0].gender)
                setBirthday(data.data.profile[0].birthday)
                setCountry(data.data.profile[0].Address.country.id)
                setCivil(data.data.profile[0].civil_status.id)
                setAddress(data.data.profile[0].Address.address_line1)
                setHomePhone(data.data.profile[0].home_phone)
                setMobilePhone(data.data.profile[0].mobile_phone)
            }


        })

    },[])

    const submitForm = (e) => {
        e.preventDefault();
        
        let bodyRequest = {
            'first_name': first_name,
            "username": username,
            "last_name": last_name,
            "birthday": birthday,
            "c_status": c_status,
            "country": country,
            "city":"1",
            "address_line1":address_line1,
            "home_phone":home_phone,
            "mobile_phone":mobile_phone,
            "gender": gender
        }

        fetch('https://api.hardmakers.com/api/v1/profile/information/',{
            method: 'PUT',
            body: JSON.stringify(bodyRequest),
            headers: {
                'Authorization': `Token ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
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
                            <input className="form__input" type="text" placeholder="Apellidos" name="last_name" value={last_name} onChange={e => (setLastName(e.target.value))}/>
                        </label>
                        <label className="form__label" htmlFor="nombre">
                            <span>Nombre:</span>
                            <input className="form__input" type="text" placeholder="Nombre" name="first_name" value={first_name} onChange={ e => (setName(e.target.value))}/> 
                        </label>
                        <div className="form__column--2">
                            <label className="form__label" htmlFor="gender">
                                    <span>Sexo:</span>
                                <select name="gender" className="form__select" value={gender} onChange={ e => (setGender(e.target.value))}>
                                    {/* <option>Selecciona una opción</option> */}
                                    <option value={1}>Masculino</option>
                                    <option value={2}>Femenino</option>
                                </select>
                            </label>

                            <label className="form__label" htmlFor="birthday">
                                <span>Fecha de nacimiento:</span>
                                <input className="form__date" type="date" name="birthday" pattern="\y{4}-\m{2}-\d{2}" onChange={(e)=> {setBirthday(e.target.value)}} value={birthday}/> 
                            </label>
                        </div>
                        <div className="form__column--2">
                            <label className="form__label" htmlFor="c_status">
                                <span>Estado civil:</span>
                                <select name="c_status" className="form__select" value={c_status} onChange={e => (setCivil(e.target.value))}>
                                    {/* <option disabled>Selecciona una opción</option> */}
                                    <option value={1}>Casado</option>
                                    <option value={2}>Soltero</option>
                                    <option value={3}>Divorciado</option>
                                    <option value={4}>Concubinato</option>
                                    
                                    
                                </select>
                            </label>
                        </div>

                        <h5>Dirección:</h5>
                        <label className="form__label" htmlFor="countries">
                            <span>País de residencia</span>
                            <select name="countries" className="form__select" onChange={ e => (setCountry(e.target.value))} value={country} >
                                {/* <option disabled>Selecciona una opción</option> */}
                                <option value={1}>México</option>
                                <option value={2}>Colombia</option>
                                <option value={3}>Chile</option>
                            </select>
                        </label>
                        <label className="form__label" htmlFor="address_line1">
                            <span>Dirección de residencia:</span>
                            <input className="form__input" type="text" placeholder="Direccion" name="address_line1" value={address_line1} onChange={ e => (setAddress(e.target.value))} />
                        </label>

                        <h5>Contacto:</h5>
                        <div className="form__column--2">
                            <label className="form__label" htmlFor="mobile_phone">
                                <span>Teléfono fijo:</span>
                                <input className="form__input" type="number" name="mobile_phone" value={mobile_phone} onChange={e => (setMobilePhone(e.target.value))}/> 
                            </label>
                            <label className="form__label" htmlFor="home_phone">
                                <span>Número movil:</span>
                                <input className="form__input" type="number" name="home_phone" value={home_phone} onChange={e => (setHomePhone(e.target.value))}/> 
                            </label>
                        </div>


                        <h5>Username:</h5>
                        <label className="form__label" htmlFor="username">
                            <span>Username:</span>
                            <input className="form__input" type="text" name="username" value={username} onChange={e => (setUsername(e.target.value))} /> 
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
