import Landing from "../components/landing/Landing";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Profile from "../pages/profile/Profile";
import ProfesionalExperience from "../pages/profile/ProfesionalExperience";
import Education from "../pages/profile/Education";
import Idioms from "../pages/profile/Idioms";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Dashboard from "../pages/DashboardAdmin/Dashboard";
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
    path: "/dashboard",
    component: Dashboard,
    isPrivate: false,
  },
  {
    path: "/*",
    component: PageNotFound,
    isPrivate: true,
  },
];

export default routes;
