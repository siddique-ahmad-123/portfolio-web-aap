'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bd60bfa84ddaa9587f5c6635a23c3a95",
"assets/AssetManifest.bin.json": "3502cf9fa3dc97f5b6eb5bed18c5b4df",
"assets/fonts/MaterialIcons-Regular.otf": "79605fe748d5c4f912cf35f16d660859",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "64592956abc54aa2362391ec9d3fd332",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "3a935ff8d5c32e29340315b14b601cfe",
"assets/NOTICES": "d31b154758c3ad0c0307f3fbec409ea9",
"assets/assest/my_photo.jpeg": "1b3958ac67fe6f03d317364dbe694c62",
"assets/assest/NoPath.png": "b3d4aebafa3c6d5e4f4b9166691a3ba3",
"assets/assest/flutter_img.png": "9c69bdef3ff892f5a69357d92f31bf2c",
"assets/assest/insta_img.png": "21671e266c66759bfbeca8713fb769d3",
"assets/assest/game_app.png": "2ade4e84bdf50a606a8c91d973106515",
"assets/assest/chat_app.png": "e18eb01816e8d9193f9a0076ccb69c12",
"assets/assest/bg.jpg": "aa44ca4ad19fbd07f48bfbff771fb5a3",
"assets/assest/notes_app.png": "734e1155c38ca63178707f204d955f50",
"index.html": "cf4781245130bb7ce894853c01516519",
"/": "cf4781245130bb7ce894853c01516519",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_bootstrap.js": "f3d09a9264cf9526cf134dd8c69005df",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"manifest.json": "7fc4e9a6deefb3a950cbbecb9f6e8574",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js": "eeb78457994ce98a4ffdf9f3024073b9",
"version.json": "5eba2b3f48e84c0565b6c84a1e17c11c",
".git/logs/HEAD": "3b5d314057835a68c0836d1a95157dfd",
".git/logs/refs/heads/master": "3b5d314057835a68c0836d1a95157dfd",
".git/logs/refs/remotes/origin/master": "7c7a1ef36a659f13fc63cae35d8600cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/5e/264acd58e64cd79f3719e3f7b61a01f2986424": "2049d90c8fe2cf026a32c0fef09dd56d",
".git/objects/2c/3d20aeb5ff0cc4187fee74c2e5917841ad2c9a": "e7e3291c30b3656765534101b4c2f444",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/a0/d02f18227c522e3fedb95cb39c25e635b81d21": "be20c78da9349970635140da3af6b250",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/e6/9b453752bd28a219135eb509c812c46437ae94": "ca4560f9a0a1efd55b990437df8dedc0",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/f7/d50b91aaf69a6c91ba81355afbabf974d70e9c": "773ff9ac0c62ee402f956ef3aa9dec66",
".git/objects/44/56e8ae906ec01b9d7bdc3fafa2a887f36a9143": "73ff9fc86c585d54e16e8e7469bdf93a",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/b4/7dd152e8f23b33b8024b8f40888d614d55813c": "495be7f9a3203e68848ed2375ad2e19f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/2d/947465ca35541ee5d3f60666adc344b6fac15d": "425330b8a4052183673344523ba32a0d",
".git/objects/8e/109824ba096fc7d80766d39b4de447eab62eb7": "af47571d45191bd466fa75639472d221",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/ea/0a6cabbd528ec8f4b1de72e032e5980475cc46": "74c542e131d646b6d78e019021ec1a11",
".git/objects/8b/64a93619e8418a021747e6031d020d9f22ad79": "67bde49c466b7f13252f567e5adbbf49",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/67/df0494f098ca0ffba2dcc489ec601290c060de": "ae3c998012e54a05482699509f91a068",
".git/objects/aa/97e4f3f18569551f007fc6dfc37ba02d92d834": "da4592cad2761c742b4ada16e4fba8f4",
".git/objects/6e/3bed1b3f039f4baa8e374e067a48c9f95154d7": "48957e889f1da31c23c4a8c4a2ec2d38",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c53578f428c7bb975c0e10a3c7b382cd3f9790": "85279657fa2578138644ddebb9bbb195",
".git/objects/b9/099e21ae13047109fcc7273c48d76844af1f8d": "2a137a09b8fbacf282516da5678eec87",
".git/objects/ce/bd15085e235e008a713a76a16aa7a126522f66": "c0bed4b54e93179301130373f60557c9",
".git/objects/e2/c0fb9e1152399e494cd9ed57ae4e377ea100ba": "5d30a116d79819276295c783fefef82a",
".git/objects/5c/d86961a444d8559516e816a2b0e8a3aa5493e0": "34cbb2a44014af193350d9120ef902a8",
".git/objects/4a/da187fd7a0a20a97d37b0e4a675c7a7fef5faf": "0761b5d62e9e4570fd2e2b1c20722eda",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/4b/5dd3efa04f61c1efaa8291da828aa2fa4fdb6b": "d4881aaaee1b71c8d11fd2afaf47892b",
".git/objects/37/7ef34c9bd0eac6614b30dccc2e8f029a6320b7": "1467c349ab1cd1c8d8cf9b7cb69a1d10",
".git/objects/57/e0f18a6ddf6d29e24c04a74e454dd1715d54a9": "093185df41f182fa0e149071c7b862f3",
".git/objects/16/afac266909f679ca442f7b985673d2642b6eec": "7d55636de5a6fd523044989de182aca6",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a2/128516fe5acada85f06c16c58662ac7c2d75fd": "2114f2ffc8f0a07deea8641c89337067",
".git/objects/0a/fc21626b82b807374b4ae3c938500f031d25ab": "dc83a23479ac912d15c18dc4430a4f9e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/14/815308c3b7121dc0ce480f4819b42d4a7785b7": "123189ab050d30a5de7605c40931d200",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/cd/4050498fd8474f2e374ca2dbbf292cbd0556b1": "a53e387b951d2d88616f9da839e0cb4c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/ef/ded7a2ab70d3ad6f91736532d6eb57afab8066": "4ff56ce83841b8bc14e940822f46b778",
".git/objects/32/38b67f410ddcd78b7dcbe0d6a87318936cedee": "da05cda91d6d18dd1d2ef0c47b9f5721",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/config": "468e5fdf77653346027d9ac8239a3afd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/index": "8c791edfb44454f2f7a82000f8aa9e28",
".git/refs/heads/master": "961dec42368e7bf872bc08d1d32b4f5e",
".git/refs/remotes/origin/master": "961dec42368e7bf872bc08d1d32b4f5e",
".git/COMMIT_EDITMSG": "91ed39e46c2a03ecf7d4622a6f1ccd12",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
