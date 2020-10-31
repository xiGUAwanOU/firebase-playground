import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

async function initialize() {
  firebase.initializeApp({
    apiKey: 'AIzaSyBWqZb6FxVspZ0oN_MHrBiWo-xZSAtomRc',
    authDomain: 'playground-project--watermelon.firebaseapp.com',
    databaseURL: 'https://playground-project--watermelon.firebaseio.com',
    projectId: 'playground-project--watermelon',
    storageBucket: 'playground-project--watermelon.appspot.com',
    messagingSenderId: '1064083674989',
    appId: '1:1064083674989:web:6a5a6bd0aa6cd2e6bcac64',
    measurementId: 'G-XS8ZZ9HRN0'
  });
}

initialize();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
