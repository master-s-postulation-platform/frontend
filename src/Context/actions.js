const API_URL = 'https://api.hardmakers.com/api/v1';


// Login User
export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginPayload)
    }
    try {
        dispatch({type: 'REQUEST_LOGIN'});
        let response = await fetch(`${API_URL}/token/login`,requestOptions);
        let data = await response.json();
        console.log(data);
        
        if (data.error === false) {
            
            let dataReconstruction;
            
            dataReconstruction = {
                "error": data.error,
                "message": data.message,
                "data": {
                    "signup": {
                        "signup": {"email": loginPayload.email},
                        "login": {
                            "auth_token": data.data.auth_token
                        },
                        "admin_auth": data.admin_auth
                    }
                }
                
            }
            
            dispatch({type: 'REQUEST_SUCCESS', payload: dataReconstruction});
            localStorage.setItem('currentUser', JSON.stringify(dataReconstruction.data.signup));
            return dataReconstruction;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.message })
        return data;

    } catch (error) {
        dispatch({type: 'LOGIN_ERROR', error: error})
    }
}

// Logout
export async function logout(dispatch){
    dispatch({type: 'LOGOUT'})
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
}

// First login after register new user

export async function loginRegister(dispatch, registerPayload) {
    
    dispatch({type: 'REQUEST_LOGIN'});
    dispatch({type: 'REGISTER_LOGIN', payload: registerPayload});
    localStorage.setItem('currentUser', JSON.stringify(registerPayload.data));
}

// const login = {
//     "error":false,
//     "message":null,
//     "data":{
//         "auth_token":"511b9cd53752ca8815fa972314d880b3bdd1e232"
//     }
// }

// const register = {
//     "error":false,
//     "message":null,
//     "data":{
//         "signup":
//         {
//             "email":"prueba021@gmail.com"},
//             "login": {
//                 "auth_token":"511b9cd53752ca8815fa972314d880b3bdd1e232"
//             }
//         }
//     }
