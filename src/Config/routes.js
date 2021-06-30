// import Login from '../Pages/Login/index.jsx'
// import Dashboard from '../Pages/Dashboard/Dashboard.jsx'
// import PageNotFound from '../Pages/PageNotFound/PageNotFound.jsx'

import Landing from "../components/landing/Landing";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Profile from "../pages/profile/Profile";
import ProfesionalExperience from "../pages/profile/ProfesionalExperience";
import Education from "../pages/profile/Education";
import Idioms from "../pages/profile/Idioms";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import VistaAdmin from "../pages/VistaAdmin/VistaAdmin";

const routes = [
  {
    path: "/",
    component: Landing,
    isPrivate: false,
  },
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/register",
    component: Register,
    isPrivate: false,
  },
  {
    path: "/profile",
    component: Profile,
    isPrivate: true,
  },
  {
    path: "/profesional",
    component: ProfesionalExperience,
    isPrivate: true,
  },
  {
    path: "/education",
    component: Education,
    isPrivate: true,
  },
  {
    path: "/idioms",
    component: Idioms,
    isPrivate: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: "/vistaadmin",
    component: VistaAdmin,
    isPrivate: true,
  },
  {
    path: "/*",
    component: PageNotFound,
    isPrivate: true,
  },
];

export default routes;
