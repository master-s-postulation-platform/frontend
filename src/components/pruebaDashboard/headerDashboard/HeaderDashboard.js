import React from 'react';


function HeaderDashboard({user}) {

  return(
    <>
      <header className="header">
            <div className="header__search">
            <h1>Hola a todos</h1>
            </div>
            <div className="header__avatar">
              <div className="dropdown">
                <ul className="">
                  <li className="">
                    <span className="">Mi perfil</span>
                  </li>
                  <li className="">
                    <span className="">Cerrar sesió</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>
    </>
  )
}

export default HeaderDashboard;