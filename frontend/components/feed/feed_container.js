import { connect } from 'react-redux';
import { requestPhotos } from '../../actions/feed_actions';
import { addLike, deleteLike } from '../../actions/like_actions';
import Feed from './feed';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    photos: _.values(state.feed)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPhotos: () => dispatch(requestPhotos()),
    addLike: photoId => dispatch(addLike(photoId)),
    deleteLike: (photoId, userId) => dispatch(deleteLike(photoId, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
