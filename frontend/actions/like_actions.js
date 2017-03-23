import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const addLike = photoId => dispatch => (
  APIUtil.addLike(photoId)
  .then(like => dispatch(receiveLike(like)))
);

export const deleteLike = (like) => dispatch => (
  APIUtil.deleteLike(like)
  .then(liked => dispatch(removeLike(liked)))
);
