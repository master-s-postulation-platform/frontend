import React from 'react';
import Avatar from './Avatar';
import AvatarTitle from './AvatarTitle';
import "../menuleft/navUser.scss"

function NavProfile({user, photo}) {
  return(
    <>
      <div className="navUser__profile">
        <Avatar />
        <AvatarTitle user={user}/>
      </div>
    </>
  )
};

export default NavProfile;