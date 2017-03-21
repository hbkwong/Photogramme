import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.requestPhotos();
  }

  render () {
    return (
      <div className="feed-photos">
        { this.props.photos.map((photo, idx) => (
          <li key={idx}>
            <img src={photo.url} />
          </li>))
        }
      </div>
    );
  }
}

export default Feed;
