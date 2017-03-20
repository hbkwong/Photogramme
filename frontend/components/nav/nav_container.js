import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Nav);
