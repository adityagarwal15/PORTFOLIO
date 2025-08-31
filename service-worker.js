const CACHE_NAME = 'aditya-portfolio-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/home.html',
  '/about.html',
  '/projects.html',
  '/index.css',
  '/home.css',
  '/about.css',
  '/projects.css',
  '/cursor.css',
  '/index.js',
  '/home.js',
  '/about.js',
  '/projects.js',
  '/cursor.js',
  '/manifest.json',
  '/Aditya_Agarwal_Resume.pdf',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
  'https://cdn.cdnfonts.com/css/pp-neue-montreal',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Gloock&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Cache installation failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it's a stream
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // If both cache and network fail, show offline page
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync triggered');
  return Promise.resolve();
}

// Push notification handling
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: 'https://res.cloudinary.com/dcf0cpuqf/image/upload/v1735244853/favicon_ka3ikk.png',
    badge: 'https://res.cloudinary.com/dcf0cpuqf/image/upload/v1735244853/favicon_ka3ikk.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Portfolio',
        icon: 'https://res.cloudinary.com/dcf0cpuqf/image/upload/v1735244853/favicon_ka3ikk.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'https://res.cloudinary.com/dcf0cpuqf/image/upload/v1735244853/favicon_ka3ikk.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Aditya Agarwal Portfolio', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
