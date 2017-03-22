import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter, hashHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        username: '',
        name: '',
        profile_photo_url: '',
        photos: []
      }
    };
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow () {
    this.props.addFollow(this.props.info.id);
  }

  handleUnfollow () {
    // code
  }

  logoutAndRedirect () {
    this.props.logout()
    .then(() => hashHistory.push('/'));
  }

  componentDidMount() {
    this.props.requestUserInfo(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      info: {
        username: newProps.info.username,
        name: newProps.info.name,
        profile_photo_url: newProps.info.profile_photo_url,
        photos: newProps.info.photos
      }
    });
  }

  render () {
    console.log(this.props);
    return (
      <div className="profile-section">

        <div className="profile-all-info">

          <img
            src={this.state.info.profile_photo_url}
            className="profile-photo" />

          <br />
          {this.state.info.username}
          <input type="button" value="Follow" onClick={this.handleFollow} />
          <input type="button" value="Log out" onClick={this.logoutAndRedirect} />
          <br />
          <div><b>{this.state.info.photos.length}</b> posts</div>
          <div><b>280</b> followers</div>
          <div><b>533</b> following</div>
          {this.state.info.name}
          <br />
        </div>

      <div className="profile-photos">
        { this.state.info.photos.map((photo, idx) => (
          <li key={idx}>
            <img src={photo.url} />
          </li>))
        }
      </div>

    </div>
    );
  }
}

export default Profile;
