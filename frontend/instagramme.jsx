import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {requestPhotos, requestPhoto, addPhoto, deletePhoto} from './actions/photo_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
  window.store = store;
  window.requestPhotos = requestPhotos;
  window.requestPhoto = requestPhoto;
  window.addPhoto = addPhoto;
  window.deletePhoto = deletePhoto;
});
