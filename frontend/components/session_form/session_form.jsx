import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: ""
    };
    this.loginGuest = this.loginGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
    }
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  loginGuest () {
    const user = {username: "guest", password: "password"};
    this.props.login(user);
  }

  renderErrors () {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  renderSignUp () {
    if (this.props.formType === 'signup') {
      return (
        <div className='login-form'>
          <label>
            <input
              placeholder="Name"
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className='login-input' />
          </label>
          <br />
          <label>
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className='login-input' />
          </label>
        </div>
      );
    }
  }

  navLink () {
    if (this.props.formType === 'login') {
      return (
        <div className='box'>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      );
    } else {
      return (
        <div className='box'>
          Have an account? <Link to="/login">Log in</Link>
        </div>

      );
    }
  }

  render () {
    return (
      <div className='auth-section'>
        <div className='auth-form'>
          <form onSubmit={this.handleSubmit} className='box'>
            <div className='form-header'>Instagramme</div>

            {this.renderErrors()}

            <div className='login-form'>
              {this.renderSignUp()}
              <label>
                <input
                  placeholder="Username"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className='login-input' />
              </label>
              <br />
                <label>
                  <input
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className='login-input' />
                </label>
                <br />
                <input
                  className='button'
                  type="submit"
                  value="Submit" />
                <br />
                <input
                  className='button'
                  type="button"
                  value="Guest Login"
                  onClick={this.loginGuest} />
            </div>

          </form>

        </div>

       {this.navLink()}
     </div>
    );
  }
}

export default withRouter(SessionForm);
