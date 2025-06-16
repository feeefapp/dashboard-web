'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ac8060abe124af593ed430b88583dfdf",
"version.json": "0fd5f21438d1c6e03e8628b954530eab",
"index.html": "b8189f10896b01100a0d19806ab80500",
"/": "b8189f10896b01100a0d19806ab80500",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "2f149524c6dd0bda2799b4ea63b7d03a",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"favicon.png": "b78c10780ee3328f1518dfad2f8fb803",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"icons/Icon-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "715e8162477d7657161136bd3197d15a",
".git/ORIG_HEAD": "d2972e1bd2ddf5564a2f9ab0755fcd1a",
".git/config": "19c0f3787834ac5456b8f197edc7c19c",
".git/shallow": "56ea6cd3c19c59825f04b5a3a59923de",
".git/objects/04/205188c830c6a57d288cc3ac74caa68d932b8b": "576d5ea9acdde6f96468b3dc120e600e",
".git/objects/69/80624c253bbc416e8b9f82d56190cf419c9d1e": "8deb4fc4c074117924c0899df6d5293e",
".git/objects/56/6f30e6743cb14d659a0960b6a8648e12b9b55a": "0f3957bb4e1362015f472e8b30258bd2",
".git/objects/51/fccac6323a19acfce9a3be0101dcee8169acae": "fa0738a1b76c0a578590e63a39215d9d",
".git/objects/b3/1efcf9014f4ce1e8c5e3e988e0504819a5fa79": "801df81ff69636faa6ddb254fc3651d1",
".git/objects/ed/907fec02ffad90275f45015f059db10bc6e7f5": "6947cec18b4d5b1791439624edcd98bb",
".git/objects/4e/d8f85835fc08ea1e5cb27ba47ad067741a838a": "20568539a0a7128eaef6ed83839701b1",
".git/objects/pack/pack-2780837d5ac2280ae0fa248676e992b602997978.rev": "bae07c22e6c5eb374832fa76235282e5",
".git/objects/pack/pack-2780837d5ac2280ae0fa248676e992b602997978.idx": "9ce790372012ec92473c71f5d3128da5",
".git/objects/pack/pack-2780837d5ac2280ae0fa248676e992b602997978.pack": "f848fdbb76ee8ae4a3082349f134e683",
".git/objects/11/89274d2e3e0061cdb7169cda746633cf8bc6bc": "f64e3d0b8bb010d96db48765cb8d3b3e",
".git/objects/74/c1e5f0d692656c5af26352ab358c7a45147f70": "a02c732036515406e00f8bbdf249b0f5",
".git/objects/21/a6fedae346c544a04e62626e1d18350ee7ee66": "4f4e44f6b0b4ab11d1fcf27ec09434fb",
".git/objects/6e/046406730a9024b4686a42882ca34f3ab1b8e0": "782585f4484179bc3278a1d6e2adee47",
".git/objects/91/0eb42ed523da69a87a6ca16dd0a457910efe10": "cf2334632e57c75be9bfe823c847501b",
".git/objects/98/4438fe2fef6decd41a95013328319bdd2142c9": "421759b395f05d65b2c376aef92f1a45",
".git/objects/6d/317f017abe65c1fe6887abece982c1f83aeda7": "41c70a799bba099b7e27f0eea2325f3a",
".git/objects/0a/cac9554a05a35a72ff8e3d5c11f8768a684bf1": "2e0ed27184a54b60873e5e8450b0a50c",
".git/objects/64/995d3188b9145443fa99678e422fcfb082b72b": "b9bbff9ad0d1611b09cfeb49d0035579",
".git/objects/64/43632ae0db21c33d4f25767c6075d70a7c2dfb": "a68d78fb5d9eccc4629e15a9d3bf0c6b",
".git/objects/a0/7e3828a0682e58ea3885187c8285a8e8e0874c": "aabe23f1a200ad369b77afb6c7ee04e3",
".git/objects/dd/2597dc590dd95dd7a30437c8e8bcb9c32e7314": "fef00e49ad34db58462f3ed765b63111",
".git/objects/a8/2c2171c6b8d54dd8cf2d240965b71b74f5448c": "4bf832bfea1c567bfb1f69021007aee4",
".git/objects/a6/2e720627f82aad60a665bffb59ba69499b8503": "82bc1fc9c63a22bc8f8aa193e193bcaa",
".git/objects/b9/b01412dacd7ed9af5b27d66250e0f2c4b8203c": "d89bc49ad925018ba920385fa84a32a9",
".git/objects/f0/649e0df0a31c9d1338133d6b957d6e999acf00": "ff5d7a6266dcdc454a5d498f43640fb2",
".git/objects/ff/ac0cb73b74f164ec444e143c7c92f0ec30190d": "3205a74bc3c0f55ee03d782f7116ca91",
".git/objects/cb/544a4d59584b30270c5f68f04f6494d1b26aae": "4240b9d7e66a725b44d5736c3a72da79",
".git/objects/46/0b9a986c984e145be88f615474924f1f1ccca8": "adf649bfd4bf7f64220f9fbcd223f927",
".git/objects/79/2d499819dd1f826ff5d58d30e86e460a6952a8": "f3c7ed5ab98d0571710668a347a57c40",
".git/objects/1e/f1b7a0038bf7c2975835793494b54821b9bfba": "62a6a171ee84864b24fdfb9ccd4bebb3",
".git/objects/47/bc4397557b6bdf946abba65a5152e533e387d3": "ae44d5a8bfc42776a2ccf5a0226a2a5f",
".git/objects/7f/d161a6c2f122e4f638caa09cfe4ba4d42fadd1": "a9083b6458c97090ac97549c63a27be5",
".git/objects/14/d1fb932a2319640eb75b0df65cc4d57ab89f09": "f0584eafe2983e300dc8076f0fa37a17",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "400ff0f2356bc360a35a4faa5a2a60c0",
".git/logs/refs/heads/main": "400ff0f2356bc360a35a4faa5a2a60c0",
".git/logs/refs/remotes/origin/HEAD": "7bc059f9b4aa685229a7d9acfe46b8d0",
".git/logs/refs/remotes/origin/main": "9be23f35f422ce2d5ac93921249dd8bc",
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
".git/refs/heads/main": "d2972e1bd2ddf5564a2f9ab0755fcd1a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d2972e1bd2ddf5564a2f9ab0755fcd1a",
".git/index": "07333eeff36fe599587764cf16dbfc91",
".git/packed-refs": "2f9913351363ec69e428e6d294b37c2f",
".git/COMMIT_EDITMSG": "8f193f4668f271306ca3a221eb7fdfed",
".git/FETCH_HEAD": "db9225bd9cac5a9e0eeb19447f4bb0e4",
"main.dart.js_3.part.js": "55446e85a0c622147ff648b449229875",
"assets/AssetManifest.json": "ea702c182f9edd62274b86f9834b586e",
"assets/NOTICES": "36d72a31a6e4494a66212da5e56dd071",
"assets/FontManifest.json": "cd5dc4e497cb3ab85d5bee3ccf610c8c",
"assets/AssetManifest.bin.json": "102a0a9f9c56055b00341499e18514b9",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass.frag": "3c746044953572d8595996c04a351379",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "8ec508eee0436d47c2ff0a38cbfae9a6",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "d0680f3b23a29bf2f05c5911e11c3c11",
"assets/packages/pro_image_editor/lib/shared/shaders/pixelate.frag": "19c7cd8e71751bf1865b0784e2e2ac8c",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ce17ab96145bfb913ee50b77204e4458",
"assets/fonts/MaterialIcons-Regular.otf": "12d288069f2f34c97f8f6aa0179a1eae",
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
"main.dart.js_2.part.js": "c58c7bec5c4fa91f5297847c56fdd4f5",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm.js.symbols": "904aa9cd0e3718f06981fad267fea5ab",
"canvaskit/canvaskit.js.symbols": "4579c3a2644fe20c7f8495644ad35c38",
"canvaskit/skwasm_heavy.js.symbols": "10f2e2916283498fd095622d70e02304",
"canvaskit/skwasm.wasm": "ec06ad7fa98846beff7a925010fa323e",
"canvaskit/chromium/canvaskit.js.symbols": "d29271f8faa7fc4b0355218fb427a92a",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "88dc0786b13b9f657a1cbfaced6cb323",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "cec53dd1ee2102fa245ad250f918cd98",
"canvaskit/skwasm_heavy.wasm": "d1241e4b140f4d536ccb2ede46b182f8"};
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
