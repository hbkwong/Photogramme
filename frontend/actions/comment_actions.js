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

export const addComment = commentInfo => dispatch => (
  APIUtil.addComment(commentInfo)
  .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id)
  .then(comment => dispatch(removeComment(comment)))
);
