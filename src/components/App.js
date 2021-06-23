import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Landing from './landing/Landing';
import Login from './login/Login';
import Register from './register/Register';
import Profile from '../pages/profile/Profile.jsx'
import ProfesionalExperience from '../pages/profile/ProfesionalExperience';
import Education from '../pages/profile/Education';
import Idioms from '../pages/profile/Idioms';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <>
          <Header />
            <Switch>
              <Route path="/" exact  component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route path="/profesional" component={ProfesionalExperience} />
              <Route path="/education" component={Education} />
              <Route path="/idioms" component={Idioms} />
            </Switch>
          <Footer />
        </>
      </Router>
    )
}

export default App;