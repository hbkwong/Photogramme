import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

const receiveUserInfo = userInfo => ({
  type: RECEIVE_USER_INFO,
  userInfo
});

export const requestUserInfo = id => dispatch => (
  APIUtil.fetchProfile(id)
  .then(userInfo => dispatch(receiveUserInfo(userInfo)))
);
