import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavContainer from './nav/nav_container';

const App = ({ children }) => (
  <div>
    <NavContainer />

    { children }
  </div>
);

export default App;
