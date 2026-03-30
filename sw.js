const CACHE_NAME = 'cash-connect-v3.2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalar el Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Interceptar peticiones (solo sirve el esqueleto offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
