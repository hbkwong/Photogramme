import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';
import PhotoIndexContainer from './photo_index_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="profile-section">

        <div className="profile-info">
        </div>

        <div className="profile-photos">
        </div>

      </div>
    );
  }
}

export default Profile;
