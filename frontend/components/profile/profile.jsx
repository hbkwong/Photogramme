import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestUserInfo(this.props.params.id);
  }

  render () {
    return (
      <div className="profile-section">

        <div className="profile-info">
          {console.log(this.props)}
          {this.props.username}
          {this.props.params.id}
          hello
        </div>

        <div className="profile-photos">
        </div>

      </div>
    );
  }
}

export default Profile;
