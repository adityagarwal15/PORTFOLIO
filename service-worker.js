self.addEventListener('install', event => {
  console.log('Service worker installed.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service worker activated.');
});

self.addEventListener('fetch', () => {
  // This is enough to make it a valid PWA
});
