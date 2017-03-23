import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // photos: {
      //   caption: '',
      //   likes: [],
      //   url: ''
      // }
    };
    this.getLikeState = this.getLikeState.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.props.requestPhotos();
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     photos: {
  //       caption: newProps.photos.caption,
  //       likes: newProps.photos.likes,
  //       url: newProps.photos.url
  //     }
  //   });
  // }

  handleLike (e) {
    const photoId = parseInt(e.currentTarget.id);

    if (e.currentTarget.className === 'liked-icon') {
      this.props.deleteLike({
        photo_id: photoId,
        user_id: this.props.currentUser.id});
    } else {
      this.props.addLike(photoId);
    }
  }

  likeButton (photo) {
    if (this.getLikeState(photo) === 'liked') {
      return (
        <img src="http://res.cloudinary.com/instagramme/image/upload/v1490293554/heartred_kjvlav.png" />
      );
    } else {
      return (
        <img src="http://res.cloudinary.com/instagramme/image/upload/v1490293553/heartred-ConvertImage_hyqrd1.png" />
      );
    }
  }

  getLikeState (photo) {
    if (this.props.currentUser) {
      if (photo.liking_users.find((user) => {
        return user.id === this.props.currentUser.id;
      })) {
        return 'liked';
      } else {
        return 'unliked';
      }
    }
  }

  render () {
    console.log(this.props);
    return (
      <section className="feed-photos">
        { this.props.photos.map((photo, idx) => (
          <li className="feed-post" key={idx}>

            <div className="feed-photo-header">
              <div className="feed-user-info">
                <img src={photo.user.profile_photo_url} />

                <div className="username-and-location">
                  <div className="feed-username">{photo.user.username}</div>
                  <div className="feed-location">{photo.location}</div>
                </div>

              </div>
              <div className="number">{photo.time}</div>
            </div>

            <div className="feed-photo">
              <img src={photo.url} />
            </div>

            <div className="feed-photo-info">
              <div className="feed-likes">
                {photo.likes.length} Likes
              </div>

              <div className="feed-photo-comments">
                { photo.comments.map((comment, i) => (
                  <li className="feed-comments" key={i}>
                    <b>{comment.user.username}</b> {comment.body}
                  </li>
                ))}
              </div>
            </div>

            <div className="feed-photo-footer">
              <div className="feed-photo-footer-sub">
                <button
                  id={photo.id}
                  className={this.getLikeState(photo)+'-icon'}
                  onClick={this.handleLike}>
                  {this.likeButton(photo)}
                </button>

                <input
                  id={photo.id}
                  className="comment-input"
                  type="text"
                  placeholder="Add a comment..." />
              </div>
            </div>

            <div className="feed-spacer"></div>
          </li>))
        }
      </section>
    );
  }
}

export default Feed;
