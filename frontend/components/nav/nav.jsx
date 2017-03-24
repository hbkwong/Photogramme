import React from 'react';
import { Link, hashHistory } from 'react-router';

class Nav extends React.Component {

  constructor (props) {
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  logoutAndRedirect () {
    this.props.logout()
    .then(() => hashHistory.push('/'))
    .then(() => hashHistory.push('/login'));
  }

  render () {
    if (this.props.currentUser) {
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
            <Link className="nav-profile-link" to={`/${this.props.currentUser.id}`}>
              <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
            </Link>
            <button className="nav-logout-link" onClick={this.logoutAndRedirect}>
              <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div> </div>
      );
    }
  }

}

export default Nav;
