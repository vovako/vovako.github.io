const STATIC_CACHE_NAME = 'offline-cache'
let assetsUrls = [
	'./index.html',
]

self.addEventListener('install', async (event) => {
	console.log('[SW] install', event);

	const list = self.performance.getEntriesByType('resource')
	list.forEach(i => {
		const result = i.name.match(/\/([^\/^\?]+)(\?[^\?]*)?$/)[1]
		console.log(result);
	})

	const cache = await caches.open(STATIC_CACHE_NAME)
	await cache.addAll(assetsUrls)
})

self.addEventListener('activate', function (event) {
	console.log('[SW] Activating Service Worker ....', event);
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