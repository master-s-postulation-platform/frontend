import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Landing from './landing/Landing';
import Login from './login/Login';
import Register from './register/Register';

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
            </Switch>
          <Footer />
        </>
      </Router>
    )
}

export default App;