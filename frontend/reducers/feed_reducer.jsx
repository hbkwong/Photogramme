import { merge } from 'lodash';
import { RECEIVE_PHOTOS } from '../actions/feed_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { getIndex } from '../util/util';

// const defaultState = {
//   photos: []
// };

const feedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_LIKE:
      const newLike = action.like;
      const newState = Object.assign({}, state);
      newState[action.like.photo.id].likes.push(newLike);
      // newState[action.like.photo.id].liking_users.push(newLike.user_id);
      return newState;
    case REMOVE_LIKE:
      let nextState = Object.assign({}, state);
      let likeIndex = getIndex(nextState[action.like.photo.id].likes, action.like);
      // const likeIndex = nextState[action.like.photo.id].likes.indexOf(action.like);
      // debugger;
      nextState[action.like.photo.id].likes.splice(likeIndex, 1);

      // delete nextState[action.like.photo.id].likes.find((l) => (l.user_id === action.like.currentUser.id));
      return nextState;
    default:
      return state;
  }
};

export default feedReducer;
