import React from 'react';
import './headerDashboard.scss';
import iconUser from '../../pages/Dashboard/images/Icono-Usuario.svg';
import { logout, useAuthDispatch, useAuthState } from '../../Context';
import { useHistory } from 'react-router-dom';
import pdf from '../../images/Group652.png';
import excel from '../../images/Group653.png';


const API = 'https://api.hardmakers.com/api/v1/administration/candidates/?page=1&ippage=30&sort=desc&2xlsx='

function getReport(userDetails, file_type){

  let ext = '';
  if (file_type == '1'){
    ext = 'xlsx'
  }
  else {
    ext = 'pdf'
  }

  fetch(`${API}${file_type}`, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${userDetails.token}`,
            'Content-Type': 'application/json'
        }
  })
  .then(response => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Report.${ext}`);
    // 3. Append to html page
    document.body.appendChild(link);
    // 4. Force download
    link.click();
    // 5. Clean up and remove the link
    link.parentNode.removeChild(link);
  })
}

function HeaderDashboard({user}) {
  
  const userDetails = useAuthState();

  let title = userDetails.admin;
  
  const history = useHistory()

  const dispatch = useAuthDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      logout(dispatch);
      history.push('/login');
    } catch (error) {
      console.log(error)
    }
  }


  function handleDownloadPdf(e){
    getReport(userDetails, '2')
  }

  function handleDownloadExcel(e){
    console.log("excel clicked")
    getReport(userDetails, '1')
  }

  return(
    <>
    <div className="contentHeader">

      <header className="headerUser">
      <div></div>
            <nav className="menuCSS3">
              <ul className="list">
                <li>
                  <a className="link" href="#">
                    <img src={iconUser} alt="Icono Usuario" />
                  </a>
                  <ul>
                    <li>
                      <a className="link" href="#">Perfil</a>
                    </li>
                    <li>
                      <a  className="link" onClick={handleLogout}>Cerrar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
      </header>
        <div className="saludo">
          <div className="saludo__bienvenida">
            <div>
              <h1>Bienvenido {title === true ? 'Administrador' : 'Username' }</h1>
              <h1>¿Cómo estás hoy?</h1>
            </div>
            {
              title === true ?
              <div>
                <img src={pdf} onClick={handleDownloadPdf} alt="" />
                <img src={excel} onClick={handleDownloadExcel} alt="" />
              </div>
                :
                ''
            }
          </div>
        </div>
    </div>
    </>
  )
}

export default HeaderDashboard;