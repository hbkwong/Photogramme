import * as APIUtil from '../util/feed_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const requestPhotos = username => dispatch => (
  APIUtil.fetchPhotos(username)
  .then(photos => dispatch(receivePhotos(photos)))
);
