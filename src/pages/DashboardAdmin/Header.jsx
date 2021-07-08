import React from "react";
/* Separo los elementos que necesito, pero creo esa carpeta que necesito para manejarlo por carpetas con jerarquia por eso cree la carpeta  components donde cree el ducumento con el scss del header
Y hago la referencia de los estilo*/
import "../../assets/styles/components/Header.scss";
import iconUser from "./images/Icono-Usuario.svg";

/* Creo componentes presentacionales, que no tienen lógica, solo empujan una sección de HTML y la => la creo con un return explicito que es para empujar el HTML que es un jsx */
const Header = () => (
  <header className="header">
    <div></div>
    <nav className="menuCSS3">
      <ul>
        <li>
          <a href="#">
            <img src={iconUser} alt="Icono Usuario" />
          </a>
          <ul>
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="#">Cerrar</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

/* Pregunta: Para mandar el componente  y visualizarlo en el navegador ej en el index.js para llamar este componente
import Header from "../../components/header/Header";

Luego se puede presentar dentro del ducumento
ReactDOM.render(<Header />document.getElementById('app'));

Separar los contenedores para trabajar los diferentes componentes, creando una carpeta containers y allí pongo los contenedores con los difentes componentes
 */
