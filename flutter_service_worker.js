'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5a980d5ec1ca62a8acb77650cda5a16e",
"version.json": "0c666de49e0166ce18cf835f64c14381",
"index.html": "832703328589160dd3a35a079bf54223",
"/": "832703328589160dd3a35a079bf54223",
"ultra_fast_animated.gif": "1f36943419d568794126f3f4a49552ba",
"firebase-messaging-sw.js": "e1b8eca9d5ca5ad77aaac32a0731b384",
"main.dart.js": "00f9c869cd77dd140d87f248a32d29ef",
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
".git/config": "e08c49bbd46bf55243e672fc7b422f36",
".git/shallow": "00e1108cef379a8af9e30123f79583ed",
".git/objects/50/24f354c780a8870973544c9d6083551e077c17": "1eb30bc5f6a0c61864ff438eb6c83a7b",
".git/objects/68/ff6cef004187ab100c62c3d18b842fe832e10e": "b0c19b27d02733307e2105f32a6ea8cf",
".git/objects/3c/7c95dcaba46c8cdb91a5132c793147374142a4": "d19b1d3a3d9e983052d6e2a676226b14",
".git/objects/9c/d8a84bb2d1e45143eae2d1663dec898da14c78": "a4283f5b405e1ea2d1fe29eda0cabd57",
".git/objects/a5/327bb4afcf53c6704b77e457b2843f4d373d5e": "518e7e12d6c0188b8f5d5aef0c776be2",
".git/objects/c0/31a95f4880c9c2feeb772421e4b6cc3e255885": "532ea5df9ee832ed73f91912944f5756",
".git/objects/4e/778d56f4a5eac6f90fc9693d8d5a036d6ff7a0": "68cbefd1ca59d68b7606fdf16de58318",
".git/objects/27/4f13abd9841338c18bb87007e9ed2f3042565c": "5ccb3b49fcb467d161cba03b6415944c",
".git/objects/pack/pack-bb29a9d14de8f5cbe4fb8ce3a6a11117b2cd10fe.rev": "616b873d098a5bb2ac307c7b19e31c84",
".git/objects/pack/pack-bb29a9d14de8f5cbe4fb8ce3a6a11117b2cd10fe.idx": "d10c2cc1b637ae6e64700571a5feb694",
".git/objects/pack/pack-bb29a9d14de8f5cbe4fb8ce3a6a11117b2cd10fe.pack": "572519c6f0c8076329a66d283f449c79",
".git/objects/17/057e3454fabbcbd4fe8aaeac24a31d02df8016": "7f890db1ece7103ce5b1e553c906e368",
".git/objects/7b/af9bded27b290c33a46ce59e00ea27eac00b02": "9b9fa09a7caf1e522ec8aef2f3022075",
".git/objects/19/09255b0fe9c86bd48e0bed9346af0a1f508362": "5a329eeb579a004d97e932420658052a",
".git/objects/9f/c46afa5c34338cb504a1653a4ae5996f099b9e": "3ca38ed4146df367cb7eda5fe217dfb1",
".git/objects/9f/a055a4abe8fc79f1c3db37e5802f66148762be": "8d5b0405322fb211cfbd3429afd8e035",
".git/objects/6d/24589a10676d2d064d04bb76d9cbffc5d08dd8": "de28b40a04d974afb55e5ebbf1252a8e",
".git/objects/a6/b62331285f1be9791f4890792715e424efdcdd": "91dc37d18c6b2e87b39b27fd00eea178",
".git/objects/cd/b69e4b2b3c749f07101113e38435484f1bceb4": "8799914b45d9969184f44699192ef15f",
".git/objects/f7/faf6571bf5caa0ab1ccab65f167035ed575b3e": "cec2a1985a4401ac8acd9922dbf75d57",
".git/objects/79/dd60031e3d117f5cbcd97d652c19b85a6ee3b6": "95ddb9d43a8819e9f7a8d200fe8ddd4e",
".git/objects/12/eea545a65f174b1a7bdffa929e891fa6184c3f": "9e329ac28d62dec7776dc4a6ed771656",
".git/objects/12/4479e74aa6fc22dd99d0aac32fea5b7fa1166a": "d36ece2edf62de353362d0b7fbfeabf3",
".git/objects/2b/50d680b20279608bbf04b7eba6af8be755efff": "ee0db9baca8b8b8a8c4e8ec1187d4254",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21e033a854732ca06141bcac22f3ca0b",
".git/logs/refs/heads/main": "21e033a854732ca06141bcac22f3ca0b",
".git/logs/refs/remotes/origin/HEAD": "a30335c4d705c9ab263e8e5a9e369601",
".git/logs/refs/remotes/origin/main": "c1260c294984968e6b3aab87132b5b6b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e3f399f20af2dc073aab7d363c62440b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e3f399f20af2dc073aab7d363c62440b",
".git/index": "433a9e9de05eec2aca4ab1a903ed7493",
".git/packed-refs": "057728f731d6be905ff417f87a57a1b7",
".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
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
