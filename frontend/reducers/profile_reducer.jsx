import { RECEIVE_USER_INFO } from '../actions/profile_actions';
import merge from 'lodash/merge';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_INFO:
      let info = action.userInfo;
      return merge({}, state, {info});
    default:
      return state;
  }
};
