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
        <div className='box-link'>
          Don't have an account? <Link to="/signup"><strong>Sign up</strong></Link>
        </div>
      );
    } else {
      return (
        <div className='box-link'>
          Have an account? <Link to="/login"><strong>Log in</strong></Link>
        </div>

      );
    }
  }

  render () {
    return (
      <section>
        <div className='auth-main'>
          <img className='auth-img' src="http://res.cloudinary.com/instagramme/image/upload/v1490390317/instagram-icon-blue-v2_mmlrmr.svg"/>

          <div className='auth-section'>
            <div className='auth-form'>
              <form onSubmit={this.handleSubmit} className='box'>
                <div className='form-header'>Photogramme</div>
                <div className='form-description'>See and share photos with friends!</div>
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
                    <br />
                    <input
                      className='button'
                      type="button"
                      value="Demo Login"
                      onClick={this.loginGuest} />
                </div>
              </form>
              {this.navLink()}
            </div>
         </div>
       </div>

       <div className="about">
       </div>
     </section>
    );
  }
}

export default withRouter(SessionForm);
