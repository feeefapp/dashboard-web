'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "16e444be590cb69380c9872551837aaf",
"version.json": "bbf0a697910dc7b3c95b5d263b00d681",
"index.html": "5e5037846ceedf5cd0a0e6d3dfec5a09",
"/": "5e5037846ceedf5cd0a0e6d3dfec5a09",
"firebase-messaging-sw.js": "e1b8eca9d5ca5ad77aaac32a0731b384",
"main.dart.js": "065fd705567dc76148f00e51090b7c8c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b78c10780ee3328f1518dfad2f8fb803",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"icons/Icon-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "24d7d7b675c10ac264b60f19ff80ae08",
".git/config": "e08c49bbd46bf55243e672fc7b422f36",
".git/shallow": "e36b31894316747d633d370e63e77bdb",
".git/objects/61/5796444980d36774cd50e0a9676b1a50fb3018": "d81be5ed83b48bc0716158827b214510",
".git/objects/35/09b47c64aa50aa39f34ac6802ada32ebf57b3f": "60395d7f1cd0822ac0b8ab14fd505322",
".git/objects/3d/5960eef3e750ca3310f9ddb8799b67a8c1f1a6": "670c6fd673a6351dd88635382eb708a1",
".git/objects/0e/d4d8b3a47771c053161b1985a435d34af9fe22": "f6c6492cdce93779de5d3953d7c92e85",
".git/objects/ad/dfc1af400e1e4b19b3960ff7582edc3821a49d": "c574c200124282229131194bcde47e64",
".git/objects/da/90b94f68877a634d63f7f67837500bc251fc43": "a683990d36692ab9e2a00ed2f5a897cd",
".git/objects/b4/5748f0d120beb329a76844a3592c44dc62caef": "a3e3880d3dbeea71e65d73db7633daa1",
".git/objects/a5/e3cb12726b712aee4fe8dfa9b87eb709c8ba8c": "06bc9c38e377f9cf9c200752b8d340fe",
".git/objects/ab/7ddd97f3f77e91add6c3ed538436d40f7d61e6": "85051c536b8225faae90fd8ee08b8162",
".git/objects/cf/9db956d0eb276895cc38f342ae3fd795931fcd": "5ced729ed55a00d8887f4b8f32600ad8",
".git/objects/fe/a84709a1990a98d3ddc382e4ca949c8370fdd5": "c27f51da813d6060a5174e2aeac74613",
".git/objects/fb/993354bee0f9168466839693c13da246edbc3d": "43430a2e3bc89530db314346bf190b0d",
".git/objects/c6/44efa04b467d1e3b2ba87c2c190fdd65d22dc5": "3e6680d643edeb661afa6703c3fb730d",
".git/objects/pack/pack-d41fc6d535ba83a4f4ea2732636904774b5defef.idx": "a4198defa29a4b0e27d88ec5a3435a98",
".git/objects/pack/pack-d41fc6d535ba83a4f4ea2732636904774b5defef.pack": "3678303aaf6bf9d5e1571db429176681",
".git/objects/pack/pack-d41fc6d535ba83a4f4ea2732636904774b5defef.rev": "4860c3ff1fcb864e12484755ff124caa",
".git/objects/73/95365ffe58ff7875424f3d1e4f85542192f8bb": "8b6ee9a750cc380b97757bf775126b81",
".git/objects/8f/000d387b9b0ea7d0566396a1493b169056db55": "53118695b13981f193563b6cda6c3fae",
".git/objects/8f/a47f1bb033c324d58ed63d285e9ede0fc8ff71": "192b4d8e2dcac24b3d94fb335288efe5",
".git/objects/10/ca102d720b64063833ba018e21539715e9a60b": "b6f10fe527bb9a6846e2a33b2abbf400",
".git/objects/26/70368d154bee9d83fc267ff48e4fc31db7be28": "764f734993b9722e3ba0c31f5d2f50cd",
".git/objects/86/0fa3821f5c23c3bac620375080596486ff851b": "d1afd2a1b84445a6723b0dad8a345b53",
".git/objects/00/75e76d0b96354838f7d9202c18a410db5dfcad": "327ca9dc8bbeb7ad609d311016d54123",
".git/objects/00/93e95b706dff4d81dd123e4b5c017b75bdb5d1": "6642b1a987fa795896f2376d3bafec5c",
".git/objects/36/d3a2e357b46ac2179ee971eeef2245ce217696": "8d3e105c3c3c2e2c4d597cb1ab1f8911",
".git/objects/5c/e48f20b3cd37896fbdbe802c141d1ea32645cf": "2da70ffc61039b73fa6c21b0cb349d7a",
".git/objects/5c/928ab32af2e41c9bf38846cfe66022d9bd5c5d": "977900ffd79eb17672f2f448c1ab9e74",
".git/objects/62/ad2d7b96d8d5fc26dbc81ca80cc91f00ae5170": "3953b19de9153fe32eb405b2013aba13",
".git/objects/3a/96878f1add81d8d6bc7c598c3d9136ea2c01b9": "cb02a5efa433278673320e3d35381568",
".git/objects/97/138b74659d1878e964a5a7ece5cbc8d45d8f7a": "278617ee951329fcce045489c1c9ee71",
".git/objects/dc/41839876dd74a23a8b7dbe09e8782f521bf7ff": "3b833bda58497043ada807a1c1a5038e",
".git/objects/dc/4547d0aa753262b694a9b2a9b46ab483fc7b51": "981f08fb4bd2a1a4f1c5b0cb9728241a",
".git/objects/b6/b9f2f95b6a2f3a6d84ea8db24ba1cdb49f31a4": "dd853f442a252a26339395f6b84df4ef",
".git/objects/b9/4d74f2b42e2cd819d5da711ab0cc1b3d09ac92": "7c8f28975d6b130fdbac141ebce343d1",
".git/objects/f7/aaba67a7f84a4b04d71bc3e2d03184f837515e": "90ff5b6cb30b529cb507691e4b378d31",
".git/objects/e8/97322ba330fe2e300ac2c3c7a58673ed80d256": "d7448b9576485531ab22801b16c1757b",
".git/objects/f6/a3da80eddf77ce1d467acd40f1c7c39e93f5b0": "459f8d1761bd40ebdd39b82ee4084cd7",
".git/objects/e0/27d7be1ca257e9d59f374db47a5a0bd334e2b0": "cd564a2b6625b4ae83a90fa3130d3813",
".git/objects/1b/7b67e35f1c43216766085d17a5064ae699494b": "4d5f9fc0e540b351001987f46c3fe60d",
".git/objects/8d/1e435b72e4b05145a65e976783b90e7f267d01": "97f7032bd1d5eba97fe73511bd830461",
".git/objects/71/1e5c2d981936d9a9e08fb21b933ebf94537dfd": "4d7f818cc434618508a3f2941c5d0e65",
".git/objects/2e/2129fcf4e333db12511efba50b664f27f2e079": "892eb1c96c4b8d378dfd44a206a6f50c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "785fd2963da3e34e1b6c5f5bb6467c31",
".git/logs/refs/heads/main": "785fd2963da3e34e1b6c5f5bb6467c31",
".git/logs/refs/remotes/origin/HEAD": "38912d3d7f00ad5b3514535541892b3b",
".git/logs/refs/remotes/origin/main": "0cc0977113607188860c1c54c5da9b6b",
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
".git/refs/heads/main": "08d9e4471a556be0e1031607cc06cc7b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "08d9e4471a556be0e1031607cc06cc7b",
".git/index": "fe2d9817e05dfbb93295a9df5c1b52e6",
".git/packed-refs": "cec54d5d50fcdc3d8576f7eab5355f03",
".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
"main.dart.js_3.part.js": "f670d86307eba3bbfed398522bcc2c99",
"assets/AssetManifest.json": "3bd143973163c9dc983daf0e32e3e1e0",
"assets/NOTICES": "e8b8691fe9809a1ae49d43e0fb11f198",
"assets/FontManifest.json": "cd5dc4e497cb3ab85d5bee3ccf610c8c",
"assets/AssetManifest.bin.json": "8eb068089e888e62427eaed88476f34f",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass.frag": "3c746044953572d8595996c04a351379",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "8ec508eee0436d47c2ff0a38cbfae9a6",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "d0680f3b23a29bf2f05c5911e11c3c11",
"assets/packages/pro_image_editor/lib/shared/shaders/pixelate.frag": "19c7cd8e71751bf1865b0784e2e2ac8c",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "60051c7b9fc727e08c525b5e94113294",
"assets/fonts/MaterialIcons-Regular.otf": "47b3f4c0d5f523dae8889ec9f1af8016",
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
"main.dart.js_2.part.js": "0fd6d02fb53481b507b4b4da82b97b10",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "1a9aae4da4b9188c315c03d56a3a45f4",
"canvaskit/canvaskit.js.symbols": "01419876adddca9a705b178027f39931",
"canvaskit/skwasm_heavy.js.symbols": "430bbaf7cd06234024ba1340e932ce3f",
"canvaskit/skwasm.wasm": "c92138c2247d77be3983c6d87973ccc6",
"canvaskit/chromium/canvaskit.js.symbols": "e7ca51a00317e84321ed47f5a18c1275",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "0a56b0c592bf1bddd3e6c2d85551ceb6",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "224531fa8a219a8a6525ea90bfb883e9",
"canvaskit/skwasm_heavy.wasm": "93400cde1aad6370395b4a8d1b64ded4"};
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
