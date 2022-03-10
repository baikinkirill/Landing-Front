// Set this to true for production
var doCache = true;

// THIS MESSAGE FOR PARSER #name
var CACHE_NAME = 'v53';

// Delete old caches that are not our current one!
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          // Get the assets manifest so we can see what our js file is named
          // This is because webpack hashes it
          fetch("asset-manifest.json")
            .then(response => {
              response.json()
            })
            .then(assets => {
              // Open a cache and cache our files
              // We want to cache the page and the main.js generated by webpack
              // We could also cache any static assets like CSS or images
              const urlsToCache = [
              "/__/manifest.js",
							"/__/manifest.js.map",
							"/about.cc4985b3.js",
							"/about.cc4985b3.js.map",
							"/achievementPageTemplate.3f064f4a.js",
							"/achievementPageTemplate.3f064f4a.js.map",
							"/achievementPageTemplate.d6f360e9.css",
							"/achievementPageTemplate.d6f360e9.css.map",
							"/achievements/somepage.html",
							"/achievements.dc2f5257.js",
							"/achievements.dc2f5257.js.map",
							"/background.3f68f1c2.webp",
							"/backgroundCompressed.f260016c.webp",
							"/buttonArrow.b3b90ce2.svg",
							"/favicon.ace74d0b.ico",
							"/footerBackground.7daac8ef.webp",
							"/github.9fc9ee1d.webp",
							"/header.9599579a.js",
							"/header.9599579a.js.map",
							"/hololens.9ff0cc34.webp",
							"/htc_vive.11570995.webp",
							"/indexStyles.7d97ab4a.css",
							"/indexStyles.7d97ab4a.css.map",
							"/logo.4b49469b.png",
							"/logo.b1d448d9.webp",
							"/logo.e687bde6.svg",
							"/projectPageTemplate.5a7555ca.css",
							"/projectPageTemplate.5a7555ca.css.map",
							"/projectPageTemplate.a66b2802.js",
							"/projectPageTemplate.a66b2802.js.map",
							"/projects/artillery.html",
							"/projects/bunnyhuntvr_-_web_vr_шутер.html",
							"/projects/geohelper.html",
							"/projects/gyroball.html",
							"/projects/plane_crash_simulator.html",
							"/projects/vrtherapy_-_приложение_для_релаксации_в_vr_со_множеством_разнообразных_активностей.html",
							"/projects/виртуальный_ситуационный_центр.html",
							"/projects/зил.html",
							"/projects/многопользовательская_сборка_ракетного_двигателя.html",
							"/projects/шутер_в_виртуальной_реальности.html",
							"/projects.047db069.js",
							"/projects.047db069.js.map",
							"/projects.5da1ee48.css",
							"/projects.5da1ee48.css.map",
							"/service-worker.js.map",
							"/staff.95e90df2.js",
							"/staff.95e90df2.js.map",
							"/styles.5f6b70c5.css",
							"/styles.5f6b70c5.css.map",
							"/styles.6d8051ac.js",
							"/styles.6d8051ac.js.map",
							"/vk.d333629c.webp",
							"/"
              ]
              cache.addAll(urlsToCache)
              console.log('cached');
            })
        })
    );
  }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});
