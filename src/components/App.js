import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import AppRoutes from "../components/AppRoutes";
import routes from "../Config/routes.js";
import { AuthProvider } from "../Context";

import Header from "./header/Header";
import Footer from "./footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Header /> */}
        <Switch>
          {routes.map((route) => (
            <AppRoutes
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
              exact
            />
          ))}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
