'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "243c49a2647607d8cb288a64d30fd2a4",
".git/config": "cf8d715645ce0ed4e4bf554f934a38e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "60b6982002cf6adbd43626111217bd14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "26e9162a8ad99a8cab1a9cdf9d18e07f",
".git/logs/refs/heads/master": "26e9162a8ad99a8cab1a9cdf9d18e07f",
".git/logs/refs/remotes/origin/master": "61e80b2f62b94be9579463765a9315fb",
".git/objects/0d/ab93ca07aa17c6cb99bffd9281054a3bcba8b0": "c8b27133e5ff185b70a15c05ffb706c1",
".git/objects/12/34093f84ecf0df18244cc0e84404a7a7a52b41": "47b2e37987044efc1fd0026d2b44c7bb",
".git/objects/18/82bb51021cdeb2d7ab4289a9a78a5f4c22e524": "add3c8b7535c5cd0aad85c301225af10",
".git/objects/1f/4852f16d531d46939c5c53f86cc3d3c1f13d9b": "728e8b66992b3772ebdb2e1b3fcebec1",
".git/objects/22/c446fb28cead0878a51735dc07106a0a09df1f": "04763f894aa1a2ca4f98e5057d49e568",
".git/objects/2e/b4649622d648612fe0009dec3b1020b4c7ea8b": "f326d412f040ee78921c89ca8f66acfd",
".git/objects/2f/4a4f735b17ba29583e5fc58b40933cb365e230": "cc34a5fad0c5025e7c53e9e76712808e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/41/5caaefa9bd60f9929d152504424b2301867588": "65c8fcb36d68567363edbd70c9c516e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/8b7678c84ea1aeccaa88997444acf715b3bbe0": "3fcfc78b9443ef125e5e6e0dc2376725",
".git/objects/54/0720c99263105bd9163838bcd312a122de4073": "dbe779052200a5b5b2c170dc1ddfb44a",
".git/objects/72/41d1abff446950c1ae5827676c7883a3a2a926": "0dd5eae7b6c7e9b28c276e21ef62f2c4",
".git/objects/75/4aae84f19e1b2797f77ef61db6220bfb227613": "be6e44ab6bdd4d8f8f7ceb2bb8e4bf44",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/5c30f6a6c13eecbc308c65a321f69bf182ed70": "bae3b03518cbe3bb1e65d1b03864cc2e",
".git/objects/81/dc2c0056ad091b953aafac64ed608a65110fb6": "b589ebd7298b7ffd6c4b798a17b4b4bf",
".git/objects/87/98972f6d884bc1378139e58e378d31799a118e": "9151b1d71c1ad7472e809ed5269533b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/1ae4728a00b1a1d609bb3b05dcb97368a6bc33": "bc8d35644357af6897ffa3474a10bc2d",
".git/objects/b5/eb7290fe7ad612f1f71e90402952a5e8106b1d": "7f3665cba81a70bae6e6967c38c6f892",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/4ce0c15edbe6c5e4b08162ac0bbd3130eba7fc": "5d558bdc221a0bb5a1d8b5754bf0095f",
".git/objects/d4/b91655c89d675219548dda1f2f926652f3fa47": "85f6c2e4cbab3da113870441ab579fb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ff/2a21b4486917730a471d28c6347db73c4a05b3": "c4b9399a367f1c491135ccf412bd1d6d",
".git/refs/heads/master": "ca59befba73f5873bc0b316947302085",
".git/refs/remotes/origin/master": "ca59befba73f5873bc0b316947302085",
"assets/assests/images/3d_ido.png": "e2340f1d3c3fb7e78029b3c92fd44308",
"assets/assests/images/3d_ido2.png": "ad258f339619b8ed041bc0054d2e6660",
"assets/assests/images/assistance.png": "aa1d088c278a92da9031e8fa85a738a0",
"assets/assests/images/automateddel.png": "b5858f94af6012ce7669ad50484183e5",
"assets/assests/images/facile.png": "cee259ffc74f4e143015623b4a7b583a",
"assets/assests/images/idoserve.png": "058020e11a22291edc426871e2d04272",
"assets/assests/images/innovate.png": "7c30defef0fc72b38fd19401beb179ee",
"assets/assests/images/inspire.png": "5d89768501e250922e2086855f428fd0",
"assets/assests/images/invent.png": "6f43c981d605bbf1902cea0bde557977",
"assets/assests/images/reception.png": "7ef9aacbca94c85e31932ff4ab2a2a90",
"assets/assests/images/water.gif": "3811db715884c55889889d14dff2b18d",
"assets/assests/images/wheels.gif": "f2f5e67982027c88e8864799d776afc6",
"assets/AssetManifest.json": "e824aa4f8313c8f983e30cca0a0896e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f596e6d40c1aa03890c839f34cffd52c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ced8c9d73fc8ea733c70e4afc7cdef11",
"/": "ced8c9d73fc8ea733c70e4afc7cdef11",
"main.dart.js": "78b4799ca94abd04a347d468674f489a",
"manifest.json": "ee9e9115973e5482e61f2796adeb62d4",
"README.md": "404154789d0204cc48f01eae5a465ba0",
"version.json": "d6e98ae88d02fc36bd031dd06ef5c46f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
