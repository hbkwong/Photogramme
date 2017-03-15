import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="session-links">
    <Link className="login-link" to="/login">Log in</Link>
    &nbsp;&nbsp;
    <Link className="signup-link" to="/signup">Sign up!</Link>
  </nav>
);

const welcomeMessage = (currentUser, logout) => (
  <div className="welcome-message">
    <h2 className="header-message">Welcome, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? welcomeMessage(currentUser, logout) : sessionLinks()
);

export default Greeting;
