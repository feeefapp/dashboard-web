'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5c5451971f2e5f2ef36a3fd29ba49dba",
"version.json": "080998b3c0c8acb2b1a5004496fdb1b5",
"index.html": "e574669caf5c93dc0d88b4214be3866b",
"/": "e574669caf5c93dc0d88b4214be3866b",
"ultra_fast_animated.gif": "1f36943419d568794126f3f4a49552ba",
"firebase-messaging-sw.js": "e1b8eca9d5ca5ad77aaac32a0731b384",
"main.dart.js": "6b95f8727e1338a3cea83f33ed26769a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b78c10780ee3328f1518dfad2f8fb803",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/black.png": "903d03da41602ce03f5c92c4b44e72c1",
"icons/Icon-maskable-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"icons/Icon-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "99b8a5633c8ba45a38a081fcf903294d",
"assets/shorebird.yaml": "4dc9e289d05378a1ceb2261a3798c5f3",
"assets/NOTICES": "4d6497fb8ccd6fc2a978bb4bd8286da7",
"assets/FontManifest.json": "c0dd0cb0860618b664627288ffaaef3f",
"assets/AssetManifest.bin.json": "f791004e256afc026b2faa9658047676",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "aa2a8da7dab8d7940c30ab33054910bf",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "1fd130c38699e6091d14e08d0394d2dd",
"assets/packages/pro_image_editor/lib/shared/shaders/pixelate.frag": "19c7cd8e71751bf1865b0784e2e2ac8c",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9f189c6e84122d6a3573602b888fad1c",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Book.ttf": "fe9a0ad452cd1c07da91ff905ba0d191",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Bold.ttf": "895670f9160dd1c15d871a0c7e8f822e",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Medium.ttf": "61d385606e1cc23125af16a442f375a0",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Light.ttf": "7aae6e71e588f9a3af59c21c23105aba",
"assets/fonts/MaterialIcons-Regular.otf": "a2a3972209124c39783f238ce7a5c8d7",
"assets/assets/maps/dz.json": "80acdeec3fbb2d77798184e77d03c40f",
"assets/assets/motifs/heropatterns-white.png": "e690645bd17ce0be722abe7d9c3d0015",
"assets/assets/motifs/heropatterns-black.png": "db8a9290897fadcbab79a3815fed68c5",
"assets/assets/feeef/feeef_icon.png": "5465a322397229c128d11b2e29b168ef",
"assets/assets/feeef/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"assets/assets/feeef/feeef_icon_foreground.png": "532a21a1ac3980b64e9c29c95d9c1aa8",
"assets/assets/feeef/full_text_on_dark.png": "1e95fcc2c904ce4596115dd675c7730e",
"assets/assets/feeef/logo_text_arabic.png": "9b9c5e718ff98099acd8acdda3c8d8f8",
"assets/assets/feeef/full_text_on_light.png": "870e08ffd4c140e513026b5c632dbec1",
"assets/assets/feeef/logo_text_english.png": "1df8f3fff22c6885674d98a072cc62b7",
"assets/assets/feeef/feeef_logo_mask.png": "4fe9368fe2d2ceec01c5f1b530bde6be",
"assets/assets/feeef/logo_text_arabic_english.png": "6e715b05c0ca77c4638d1d43ea717bd5",
"assets/assets/integrations/ecotrack/icon.png": "e73c01c1228199c214ceece0d8497b90",
"assets/assets/integrations/ecotrack/logo.png": "df0f636c10d4254e799c43de8d6d6fc2",
"assets/assets/integrations/youcan/icon.png": "2bb63c5cc7beb9739df82613a60c38b2",
"assets/assets/integrations/google_sheets/slides/2.png": "fdc1531f4d33475b28fb44a9081bafc0",
"assets/assets/integrations/google_sheets/slides/3.png": "9678981a0d8a2ae78e67c83e7e801e70",
"assets/assets/integrations/google_sheets/slides/1.png": "dfe305d17a9478829c3ab0b0ea0afa1a",
"assets/assets/integrations/woocomerce/icon.png": "a14420906b23e8c6e9682a80917e6811",
"assets/assets/integrations/meta/icon.png": "daab63f1346aba43129d8ece72499db1",
"assets/assets/integrations/meta/instagram_icon.png": "5d50818a65d344cd398a9db0b77703ad",
"assets/assets/integrations/meta/logo.png": "46cc3dbb06b4c5f5d4b666a0110c4beb",
"assets/assets/integrations/chronorex/icon.png": "a7e0f3154077b237d13802e9d766b1df",
"assets/assets/integrations/chronorex/logo.webp": "dd63ad48ba10f7326ec7f2ea22f846ff",
"assets/assets/integrations/maystro/icon.png": "cdacaf7b2f46cd5d818991d25f485f3b",
"assets/assets/integrations/orderdz/icon.png": "6847156b3ea55646e1335f646bc61325",
"assets/assets/integrations/orderdz/icon.txt": "9148e9ac51a7fe35d52116c25063a880",
"assets/assets/integrations/orderdz/logo.png": "8e4226671addec2db3af887ee1336bbf",
"assets/assets/integrations/orderdz/logo.txt": "6b10aac3e4d512d99ac68226867dfa32",
"assets/assets/integrations/ai/bard.png": "bf14b7532583fd8d1564b25793be1c9d",
"assets/assets/integrations/noest/icon.png": "cd79e4b5af848372f200048cd84cefdf",
"assets/assets/integrations/noest/logo.png": "f2c81f422cd95b1a1c6e293d004f5077",
"assets/assets/integrations/procolis/icon.png": "95570cbae0ae6927f756e52968acdca9",
"assets/assets/integrations/procolis/logo.png": "84fffb321f6e8a4534a7cb2177198de1",
"assets/assets/integrations/tiktok/icon.png": "4e385f6c835b6e0a67f62f32ef4b5cd2",
"assets/assets/integrations/tiktok/logo.png": "46a237989bff97b9775e961c7fee42eb",
"assets/assets/integrations/yalidine/guepex_icon.png": "a3245ebdfba497b6bfb438eee0a436f0",
"assets/assets/integrations/yalidine/icon.png": "56f01721eb287c110abad0f75fbf82ca",
"assets/assets/integrations/yalidine/fees/yalidine_summary.json": "25d3c7571348286f49b3049e2b612f04",
"assets/assets/integrations/yalidine/fees/guepex_summary.json": "b8449488e26cc8fe78510c2c3eab0321",
"assets/assets/integrations/yalidine/guepex_logo.png": "19688eba2c1ed79f8c74d5fa5e09e053",
"assets/assets/integrations/yalidine/logo.png": "55cd90cb00f567665c672a7b2e2d00fa",
"assets/assets/elements/white-logo-bg.png": "1e96a1d4382b1b38421a2dfe7c240d49",
"assets/assets/graphics/arrow.png": "61cf15a147b743d638cbc130d8e696f9",
"assets/assets/fonts/alexandria/Alexandria-VariableFont_wght.ttf": "9d6b12baa3fa9324502098b13d8a25f2",
"assets/assets/themes/ramadan3/dark.png": "60bb534dc36484e96ef05b94bb69773c",
"assets/assets/themes/ramadan3/light.png": "e64d4f55cbd1548a942e9fa40c7a8e74",
"assets/assets/themes/ramadan/dark.png": "39fcfe35a2f31abbb23f790a31a37e1d",
"assets/assets/themes/ramadan/light.png": "6ea4e09ef69c518db78b2d21c9f293d8",
"assets/assets/themes/windows/dark.jpg": "bda58297ce5a1e74fcd8649e69ba7a22",
"assets/assets/themes/windows/light.jpg": "8d867947db259e63287d55ddceb39355",
"assets/assets/themes/windows/light2.jpg": "3a44ac7670229b9329bd9815c14b8e91",
"main.dart.js_2.part.js": "c36de8bb80c7be108f157b4c8e62b320",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "a4c4f7b55a9bf3a1c3832187b4b03f1f",
"canvaskit/canvaskit.js.symbols": "36d2b6f6964efb82bc94f33e02be2496",
"canvaskit/skwasm_heavy.js.symbols": "02ff60f0d1710e1d4c1da9c03c064bdb",
"canvaskit/skwasm.wasm": "ae16f984be3d7ae07229ccd77e8c6fae",
"canvaskit/chromium/canvaskit.js.symbols": "ad40d1b53d3bfac12cc929dc8b99f2d5",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "72015727e956a80e2e1f678cce9cc4e1",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "c765ce13389f4d07a9cce87fc25dccc9",
"canvaskit/skwasm_heavy.wasm": "1e558f24e6f073a3ebcdc3e97b96862d"};
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
