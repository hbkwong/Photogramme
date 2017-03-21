import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const addFollow = (followingId) => dispatch => (
  APIUtil.addFollow(followingId)
  .then(follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = (followingId) => dispatch => (
  APIUtil.removeFollow(followingId)
  .then(follow => dispatch(removeFollow(follow)))
);
