importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

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

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', JSON.stringify(payload, null, 2));

  const title = payload.notification.title;
  const body = payload.notification.body;

  self.registration.showNotification(title, { body });
});
