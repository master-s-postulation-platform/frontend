import React from 'react';
import { useAuthState } from '../../../Context'

function AvatarTitle({user}) {
  const userDetails = useAuthState();

  let title = userDetails.admin;

  return(
    <>
      <div className="sidenav__profile-title">{ title === true ? 'Administrador ' : 'Username' }</div>
    </>
  )
}

export default AvatarTitle;

