import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import PhotoFormContainer from './photo_form/photo_form_container';
import ProfileContainer from './profile/profile_container';
// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// react component
import App from './app';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (newState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/upload');
    }
  };
  return (  <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute onEnter={_ensureLoggedIn}/>
          <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          <Route path="/upload" component={ PhotoFormContainer } onEnter={_ensureLoggedIn}/>
          <Route path="/:id" component={ ProfileContainer } onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
