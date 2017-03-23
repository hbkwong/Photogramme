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

  render () {
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
              <input
                className="comment-input"
                type="text"
                placeholder="Add a comment..." />
            </div>

          </li>))
        }
      </section>
    );
  }
}

export default Feed;
