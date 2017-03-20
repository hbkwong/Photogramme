import * as APIUtil from '../util/feed_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const requestPhotos = () => dispatch => (
  APIUtil.fetchPhotos()
  .then(photos => dispatch(receivePhotos(photos)))
);
