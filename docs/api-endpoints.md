# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users`
  - Index of users
- `GET /api/users/:id`
- `PATCH /api/users/:id`
- `GET /api/users/:id/photos`
  - Index of photos for a particular user
- `GET /api/users/:id/followers`
  - Index of users that follow a particular user
- `GET /api/users/:id/following`
  - Index of users that a particular user is following

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos
- `GET /api/photos`
  - Index of photos
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`
- `GET /api/photos/:id/likes`
  - Index of all likes for a particular photo
- `GET /api/photos/:id/comments`
  - Index of all comments for a particular photo

### Likes
- `POST /api/photos/:photo_id/likes`
- `DELETE /api/photos/:photo_id/likes`

### Comments
- `POST /api/photos/:photo_id/comments`
