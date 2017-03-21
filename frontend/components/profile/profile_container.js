import { connect } from 'react-redux';
import { requestUserInfo } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.profile,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUserInfo: userInfo => dispatch(requestUserInfo(userInfo)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
