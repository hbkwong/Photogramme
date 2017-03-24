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
        photos: [],
        bio: ''
      }
    };
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
          <div> </div>
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

  getFollowState() {
    if (this.props.followers.find((follower) => {
      return follower.id === this.props.currentUser.id;
    })) {
      return 'unfollow';
    } else {
      return 'follow';
    }
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
        photos: newProps.info.photos,
        bio: newProps.info.bio
        // followers: newProps.info.followers,
        // followings: newProps.info.followings
      }
    });
  }

  render () {
    return (
      <section className="profile-section">
        <header className="profile-header">
          <img
            src={this.state.info.profile_photo_url}
            className="profile-photo" />

          <div className="profile-information">

            <div className="profile-title">
              <h3 className="profile-username">
                {this.state.info.username}
              </h3>

              <div className="profile-follow-button">
                {this.followButton()}
              </div>
            </div>

            <ul className="profile-statistics">
              <li>
                <strong>
                  {this.state.info.photos ? this.state.info.photos.length : 0}
                </strong> posts
              </li>

              <li>
                <strong>
                  {this.props.followers ? this.props.followers.length : 0}
                </strong> followers
              </li>

              <li>
                <strong>
                  {this.props.followings ? this.props.followings.length : 0}
                </strong> following
              </li>
            </ul>

          <p className="profile-details">
            <strong className="profile-name">
              {this.state.info.name}
            </strong>
            {" " + this.state.info.bio}
          </p>
        </div>

      </header>

      <section className="profile-photos">
        <ul className="post-grid">
          { this.state.info.photos.map((photo, idx) => (
            <li key={idx} className="post-list-item">
              <img src={photo.url} />
            </li>))
          }
        </ul>
      </section>

      </section>
    );
  }
}

export default Profile;
