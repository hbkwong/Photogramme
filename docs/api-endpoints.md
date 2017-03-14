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

### Likes
- `POST /api/photos/:photo_id/likes`
- `DELETE /api/photos/:photo_id/likes`

### Comments
- `POST /api/photos/:photo_id/comments`
