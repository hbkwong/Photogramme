import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const requestPhotos = username => dispatch => (
  APIUtil.fetchPhotos(username)
  .then(photos => dispatch(receivePhotos(photos)))
);

export const requestPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id)
  .then(photo => dispatch(receivePhoto(photo)))
);

export const addPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo)
  .then(postedPhoto => dispatch(receivePhoto(photo)))
);

export const deletePhoto = id => dispatch => (
  APIUtil.deletePhoto(id)
  .then(photo => dispatch(removePhoto(photo)))
);
