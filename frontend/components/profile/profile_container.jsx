import { connect } from 'react-redux';
import {requestUserInfo } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  username: ownProps.params.username,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestUserInfo: userInfo => dispatch(requestUserInfo(userInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
