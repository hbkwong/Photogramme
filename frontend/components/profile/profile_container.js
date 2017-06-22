import { connect } from 'react-redux';
import { requestUserInfo } from '../../actions/profile_actions';
import { addFollow, deleteFollow } from '../../actions/follow_actions';
import Profile from './profile';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  info: state.profile,
  currentUser: state.session.currentUser,
  followers: _.values(state.profile.followers),
  followings: _.values(state.profile.followings)
});

const mapDispatchToProps = dispatch => ({
  requestUserInfo: userInfo => dispatch(requestUserInfo(userInfo)),
  addFollow: followingId => dispatch(addFollow(followingId)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
