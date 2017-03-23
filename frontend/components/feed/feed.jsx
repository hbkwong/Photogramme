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
      <div className="feed-photos">
        { this.props.photos.map((photo, idx) => (
          <li key={idx}>

            <div className="feed-profile-photo">
              <img src={photo.user.profile_photo_url}></img>
            </div>
            <div className="feed-username">{photo.user.username}</div>
            <div className="feed-location">{photo.location}</div>
            <div className="feed-time">{photo.time}</div>

            <img className="feed-photo" src={photo.url} />

            <div className="feed-likes">{photo.likes.length} Likes</div>

            { photo.comments.map((comment, i) => (
              <li className="feed-comments" key={i}>
                <b>{comment.user.username}</b> {comment.body}
              </li>
            ))}

          </li>))
        }
      </div>
    );
  }
}

export default Feed;
