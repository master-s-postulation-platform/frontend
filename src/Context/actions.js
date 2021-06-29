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
        let response = await fetch(`${API_URL}/token/login/`,requestOptions);
        let data = await response.json();

        if (data.auth_token) {
            dispatch({type: 'REQUEST_SUCCESS', payload: data});
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] })
        return

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