import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import AppRoutes from "../components/AppRoutes";
import { AuthProvider, useAuthState } from "../Context";

import RouterHeader from "./RouterHeader";
import RouterFooter from "./RouterFooter";

import Landing from "../components/landing/Landing";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Profile from "../pages/profile/Profile";
import ProfesionalExperience from "../pages/profile/ProfesionalExperience";
import Education from "../pages/profile/Education";
import Idioms from "../pages/profile/Idioms";
import Jobs from "../pages/profile/Jobs";
import Postulantes from "../pages/Admin/Postulantes";
import Usuario from "../pages/Admin/Usuario";

function App() {
  return (
    <AuthProvider>
      <Router>
        <RouterHeader />
          <Switch>
            <AppRoutes exact path="/" component={Landing} isPrivate={false} />
            <AppRoutes exact path="/login" component={Login} isPrivate={false} />
            <AppRoutes
              exact
              path="/register"
              component={Register}
              isPrivate={false}
            />

            <AppRoutes path="/dashboard" component={RouterDashboard} isPrivate={true} />
            <AppRoutes
              exact
              path="/*"
              component={PageNotFound}
              isPrivate={false}
            />
          </Switch>
        <RouterFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;

function RouterDashboard() {
  const useDetails = useAuthState();

  let useAdmin = useDetails.admin;

  return (
    <Switch>
      <AppRoutes exact path='/dashboard' component={useAdmin === true ? Postulantes : Profile} isPrivate={false} />
      <AppRoutes exact path='/dashboard/jobs' component={Jobs} isPrivate={false} />
      <AppRoutes exact path='/dashboard/profesional' component={ProfesionalExperience} isPrivate={false} />
      <AppRoutes exact path='/dashboard/education' component={Education} isPrivate={false} />
      <AppRoutes exact path='/dashboard/idioms' component={Idioms} isPrivate={false} />
      <AppRoutes exact path='/dashboard/postulantes' component={Postulantes} isPrivate={false} />
      <AppRoutes exact path='/dashboard/usuario' component={Usuario} isPrivate={false} />
    </Switch>
  )
}

