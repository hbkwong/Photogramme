# Photogramme

Photogramme is a full-stack web application inspired by Instagram.

![Photogramme Main Application](http://res.cloudinary.com/instagramme/image/upload/v1491958102/Screen_Shot_2017-04-11_at_5.47.16_PM_iir1el.png)

Live site: [http://photogramme.herokuapp.com]

Photogramme utilizes the following:

- Ruby on Rails
- React.js
- Redux
- PostgreSQL
- jQuery
- jBuilder
- BCrypt
- Cloudinary
- Heroku
- react-router
- react-dropzone

# Features

The application is composed of three primary features:

### User Authentication

BCrypt is used to hash the passwords of users. As such, only the digest of a user's password is saved in Instagramme's database.

On the user-end, a cookie holding a BCrypt session token is utilized to maintain the user's current session. In the case of non-matching session tokens, the user will be redirected to the login page.

```ruby
class User < ApplicationRecord
  # Multi-level validations for user authentication
  validates :username, :password_digest, :session_token, :email, :name, presence: true
  validates :username, :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  # ...

  # Passwords are stored in a hashed format for security
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  # Session tokens are assigned and updated accordingly for users
  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
```

### Direct Photo Uploading

Users are able to upload photos directly into their Photogramme account.

![Photo Uploader](http://res.cloudinary.com/instagramme/image/upload/v1491958249/Screen_Shot_2017-04-11_at_5.50.20_PM_r0n4yo.png)

Unlike server-side tools such as Paperclip, Photogramme uses a number of tools to facilitate file uploads:

- react-dropzone accepts an image via drag-and-drop (or manual selection)
- superagent transfers the uploaded image
- Cloudinary stores, manages, and modifies images

The PhotoForm presentational component (highlights below) retrieves the necessary information. Immediately after submission, the user is redirected back to his/her profile page in which the image can be viewed.

```javascript
class PhotoForm extends React.Component {
    // ...

  // helper methods to aid photo upload
  onImageDrop(files) {
    // ...
  }

  handleImageUpload(file) {
    // ...
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = this.state;
    delete photo["uploadedFile"];
    this.props.addPhoto(photo).then(hashHistory.push(`/${this.props.currentUser.id}`));
  }

  // In the upload form page, the Cloudinary URL (along with the location, caption, and the user's unique ID) of the uploaded photo is captured and submitted to the database
  render () {
    return (
      <div className="upload-section-main">
        <div className="upload-section">
          <Dropzone
            multiple={false}
            accept="image/*"
            className="dropzone"
            onDrop={this.onImageDrop.bind(this)}>
            <div className="dropzone-msg">
              {this.state.url === '' ? 'Drop and drop or select an image' :
              <div>
                <img src={this.state.url} />
              </div>}
            </div>
          </Dropzone>
        </div>

        // ...
              <input
                type="hidden"
                className="upload-inputs"
                value={this.state.url}
                onChange={this.update('url')}/>
              <br />
              <input
                type='submit'
                value='Share'
                className="upload-submit" />
              <br />
        // ...
    );
  }
}
```

### Photo Feed

An index of photos from users followed by the current user are displayed upon login.

![Photo Feed View](http://res.cloudinary.com/instagramme/image/upload/v1490395141/Screen_Shot_2017-03-24_at_3.27.36_PM_vosfh4.png)

Users can Like and Comment on photos displayed in the feed.

### User Profile

Users have personalized profiles to display their details and photos.

![User Profile](http://res.cloudinary.com/instagramme/image/upload/v1491964934/Screen_Shot_2017-04-11_at_7.41.25_PM_ioyma5.png)

Users can subscribe to other user's content by simply Following them.

# Design

### Wireframes

Early in production, detailed wireframes were produced

![Login](http://res.cloudinary.com/instagramme/image/upload/v1490396363/login_csm1cf.png)

![Photo Feed Item](http://res.cloudinary.com/instagramme/image/upload/v1490396363/feed_photo_uwlfm1.png)

![Photo Feed](http://res.cloudinary.com/instagramme/image/upload/v1490396363/feed_zusbem.png)

![User Profile](http://res.cloudinary.com/instagramme/image/upload/v1490396363/profile_gpmxs7.png)

## Future Release
* [ ] Photo Details
* [ ] Profile Editing
* [ ] Tags
* [ ] Search
