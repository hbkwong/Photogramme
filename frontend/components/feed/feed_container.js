import { connect } from 'react-redux';
import { requestPhotos } from '../../actions/feed_actions';
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
    requestPhotos: () => dispatch(requestPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
