import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const addComment = comment => dispatch => (
  APIUtil.addComment(comment)
  .then(commented => dispatch(receiveComment(commented)))
);

export const deleteComment = (photoId, commentId) => dispatch => (
  APIUtil.deleteComment(photoId, commentId)
  .then(comment => dispatch(removeComment(comment)))
);
