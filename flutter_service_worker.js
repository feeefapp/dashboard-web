'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cabc8c844fec423249528f7fd9f0cd01",
"version.json": "20c488706863b9dafedb613b60547d2d",
"index.html": "79eca242ccf84caec135d697b20975bd",
"/": "79eca242ccf84caec135d697b20975bd",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "a167dc2a9f3d397a0c34ec715c1dadbd",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "b7b4a4434f796b519ee6ad67b1e742d1",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"icons/Icon-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "4b559a630d92efb02797986c7a020be5",
".git/config": "19c0f3787834ac5456b8f197edc7c19c",
".git/shallow": "4c1f1649557a5edf5c1541181a6d78e9",
".git/objects/9b/9adeeea2c680405d12aec0d480f00104ebe779": "173553170e58f6b573fdf5e84cd9029b",
".git/objects/b5/893051823226c95a27340e09030d2668723adb": "e1446e64fd5cba11b753f07c7f51ce87",
".git/objects/f3/d5d44c6fbda199b6d1067ab367974d8bcf6789": "0caab835503b1d545dd378d0f490c94f",
".git/objects/c9/6a0653292d873206219968f102161a6d9be516": "2b47c455fb3a2161bc339242973ca083",
".git/objects/pack/pack-bfef6c6881d5d426a03e0e41a271cd97a5f5fd72.pack": "3185849d0f0b01a7b9337304b24c2351",
".git/objects/pack/pack-bfef6c6881d5d426a03e0e41a271cd97a5f5fd72.rev": "5e4f8918f9b01af8c565b0d9aa864105",
".git/objects/pack/pack-bfef6c6881d5d426a03e0e41a271cd97a5f5fd72.idx": "bf320b6bf64075d27ffd087bde074858",
".git/objects/7c/5a7d387a8603f388474d2cd2e120e1fe37e7b1": "1dba1ba424b19457ceb3258749b77fef",
".git/objects/45/f0b471bbe4e30af69c15778df9c5ee53221a30": "606ee8347e1175270e51fedd5b855b07",
".git/objects/28/66ea38239e6006aa67ab7c662e9e118cd54155": "8b974c1eb0c608f53c86d1b50d15a50d",
".git/objects/8f/c69dcd1b2690e1e1039f570134950b8e097ba6": "f88545f3d60944692faee2065812947d",
".git/objects/86/8bf8b669e3393142029ec9c8ff07a67ef031b0": "f7ef9db1f34050f6ae8ff69679b68557",
".git/objects/44/011987fb0b85ba48e0ce3e7dfd1fdc50bec687": "ce0b659e7beb51eb0ad56e3af1a56899",
".git/objects/07/56b1c2231244afacaae850e746e8ce0c2dd4fc": "8fc05556a752996c7ab40105e312f5c8",
".git/objects/00/7a0496ed454f850d6d9d4e29432d951913082a": "fd8e92d6d3a53d6d6ca703fe203844c6",
".git/objects/36/8259db9ae452b5c930d9c390bff0e3eebe9133": "be40bea9a1e23972cd0df9f441275570",
".git/objects/91/43b60e6da2ce545690c77f8d081d7dab1c7d5b": "5625bfaad50fe479266ab2e9399d2ab8",
".git/objects/96/e5d7ddcda43272fa2b92ba71ef64fa29017d67": "175fb2cb80b3293131f991444e338907",
".git/objects/53/e180b60e6a08fecc5b07c814a859c88079660c": "43157e1f000d7a8716ae549caa0ef97d",
".git/objects/dd/cf3df59fe5acf7c415abdeb03e6108535fa64a": "401d1949eccf1a82ea98544f00daf2e0",
".git/objects/af/48dda43527240634e2924fed55523d0b919451": "3b02ad2799eb3fdc46638e5bca21f9f4",
".git/objects/af/885310ac15b86a43c0c48858274ddf1cac2858": "684f1c9f14a053a2790664fc5f286dde",
".git/objects/af/efb8617acdb4e5fc2b67545a7df94af1d5bd6c": "56bd28a222b29e40b7ad731fd7491150",
".git/objects/cc/8ddfa218a2abf86b4b0da21572c848d211f0ba": "74c123d8d0a9939367a1fb62e8dcac3b",
".git/objects/cc/0a4682e67f568a919ccbf28c9db96507197220": "4626a1dbb0d5363401c0deb64b9fd304",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "31658494cc208ad3162a6554c261986b",
".git/objects/e9/6be0acc5164dde5ce784cab57b09be6f059fa0": "f14e459998fe650e9dc96f4823108900",
".git/objects/2c/bb988f9c3b67e84aba381a238d018e9e20e238": "a9494d9f1ed2ce08404bdec7316f3103",
".git/objects/83/b42388cb2ce06639e56ce3cf6c5d8ae4b0f2d5": "602191abca81748baf8d1a3882dae84a",
".git/objects/48/33fed25db4dbe5b17e36909c25a23a8080c8e0": "2d0cf0df3aadc70da322047be11dc030",
".git/objects/1c/2bea90150a00af1a95955a359d2b79fc56e5f7": "434b79611722eaa3d29fc6881e0c3b9d",
".git/objects/40/5b946267f19a24491eb5f910952c4062b18965": "c0bb19ff222c34ab3bcef2deb87e3b29",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08d42ec61274c60f8fdce44734e36c48",
".git/logs/refs/heads/main": "08d42ec61274c60f8fdce44734e36c48",
".git/logs/refs/remotes/origin/HEAD": "971b992c6119f0ae34893bb55041afc5",
".git/logs/refs/remotes/origin/main": "9a79be3e48cddf5d6658155937fe2087",
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
".git/refs/heads/main": "e2d93d325658a6d307e5012318aa904c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e2d93d325658a6d307e5012318aa904c",
".git/index": "66bacca4eefb20477db65dec6460edd7",
".git/packed-refs": "2471d41e16b2ed38c72ac7b6f493c6c1",
".git/COMMIT_EDITMSG": "a80dc2cda8fd5a278f1fce4dfc7beffa",
".git/FETCH_HEAD": "f40b63b2b0efce130d7f33249e384ed5",
"assets/AssetManifest.json": "9edf74155cb0216640f0642de6c16e26",
"assets/NOTICES": "8e7aa8d0c44cd51d675341a738cb8737",
"assets/FontManifest.json": "128ae4635b000ce89197847ff6836c77",
"assets/AssetManifest.bin.json": "1ffa9bef64e9482f97b7d547f847eac1",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "e03b267aaaf58e875458f3116cc32b0f",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.wasm": "1db8e76780b383ec5d5ea55425c0db02",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "94c30ff8f50c145fcf4a70f972fce965",
"assets/packages/pro_image_editor/lib/shared/shaders/pixelate.frag": "19c7cd8e71751bf1865b0784e2e2ac8c",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8a0c5f3f6fc386d1ebe612fd4fbb9884",
"assets/fonts/MaterialIcons-Regular.otf": "c510849df4f61bcb0de0e19dcaa857d1",
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
"assets/assets/integrations/meta/logo.png": "46cc3dbb06b4c5f5d4b666a0110c4beb",
"assets/assets/integrations/chronorex/icon.png": "a7e0f3154077b237d13802e9d766b1df",
"assets/assets/integrations/chronorex/logo.webp": "dd63ad48ba10f7326ec7f2ea22f846ff",
"assets/assets/integrations/maystro/icon.png": "cdacaf7b2f46cd5d818991d25f485f3b",
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
"assets/assets/fonts/alexandria/Alexandria-VariableFont_wght.ttf": "9d6b12baa3fa9324502098b13d8a25f2",
"assets/assets/themes/ramadan3/dark.png": "60bb534dc36484e96ef05b94bb69773c",
"assets/assets/themes/ramadan3/light.png": "e64d4f55cbd1548a942e9fa40c7a8e74",
"assets/assets/themes/ramadan/dark.png": "39fcfe35a2f31abbb23f790a31a37e1d",
"assets/assets/themes/ramadan/light.png": "6ea4e09ef69c518db78b2d21c9f293d8",
"assets/assets/themes/windows/dark.jpg": "bda58297ce5a1e74fcd8649e69ba7a22",
"assets/assets/themes/windows/light.jpg": "8d867947db259e63287d55ddceb39355",
"assets/assets/themes/windows/light2.jpg": "3a44ac7670229b9329bd9815c14b8e91",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
