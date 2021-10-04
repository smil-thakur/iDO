'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "895e46476831950e59708475e0420f15",
".git/config": "f380910a814d83fb7d89606ac0d8552a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1707eec572c08455af34a517cef9b9aa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "5ac7d9e4bf4aa93385bbb01d66e2b9d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b8d73c1b7a3ba6afdf0b59fc794217f",
".git/logs/refs/heads/main": "71ecd7120d0a8875188affe20e12fe7c",
".git/logs/refs/remotes/origin/main": "ae0e7ef44cb0461832a46ecf16203e86",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/12/03b48c8ddfee36d7669927b37d5bca5e5c345d": "2ee8f308f6317b8d809e8de5c2c0b5e2",
".git/objects/12/34093f84ecf0df18244cc0e84404a7a7a52b41": "47b2e37987044efc1fd0026d2b44c7bb",
".git/objects/18/82bb51021cdeb2d7ab4289a9a78a5f4c22e524": "add3c8b7535c5cd0aad85c301225af10",
".git/objects/1f/2995767035ccd95091c1de985a4f30b15d4940": "575e51a648e7c7bc61099c64dce93742",
".git/objects/1f/4852f16d531d46939c5c53f86cc3d3c1f13d9b": "728e8b66992b3772ebdb2e1b3fcebec1",
".git/objects/20/876d3518b0789e8f32554f6c9bf8a0c4817dc5": "2209ad05fd2838a4f684da92fcf25270",
".git/objects/22/4738909d9220040ce0bcb01daeb85743b941e1": "2ee0289a1aeb5b500d45bf2fa8f8d5f0",
".git/objects/22/c446fb28cead0878a51735dc07106a0a09df1f": "04763f894aa1a2ca4f98e5057d49e568",
".git/objects/28/d8dd5e3c997743a50f4537482c7b3417718722": "18c67ef89937b9bb0ff69f112df448eb",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/2e/b4649622d648612fe0009dec3b1020b4c7ea8b": "f326d412f040ee78921c89ca8f66acfd",
".git/objects/2f/31010f0baafb5901b8599eb51803addce4069f": "fcf9fdc6b2135c69fc407e0bef36f60a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/2bcfc4691b3d02a19d76ae88e2555549df1727": "81f6a415470969620134d07b9ffbed96",
".git/objects/37/862b209c090bd2666b5b51a81a48246bb97ce1": "a88cdc45d2b18cdff30af1fc0bbd9a2d",
".git/objects/3b/a8719c09bd4ca3612b5040ffd34531ed1037ad": "4ac835163063bc12e1d9a995169f314b",
".git/objects/3f/c63ea7b3f1eb29db70f558d133b85ee9121e0e": "abfa1a765bc279f53fb0ab122b68bc27",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/6eaa75460e6ceaed1b6c0b8978b0bc5d30151c": "611402b891df7d19dcf17b765e8354a3",
".git/objects/4a/631b9a06fa1a5ab523f6d19d385fc7112e0a9a": "df3e0dee410075cefb1633a9a87285c2",
".git/objects/4a/931ccd9b03dfb100cf5e3744fc2716d78d522b": "37ce291903daee148f3add303f3bacc0",
".git/objects/4c/8e53610a7813e789cd200f1951e4b0f62c1943": "ed8dae95ada916fb3baa38b70ec59541",
".git/objects/51/8b7678c84ea1aeccaa88997444acf715b3bbe0": "3fcfc78b9443ef125e5e6e0dc2376725",
".git/objects/54/0720c99263105bd9163838bcd312a122de4073": "dbe779052200a5b5b2c170dc1ddfb44a",
".git/objects/5d/884f92708327668b15e8538b7d395fbdff88f7": "4370f297390e38563fa5708f09da9a10",
".git/objects/61/310f3d3b5e2deb671e9d8da575936af9293441": "cf56f76c736dc6831028c2aa23e67640",
".git/objects/62/355b163875f2c964644beb7b8197f9a600a6f7": "133f1ec2db5c83e5c9014c60c8d39194",
".git/objects/73/98a4ce29d9c13f4935cb95d0270a72da4aa72f": "400cc3f625081474d239e9ce0e79f872",
".git/objects/75/4aae84f19e1b2797f77ef61db6220bfb227613": "be6e44ab6bdd4d8f8f7ceb2bb8e4bf44",
".git/objects/79/5fd98652a73c2b098a74da79b7f395a05cab0d": "492a38591a0c8ca5aad093adb419fe48",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/1a78e87cc82e05ec8877f3025666f680cc20b8": "a20adde20d999bef51de0f1789d450a2",
".git/objects/7c/29dc1046539f4b268817b93079f4e408bb8010": "af4def8020e92666cd41cce3e87e9c97",
".git/objects/7c/7804a6fb5e47b029b5a464376ac595ed0776b0": "9d62c75976aecce9413bcd1724159ea9",
".git/objects/81/dc2c0056ad091b953aafac64ed608a65110fb6": "b589ebd7298b7ffd6c4b798a17b4b4bf",
".git/objects/87/562de3320566efe6e50fe258f3a0685400e18f": "b00a2cebe58e283602f413a9306a8bef",
".git/objects/87/98972f6d884bc1378139e58e378d31799a118e": "9151b1d71c1ad7472e809ed5269533b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/e004d66f42f9f6eefed5a02a008e2ca36093a5": "2c9cab3a2ac60dc1df73374b2770fd02",
".git/objects/9a/d6732957366dbda77c39931f8b88d83f04bc95": "c33a9870ebbe01ff089d254cfbe4e966",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6d1913a737ad4aace2c0d3835e8aaa1acfd78b": "00ececfd69a774d1327bafab8acd47c3",
".git/objects/a4/5784a4cbab126d7ab7f1448aa09a2c0cdc9d13": "4e413a8fbf1953e0e2025a0dd9a220a1",
".git/objects/a4/5cf0df89c53cfd523dd5358d3cebc0714f67a2": "0033eef115d373e1321e33048e23a267",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/07fc31e603abdd4caa1fdac4f6a59e5b896db9": "e689117c0bf8263cd2d3b523401464c3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/1ae4728a00b1a1d609bb3b05dcb97368a6bc33": "bc8d35644357af6897ffa3474a10bc2d",
".git/objects/b5/eb7290fe7ad612f1f71e90402952a5e8106b1d": "7f3665cba81a70bae6e6967c38c6f892",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/6d7fd8a09471222f1575908f2ccc7257b5664b": "45d257d7366e33176cc00321d0ce41c1",
".git/objects/c3/bd84e9c32d648a8b7fdf078b1dcf08981cac2b": "39e9eb25a0393e0a876136ac191f7832",
".git/objects/c6/973e139dc2d4f89437023b8f74a7b37b507b0a": "c79ae6d937edec83af25f6008272f795",
".git/objects/c6/a9c4d8c3d388143287b4b3b9c4d29e6c86be72": "5a4673a4863a3d1fbb443e9698517aa8",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/c9/f010ceaaf615d6690a1358975e1df0cd2e5c28": "e80a0cf3c5ee5db9ae4d5bc6df897e11",
".git/objects/ce/74a29b7b851062b45b9e5dc3a7bfd5ee88607e": "b1911795f3c200c271d96421756875b7",
".git/objects/cf/52bd98d44065144a9bb0ff4a1a24a3bef94637": "8f9c3732afac377b481ac6173b210810",
".git/objects/d4/b91655c89d675219548dda1f2f926652f3fa47": "85f6c2e4cbab3da113870441ab579fb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d3da55130fe5bfc5324c767de3ef543a5e499f": "8b04798cd37b0c086a4e7248ac97699a",
".git/objects/dd/127a736c21904f7008b9bd91915f2c716dc84b": "43990a30a5a00422ba87aff9ff92a09b",
".git/objects/e5/3ac24563e7463cb9409dc1c6965f1eb4cfcd62": "97fc9240241673889bd7c2d4efb62545",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/5ed1368aff230af92d3b43f1e06ec290aa9310": "0722e7d082c53fd2280ecc0bb72ad8b7",
".git/objects/e9/f143082eeb93e61cdcbbb9ff7233fb5745b390": "4019a4812f5f8dee5d7ae6cb0a78b14f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/954341f3aa332b5d677dd5ca9622e5d889a51a": "c9752035f20abc46ae3188bfdb3a9f44",
".git/objects/fa/5f9811d5f216bd7785ed0abd0f7c7bf65c0c45": "71b6f484df857248f74f435c9b5d44a4",
".git/ORIG_HEAD": "08e54cedf7b4e9164aadaf152150d54e",
".git/refs/heads/main": "d01e4693e2a0e8f005b260fe70c74f4e",
".git/refs/remotes/origin/main": "93a774d67dbcae490ed321cc1d2ca5b5",
"assets/assests/images/3d_ido.png": "e2340f1d3c3fb7e78029b3c92fd44308",
"assets/assests/images/3d_ido2.png": "ad258f339619b8ed041bc0054d2e6660",
"assets/assests/images/assistance.png": "aa1d088c278a92da9031e8fa85a738a0",
"assets/assests/images/automateddel.png": "b5858f94af6012ce7669ad50484183e5",
"assets/assests/images/facile.png": "cee259ffc74f4e143015623b4a7b583a",
"assets/assests/images/reception.png": "7ef9aacbca94c85e31932ff4ab2a2a90",
"assets/AssetManifest.json": "8a6f68fc3332427e37f230a8242abc2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e5a682c432b05b5b6e3e4da4ee331431",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8101f359f722e6b502043ece59ac0226",
"/": "8101f359f722e6b502043ece59ac0226",
"main.dart.js": "4b58dfa0b35ca97a7bbf2a6726c82540",
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
