// sw.js
/* This is a placeholder file to avoid generating an error 
//when the app is served before being built */
console.info('Service worker disabled for development, will be generated at build time.');
import { precacheAndRoute } from 'workbox-precaching'
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

//navigator.serviceWorker.register('sw.js');

'/pages/fallback.html'
