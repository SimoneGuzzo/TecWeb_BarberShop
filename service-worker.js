let cacheName = 'BarberShop';
let filesToCache = [
    'index.html',
    'orari.html',
    'collaborazione.html',
    'prodotti_capelli.html',
    'prodotti_barba.html',
    'cod01.html',
    'cod01B.html',
    'cod02.html',
    'cod02B.html',
    'cod03.html',
    'cod03B.html',
    'cod04.html',
    'cod04B.html',
    'style.css',
    'mobile.css',
    'script.js',
    'js/main.js',
    'icon/icon.png',
    'back.jpg',
	'prodotti/barba/cod01.jpg',
	'prodotti/barba/cod02.jpg',
	'prodotti/barba/cod03.jpg',
	'prodotti/barba/cod04.jpg',
	'prodotti/capelli/cod01.jpg',
	'prodotti/capelli/cod02.jpg',
	'prodotti/capelli/cod03.jpg',
	'prodotti/capelli/cod04.jpg',
];

/* Avvia il Service Worker e Memorizza il contenuto nella cache */
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve i Contenuti Memorizzati quando sei Offline */
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
