import { connect } from 'react-redux';
import { signup, login, logout, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname.slice(1) === 'login' ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.location.pathname.slice(1) === 'login' ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
