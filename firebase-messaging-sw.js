importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyApJGkj4NbwrUKhEUGT4q6w7mYkVRll1-o",
  authDomain: "agenda-famille-6b71f.firebaseapp.com",
  databaseURL: "https://agenda-famille-6b71f-default-rtdb.firebaseio.com",
  projectId: "agenda-famille-6b71f",
  storageBucket: "agenda-famille-6b71f.firebasestorage.app",
  messagingSenderId: "497535852838",
  appId: "1:497535852838:web:3659346e275fb4d28221e7"
});

const messaging = firebase.messaging();

// Affiche la notification reçue même quand l'app est fermée / en arrière-plan
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || payload.data?.title || 'Agenda famille';
  const options = {
    body: payload.notification?.body || payload.data?.body || '',
    icon: 'https://cdn-icons-png.flaticon.com/512/1057/1057068.png',
    tag: payload.data?.tag || 'agenda-famille'
  };
  self.registration.showNotification(title, options);
});
