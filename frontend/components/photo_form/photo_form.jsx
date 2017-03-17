import React from 'react';
import { Link, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'igpreset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/instagramme/image/upload';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      caption: '',
      location: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          url: response.body.secure_url
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = this.state;
    this.props.addPhoto(photo);
  }

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
      <div>
        <div className="upload-section">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drag and drop an image</p>
            <p>(or click to select a file to share)</p>
          </Dropzone>

          <div>
            <div>
              {this.state.url === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.url} />
              </div>}
            </div>
          </div>
        </div>

        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="upload-inputs">
              <textarea
                className="inputs"
                value={this.state.caption}
                placeholder="Write a caption..."
                onChange={this.update('caption')} />
              <br />
              <input
                type="text"
                className="inputs"
                value={this.state.location}
                placeholder="Where did you take this photo?"
                onChange={this.update('location')}/>
              <br />
              <input
                type="text"
                className="inputs"
                value={this.state.url}
                onChange={this.update('url')}/>
              <input type='submit' value='Share' className="upload-submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoForm);
