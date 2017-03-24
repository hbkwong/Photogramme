import { merge } from 'lodash';
import { RECEIVE_PHOTOS } from '../actions/feed_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
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
      return newState;
    case REMOVE_LIKE:
      let nextState = Object.assign({}, state);
      let likeIndex = getIndex(nextState[action.like.photo.id].likes, action.like);
      nextState[action.like.photo.id].likes.splice(likeIndex, 1);
      return nextState;
    case RECEIVE_COMMENT:
      debugger;
      const comment = action.comment;
      const stateDup = Object.assign({}, state);
      stateDup[action.comment.photo.id].comments.push(comment);
      return stateDup;
    case REMOVE_COMMENT:
      // code
      return;
    default:
      return state;
  }
};

export default feedReducer;
