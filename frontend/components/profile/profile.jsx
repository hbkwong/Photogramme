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
    this.props.deleteFollow({follower_id: this.props.currentUser.id, following_id: this.props.info.id});
  }

  followButton () {
    if (this.props.currentUser) {
      if (this.props.currentUser.id === this.props.info.id) {
        return (
          <button>Edit Profile</button>
        );
      } else {
        if (this.getFollowState() === "follow") {
          return (
            <button className="follow" onClick={this.handleFollow}>
              Follow
            </button>
          );
        } else {
          return (
            <button className="unfollow" onClick={this.handleUnfollow}>
              Unfollow
            </button>
          );
        }
      }

    }
  }

  logoutButton () {
    return (
      <button className="logout-button" onClick={this.logoutAndRedirect}>
        Log out
      </button>
    );
  }

  getFollowState() {
    if (this.props.followers.find((follower) => {
      return follower.id === this.props.currentUser.id;
    })) {
      return 'unfollow';
    } else {
      return 'follow';
    }
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
        // followers: newProps.info.followers,
        // followings: newProps.info.followings
      }
    });
  }

  render () {
    return (
      <section className="profile-section">

        <div className="profile-header">
          <img
            src={this.state.info.profile_photo_url}
            className="profile-photo" />

          <div className="profile-username">
            {this.state.info.username}
          </div>

          <div className="profile-follow-button">
            {this.followButton()}
          </div>

          {this.logoutButton()}

          <div className="profile-photo-number">
            <b>{this.state.info.photos ? this.state.info.photos.length : 0}</b> posts
          </div>

          <div className="profile-followers-number">
            <b>{this.props.followers ? this.props.followers.length : 0}</b> followers
          </div>

          <div className="profile-followings-number">
            <b>{this.props.followings ? this.props.followings.length : 0}</b> following
          </div>

          <div className="profile-name">
            {this.state.info.name}
          </div>
        </div>

        <div className="profile-photos">
          <ul className="post-grid">
            { this.state.info.photos.map((photo, idx) => (
              <li key={idx} className="post-list-item">
                <img src={photo.url} />
              </li>))
            }
          </ul>
        </div>

      </section>
    );
  }
}

export default Profile;
