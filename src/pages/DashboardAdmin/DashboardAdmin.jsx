import React from "react";
/* Traigo mi componente de header, aquí empezare a anadir los elementos */
import Header from "./Header";
/* Ya creado el App.scss le hago referencia importandolo directo */
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import MainC from "./MainC";

import "../pages/Dashboard/dashboard.scss";

const App = () => (
  <div className="App">
    {/* Ya puedo traer Header para llamarlo, AHORA tengo que actualizar ej el index.js pero aquí no se donde poner 
    import App from "../containers/App";
    Luego mando App en el mismo archivo
    ReactDOM.render(<App />document.getElementById('app'));
    App  sirve para manejar los componentes y estructurarlos de mejor forma
    */}
    <Header />
    <NavMenu />
    <Footer />
  </div>
);

export default App;
