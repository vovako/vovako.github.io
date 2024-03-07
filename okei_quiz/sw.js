const STATIC_CACHE_NAME = 'offline-cache'
let assetsUrls = [
	'./index.html',
]

self.addEventListener('install', async (e) => {
	console.log('[SW] install');
	e.waitUntil(new Promise((resolve) => {
		self.addEventListener('message', async (event) => {
			assetsUrls.push(...event.data)
			const cache = await caches.open(STATIC_CACHE_NAME)
			await cache.addAll(assetsUrls)
			resolve()
		})
	}))
})

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys()
			.then((keyList) => {
				return Promise.all(keyList.map((key) => {
					if (key !== STATIC_CACHE_NAME) {
						console.log('[Service Worker] Removing old cache.', key);
						return caches.delete(key);
					}
				}));
			})
	);
	return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	console.log('[SW fetch]', event.request.url);

	event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
	const cached = await caches.match(request)
	return cached;
}