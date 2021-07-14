let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).login.auth_token : "";
let admin = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).admin_auth : "";

  /* .signup.login.auth_token
 */
export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  admin: "" || admin,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
      break;

    case "REQUEST_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload.user,
        token: action.payload.data.auth_token,
        admin: action.payload.admin_auth,
        loading: false,
      };
      break;

    case "REGISTER_LOGIN":
      return {
        ...initialState,
        userDetails: action.payload.data,
        token: action.payload.data.login.auth_token,
        admin: action.payload.admin_auth,
        loading: false,
      };
      break;

    case "LOGOUT":
      return {
        ...initialState,
        userDetails: "",
        token: "",
      };
      break;

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
      break;
  }
};
