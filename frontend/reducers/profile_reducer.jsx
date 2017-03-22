import { RECEIVE_USER_INFO } from '../actions/profile_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const defaultUser = {
  username: '',
  bio: '',
  email: '',
  name: '',
  photos: [],
  followers: []
};

const profileReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_INFO:
      let info = action.userInfo;
      return info;
    default:
      return state;
  }
};

export default profileReducer;
