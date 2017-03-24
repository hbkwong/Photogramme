import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.getLikeState = this.getLikeState.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.update = this.update.bind(this);
    this.commentEnter = this.commentEnter.bind(this);
  }

  componentDidMount() {
    this.props.requestPhotos();
  }

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  commentEnter (event) {
    if (event.keyCode === 13) {
      const formData = new FormData();
      formData.append('comment[photo_id]', event.currentTarget.id);
      formData.append('comment[body]', this.state.body);
      this.props.addComment(formData);
      this.setState({ body: '' });
    }
  }

  handleLike (e) {
    const photoId = parseInt(e.currentTarget.id);

    if (e.currentTarget.className === 'liked-icon') {
      this.props.deleteLike(photoId);
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

  // componentWillReceiveProps(newProps) {
  //   if (!Object.is(this.props.photos, newProps.photos)) {
  //     this.setState({
  //       photos: newProps.photos
  //     });
  //
  //   } else {
  //
  //   }
  //
  // }

  getLikeState (photo) {
    // debugger;
    if (this.props.currentUser) {
      if (photo.likes.find((like) => {
        return like.user_id === this.props.currentUser.id;
      })) {
        return 'liked';
      } else {
        return 'unliked';
      }
    }
  }

  render () {
    // debugger;
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
                  className="comment-input"
                  id={photo.id}
                  type="text"
                  placeholder="Add a comment..."
                  onChange={this.update('body')}
                  onKeyDown={this.commentEnter} />
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
