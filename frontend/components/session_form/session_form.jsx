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
        <div>
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
        <div>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      );
    } else {
      return (
        <div>
          Have an account? <Link to="/login">Log in</Link>
        </div>

      );
    }
  }

  render () {
    return (
      <section className='auth-section'>
        <div className='form-box'>
          <div className='auth-form'>
            <form onSubmit={this.handleSubmit} className='form-box'>
              <div className='form-header'>Instagramme</div>
              <br />
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
              </div>
            </form>
          </div>
         </div>
       <div className='form-box'>
         {this.navLink()}
       </div>
     </section>
    );
  }
}

export default withRouter(SessionForm);
