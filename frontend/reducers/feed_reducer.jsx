import { merge } from 'lodash';
import { RECEIVE_PHOTOS } from '../actions/feed_actions';

const feedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    default:
      return state;
  }
};

export default feedReducer;
