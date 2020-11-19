"use strict";
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("/precache-manifest.2895cf5a9a30e061b71ce26e74cee818.js");
self.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
workbox.core.clientsClaim();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
});
//# sourceMappingURL=service-worker.js.map