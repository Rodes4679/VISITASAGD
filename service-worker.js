
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("visitas-agd-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./app.js",
        "./manifest.json"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
