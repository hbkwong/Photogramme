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
        name: newProps.info.name
      }
    });
  }

  render () {
    return (
      <div className="profile-section">

        <div className="profile-info">
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
