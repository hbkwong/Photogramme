import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div className="nav-section">
    <div className="nav-logo">
      <Link to="/">
        <img src="http://res.cloudinary.com/instagramme/image/upload/v1490041469/Instagram_Logo_rgofax.png"/>
      </Link>
    </div>
    <div className="nav-instagramme">
      Instagramme
    </div>
    <div className="nav-icons">
      (some icons here)
    </div>
  </div>
);

export default Nav;
