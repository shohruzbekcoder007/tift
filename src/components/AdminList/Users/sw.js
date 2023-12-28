// sw.js
self.addEventListener('push', function (event) {
    const options = {
      body: event.data.text(),
      icon: 'path/to/icon.png', // You can provide a path to your notification icon
    };
  
    event.waitUntil(
      self.registration.showNotification('Notification Title', options)
    );
  });
  
  self.addEventListener('notificationclick', function (event) {
    // Handle notification click event if needed
    event.notification.close();
  });
  