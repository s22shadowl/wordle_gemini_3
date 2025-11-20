const CACHE_NAME = 'wordle-pro-v1';
const ASSETS = [
    './',
    './index.html',
    'https://raw.githubusercontent.com/3b1b/videos/master/_2022/wordle/data/possible_words.txt',
    'https://raw.githubusercontent.com/3b1b/videos/master/_2022/wordle/data/allowed_words.txt'
];

// 安裝 SW 並快取資源
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(ASSETS);
        })
    );
});

// 攔截請求：有快取就用快取，沒快取就上網抓
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => {
            console.log('[Service Worker] Fetching resource: ' + e.request.url);
            return r || fetch(e.request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    console.log('[Service Worker] Caching new resource: ' + e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});

// 清理舊版本快取
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
