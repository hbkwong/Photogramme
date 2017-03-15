import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
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

  renderErrors () {
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

  navLink () {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  render () {
    return (
      <div className='auth-form'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          Welcome to Instagramme!
          <br />
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className='login-form'>
            <br />
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className='login-input' />
            </label>
            <br />
              <label>Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className='login-input' />
              </label>
              <br />
              <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
