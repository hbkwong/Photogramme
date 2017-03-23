import { RECEIVE_USER_INFO } from '../actions/profile_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { getIndex } from '../util/util';
import merge from 'lodash/merge';

const defaultUser = {
  profile: {
    bio: '',
    comments: [],
    email: '',
    followers: [],
    followings: [],
    id: '',
    liked_photos: [],
    likes: [],
    name: '',
    photos: [],
    profile_photo_url: '',
    username: ''
  }
};

const profileReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_INFO:
      let info = action.userInfo;
      return info;
    case RECEIVE_FOLLOW:
      const newFollower = action.follow.follower;
      const newUser = Object.assign({}, state);
      newUser.followers.push(newFollower);
      return newUser;
    case REMOVE_FOLLOW:
      const removeFollower = action.follow.follower;
      const newState = Object.assign({}, state);
      newState.followers = action.follow.following_followers;
      return newState;
    default:
      return state;
  }
};

export default profileReducer;
