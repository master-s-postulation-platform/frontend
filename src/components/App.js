import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AppRoutes from "../components/AppRoutes";
import routes from "../Config/routes.js";
import { AuthProvider } from "../Context";

import RouterHeader from "./RouterHeader";
import RouterFooter from "./RouterFooter";

import Landing from "../components/landing/Landing";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Dashboard from "../pages/DashboardAdmin/Dashboard";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Profile from "../pages/profile/Profile";
import ProfesionalExperience from "../pages/profile/ProfesionalExperience";
import Education from "../pages/profile/Education";
import Idioms from "../pages/profile/Idioms";

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
          <AppRoutes
            path="/dashboard"
            component={Dashboard}
            isPrivate={false}
          />
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

/* function RouterDashboard() {
  return (
    <Switch>
      <AppRoutes exact path='/dashboard' component={Dashboard} isPrivate={true}/>
      <AppRoutes path='/dashboard/profile' component={Profile} isPrivate={true}/>
      <AppRoutes path='/dashboard/profesional' component={ProfesionalExperience} isPrivate={true}/>
      <AppRoutes path='/dashboard/education' component={Education} isPrivate={true}/>
      <AppRoutes path='/dashboard/idioms' component={Idioms} isPrivate={true}/>
    </Switch>
  )
} */

/* 
<Route exact path='/'>
<RouterHeader />
<Landing/>
<RouterFooter/>
</Route>
<Route exact path='/login'>
<RouterHeader />
<Login/>
<RouterFooter/>
</Route>
<Route exact path='/register'>
<RouterHeader />
<Register/>
<RouterFooter/>
</Route>

<AppRoutes exact path='/dashboard' isPrivate={true} component={Dashboard} />


<AppRoutes exact path='/*' component={PageNotFound} isPrivate={true}/>
 */
