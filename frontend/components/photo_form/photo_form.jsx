import React from 'react';
import { Link, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

export default withRouter(PhotoForm);
