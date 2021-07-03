import React from 'react';
import Avatar from './Avatar';
import AvatarTitle from './AvatarTitle';

function NavProfile({user, photo}) {
  return(
    <>
      <div className="sidenav__profile">
        <Avatar />
        <AvatarTitle user={user}/>
      </div>
    </>
  )
};

export default NavProfile;