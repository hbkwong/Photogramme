import { connect } from 'react-redux';
import { requestPhotos } from '../../actions/feed_actions';
import { addLike, deleteLike } from '../../actions/like_actions';
import { addComment, deleteComment } from '../../actions/comment_actions';
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
    deleteLike: (id) => dispatch(deleteLike(id)),
    addComment: comment => dispatch(addComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
