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
            {photo.user.username}
            <br />
            Likes: {photo.likes.length}
            <br />
            { photo.comments.map((comment, i) => (
              <p key={i}>{comment.user_id}:{comment.body}</p>
            ))}

            <img src={photo.url} />
          </li>))
        }
      </div>
    );
  }
}

export default Feed;
