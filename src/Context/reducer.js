let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : "";
let token = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).auth_token : "";

export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null
}

export const AuthReducer = (initialState, action) => {
    
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true
            }
            break;

        case 'REQUEST_SUCCESS':
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.auth_token,
                loading: false
            }
            break;
        case 'LOGOUT':
            return {
                ...initialState,
                user: "",
                token: ""
            }
            break;
        case 'LOGIN_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
            break;
    }

}