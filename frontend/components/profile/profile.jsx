import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        username: '',
        name: '',
        profile_photo_url: ''
      }
    };
  }

  componentDidMount() {
    this.props.requestUserInfo(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      info: {
        username: newProps.info.username,
        name: newProps.info.name,
        profile_photo_url: newProps.info.profile_photo_url
      }
    });
  }

  render () {
    return (
      <div className="profile-section">

        <div className="profile-info">
          <img
            src={this.state.info.profile_photo_url}
            className="profile-photo" />
          <br />
          {this.state.info.username}
          <br />
          {this.state.info.name}
          <br />
        </div>

        <div className="profile-photos">
        </div>

      </div>
    );
  }
}

export default Profile;
