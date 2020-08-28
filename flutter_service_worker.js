'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "449a2b94f8f2f417cf919ed50f5f49d5",
"/": "449a2b94f8f2f417cf919ed50f5f49d5",
"main.dart.js": "eb00492ea470b6499576d0805b125f54",
"README.md": "b85b2c343a329e5054714422ba782d51",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e4483d3564a07da63ccce1d3c3baa341",
".git/ORIG_HEAD": "312e9cdaddecbbf4ec6c859cdea968f8",
".git/config": "9ab2ebd04c547376b420222ea8e81447",
".git/objects/68/dfd22233fed4a901035a16a7dfae52883a3f3f": "7e80d87e32a68fa4f59460e5d0967fd0",
".git/objects/6a/c5c660adece012202a78ce2c0d8226f0835d59": "e42e5706313116fc304748a29f545fa3",
".git/objects/69/9aa53621106ac95f2b97b45ca5862660d03dab": "8aa736f22cab4f64ad2d1811a43c6183",
".git/objects/5f/5d978977ac17fc98a304fc483a616937d22826": "72cbd250a4a9ece5f3e1ddde32df7591",
".git/objects/bb/5631d006a2c75bc17b15611de42eb9e6077eb4": "da726ae3496e59c35a2d74ffa2b88446",
".git/objects/d0/c1eb2e8a6e7a85c4124cf5e8b2a8decfaac50f": "79943a78d95fdd83ec2b3358853166b6",
".git/objects/da/129a32ff3c136a29a9f8708501ba2655ab244e": "1614f6f553ff002fec09f1d7ce7ca005",
".git/objects/b4/840e2ecde1d7159b93fdc31029ab27d44ef394": "c6ee01a8d5c301f7dab4dd588b704680",
".git/objects/d1/86c0ce68d350b579ef635a737191353b7c5a7f": "0067dbd37e101523b9a186e4c6508c9d",
".git/objects/ca/87661323ce45eae255692d6eb8158a19530253": "5e487145d8882d6f7d613e0844f284e1",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/16/72ef591f90702e99fe5c3144714b887935a23c": "63a56519f6bc8d6e88753fa03d488767",
".git/objects/74/022d048a6f560e3a17ac2db05d07662c662d00": "641879bfe6899f25ddd845cef28d2e82",
".git/objects/17/91cd9ec8565510d285e106b9f1e9e528be0807": "7f23232f3a5e38cb1a4f84b22da6dad1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3f/2b91b647f0158a4fa2e836e32d974a0d53bbee": "7d78e70037cfa23ad70d1f9708977222",
".git/objects/6c/497404f632e8d26f895876f86d210d95e80ba2": "c9df6e741d3bbbc4278abed2dfea8c7d",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a0/8e55b2f65debffbb1d58187905983bd4366793": "7db67a8fd2fee3a31a5b8db0ab99c311",
".git/objects/a9/f2b62cdf355431477b69962827038b8d095f97": "c2b24bcb4439a2b18ed9252ccb99bc4c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e6/8b36073f63cfa42aef5523074da67251e81f9b": "87226aefb917be9757dc2cbfd584272a",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f8/766bd6ff0067145fc4135c77f7e0457fc142d6": "f9730642fada78bdf75c2e41adcd40e1",
".git/objects/41/507c042bc179b08080aa8927fef824f8181a43": "ada3a9d8257df69a495a94ce7e5e12d5",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/4a/b95b5384105c375850cc286867f834ec3f8607": "ac71bb71fc254e7f50a2684f981b1765",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/5ac979b3ad2f0e7b65eb3a1a4d7edf1085773f": "7bdc8969a9c483ebe7cb3021d32371e9",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/22/33971c64dccc73c57299782440c4934412b317": "ffd025ca95ee1bc6b529eacd6ea19e27",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2960fd57a8528da19388c2bab7ce189e",
".git/logs/refs/heads/master": "2960fd57a8528da19388c2bab7ce189e",
".git/logs/refs/remotes/origin/master": "33a524da06abf65f32e4d9da778f1b55",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "73363ed8ad1a6bb3fe19f327a396f763",
".git/refs/remotes/origin/master": "73363ed8ad1a6bb3fe19f327a396f763",
".git/index": "d6829da209d4c528a1c776db3f79ba75",
".git/COMMIT_EDITMSG": "3d42d5084be0c33dc87a4eb66186020c",
".git/FETCH_HEAD": "769ecd874e899b31614b46de8181d1c7",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/NOTICES": "700c934ab87f8727b32d844b4f720ebe",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
