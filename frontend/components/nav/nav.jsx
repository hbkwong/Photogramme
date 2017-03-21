import React from 'react';
import { Link } from 'react-router';

const Nav = (props) => {
  if (props.currentUser) {
    return (
      <div className="nav-section">

        <div className="nav-logo">
          <Link className="nav-link" to="/">
            <img src="http://res.cloudinary.com/instagramme/image/upload/v1490041469/Instagram_Logo_rgofax.png"/>
            <div className="nav-divider"></div>
            <div className="nav-instagramme">Instagramme</div>
          </Link>
        </div>

        <div className="nav-icons">
          <Link className="nav-upload-link" to="/upload">
            <i className="fa fa-camera fa-2x" aria-hidden="true"></i>
          </Link>
          <Link className="nav-profile-link" to={`/${props.currentUser.id}`}>
            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div> </div>
    );
  }
};

export default Nav;
