importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDhh9HinZcPft6E23hgbzK1uIoy8coyzgQ",
  authDomain: "feeefnet.firebaseapp.com",
  projectId: "feeefnet",
  storageBucket: "feeefnet.appspot.com",
  messagingSenderId: "24740023407",
  appId: "1:24740023407:web:132d6fc5091def2023519a",
  measurementId: "G-5S9MEJ582K"
});

// Necessary to receive background messages:
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("onBackgroundMessage->", payload);
  
  const notificationTitle = payload.notification?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: payload.notification?.icon || '/favicon.ico',
    data: {
      url: payload.data?.url || payload.fcmOptions?.link || payload.notification?.click_action || '/'
    }
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click events
self.addEventListener('notificationclick', function(event) {
  console.log('Notification clicked:', event);
  
  // Close the notification
  event.notification.close();
  
  // Get the URL to open
  const urlToOpen = event.notification.data?.url || '/';
  
  console.log('Opening URL:', urlToOpen);
  
  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(function(clientList) {
      // Check if there's already a window/tab open with the target URL
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === urlToOpen && 'focus' in client) {
          console.log('Focusing existing window');
          return client.focus();
        }
      }
      
      // If no existing window with the URL, open a new one
      if (clients.openWindow) {
        console.log('Opening new window');
        return clients.openWindow(urlToOpen);
      }
    }).catch(function(error) {
      console.error('Error handling notification click:', error);
    })
  );
});