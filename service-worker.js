importScripts("/ListApp/precache-manifest.3574bf5f57e2961328f098193495bf2f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.routing.registerRoute(
    "https://joseivp.github.io/ListApp/index.html",
    workbox.strategies.networkFirst()
);

workbox.precaching.precacheAndRoute([]);