'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bb29faeba7a357378e9856eec1569f31",
"version.json": "ac102ad1c8a4a29d04954f3c33b8255b",
"index.html": "108b33736fe8fe439708344b4ff0ad61",
"/": "108b33736fe8fe439708344b4ff0ad61",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "f1917c295bf5f533fcf644db68fe3f2d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "b7b4a4434f796b519ee6ad67b1e742d1",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"icons/Icon-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"manifest.json": "466d3c055c26bb3a913e289626fb99b2",
".git/ORIG_HEAD": "a132fa591e8eacdc5d7d5aa02082a47a",
".git/config": "be11eeb67af7a9a83f35ddc0a6acbbb6",
".git/objects/92/4f11a57e46836e7eab14d01b526ca4e17970a7": "37393e6708b83d9a13cd92e1966a2c75",
".git/objects/3e/fa2e3d7f301fade8ad5d5909e93807caa63c03": "552bce654cd77613fe8bf3008d839286",
".git/objects/0b/dfaa485713c9a602b2d458ec23ec2b1575f6a9": "f25c95b79e8d13243d22078568c95beb",
".git/objects/0b/da72b4e8c191515b7205d84c005c27a6530463": "61d3bb09670afeb654653bca90024d8d",
".git/objects/33/7f69a45e49b064fffcc962ea77d3c057b21448": "65717f699b73126000300de7287a53e1",
".git/objects/33/e89227cbeb0ce285a144737da7e2e4a7bacad7": "876c57081d3452bb583cd022ce9924e3",
".git/objects/a3/75077b23eef8bd5b3548cd3aea44c07b11d2d3": "57e675cedae473d4f91cada27bd43265",
".git/objects/b5/fc5066ce788ad0967ae0be3bb0c3732c1b6c74": "c6c8bd12df046e1a0e00de958b83af21",
".git/objects/d9/16dfea19df70ca8bf49181dfd48837596887ce": "d296e4781bc039469405e3e45170b3de",
".git/objects/bb/025d430f1fa72364573d20e0707618c8ac5bf0": "08f0452e44ee2e2f7f77e3ea72188413",
".git/objects/b3/2ca12a583bf38898704c695c5e08f51db3a815": "4be4e258ffdb835eb66ba2900e931d9a",
".git/objects/df/653201a8920968a889097e7e6645320a5c3205": "c733dde44d400731dcbf0fb7179851e4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/3b938053548603601cb07cba64cfff42a04ee2": "61bfa3a10eceadd8569e344c0335bd4a",
".git/objects/f3/fe1f5de62a0db1cbb43cb2002b85bc3a23630f": "b5344e744660d935ed98f4d30fc63e49",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/bd0016d056113bb45ee901bf20dc768d00f1ef": "b5ca029364d506fed02243e15695fe2b",
".git/objects/fd/94b42d8ebe2e6d36426b6e1978cdc374928fe2": "d6af024549577ac3fce3b337b1cca251",
".git/objects/f2/4a1d6b3225e3d84b37e2defe0994a4ba3da80f": "b3a70824de95b436227ea0e6f09121a1",
".git/objects/e3/68f21c7412cc591b3fe4174a93e0b3751c92d6": "c08c57d873c6c57e66885f77f4bbdc48",
".git/objects/ca/9cc2163f7b882ba00db062d4e2705d68916395": "dfef36b80f94f829a936faf8e3bc6ae2",
".git/objects/c8/4f618f9f7a5568676a6300e7ede0f9f86eba40": "c43305a2ce423b7e55268705a62f7555",
".git/objects/4e/b2c287c524a6fdf33d022ece36fb81780e50fe": "2d6e26c21a1b7d225a66cabf91f706bd",
".git/objects/20/b3505256962ca0090b6a00a36abdb57927597e": "07ac12ff10ad91f78f746ebec7437d64",
".git/objects/pack/pack-530e67b1063f06432ed17ae8ee73440b5322fae5.rev": "12074b235b4ef3999aebbd27305beec0",
".git/objects/pack/pack-530e67b1063f06432ed17ae8ee73440b5322fae5.pack": "8f2f13af5d46f6896ee7166f67b87a3b",
".git/objects/pack/pack-530e67b1063f06432ed17ae8ee73440b5322fae5.idx": "c446fa5406496abeb0720604bfc3b247",
".git/objects/80/f019ded5f5af27535cfce220f5608d6ba77d32": "28f8ee9fc6628613a65adfdf194f6623",
".git/objects/74/6d7aafe518535cfec691e89999bc9d1cc91791": "fef6a7dff7714c14e7e14e3dd3630ca7",
".git/objects/7b/395bd49ee3f5d442cf19f9b90e0da38e015410": "0c080ca4012f992622a093068a78a5a1",
".git/objects/8a/9455b47498473d3ab9aabf95ac643ed5ee78eb": "0e85a81c4b381a8dab9220407c4fd52e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/069d9c889f64172cb1768d8838fc2eee0e75a0": "cf292f36b5c7301623462da5d2d91e74",
".git/objects/86/e79ffd6efe8428552b47b1b106a7b5d7f840b6": "be81b05ddc695994fc2a35be233bfea0",
".git/objects/2a/360165deb3d938ed40a7e27db7b6c6c2d9d47c": "8fe481928d21b1dce71c2d9141e9108f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/6bc2dcce3b7032e91e82479b4df26db238c06c": "42cd2018847a42a46e0b073fb074c211",
".git/objects/5d/042259eaf0efd296ebfd77774eadc2b9292d24": "4d46252fe95d30e2ea766e3912d98bc0",
".git/objects/31/1b5031603afcc9911ac85c2fee46071c21c7a8": "992c97c490c3d54e07c48f01b66384cb",
".git/objects/54/49e8099de580a8b681f5dd13d4678df8475d5c": "b37fe831f3899f5bb368c433a15ec454",
".git/objects/37/1842ef05bad4420959e0e481714af45cb1af87": "4d0a339173e96f98f1d555ede0f759c8",
".git/objects/d3/34f25d83d2a84ed44f5e0e41440d745a0d1a7e": "5d2690ff8aa29f2c1b9bd569dd1501b1",
".git/objects/a0/7b4b22884b402e4778e8fc86d8d09985f3e39d": "f6b7413c448e15f02800df20921fe76e",
".git/objects/b8/4eeb7027f6a8eab91d679bb4389097cf34342f": "5bcf9873b75817e109fb37d8efa4de4c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/70049c0cace0781672a3cc5b47293f9e95afe1": "3761ba254191a563a699efc565b18249",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f7/e6ba721ac4f122b407e10d82ec7c9ba458514d": "5c26ffac9579fc62473983051f1debbc",
".git/objects/e8/b4767d5b45f4a61050b4bbc9eb7fd7693682c2": "80f2e8824978efe183e563ebf9606afc",
".git/objects/e0/a3f503ebe44268996ae593f67a1d56486d101e": "d6b73a96a0c4295384f9901b9292b92e",
".git/objects/46/14be60014ab4571523c8ceb0c4a9cea4cb2588": "f4c5283b8b4e35022363dff74b64cb7c",
".git/objects/79/a70271d9d5554f227da1aa9a565c5966fc2fe1": "6ca6ac97e913b61ae36c65b78cd9badd",
".git/objects/70/0c82b459c897c37ece1788b1ea0b5ac5e92acc": "47bdc70152a28f7954d85441f75bf2f2",
".git/objects/70/d5fce5b9873dbe755228146e0da704ddb38732": "d33e76a7ece373e5a5422653edb9883c",
".git/objects/4a/ab5f483e6cfc222d0469b9fbbc283ed692b23e": "6758b572345aa011bb18da527717b262",
".git/objects/4a/d33662f19921c71acf8144a01f91ae8f7a9726": "a5e3368214901db6ff9f833be26f1839",
".git/objects/4f/12b39e6302263991d3468b510687d37bcf2d85": "bb51cb67434557a8f58aa6ebf09aa7d3",
".git/objects/4f/d3ffaaa3021b72f113b9296570d716b7e45d06": "24ab2c915184b7244ecbaa6e28270e8d",
".git/objects/15/e00312659913209f6cd5a0ffb45bfa411247ee": "3bf45a573bccc35732cee516d03b112b",
".git/objects/12/32ba7c7ef2bdd9a17f3940e89d08ac02442251": "4cd2b2dc87b765c277562d2913438548",
".git/objects/1d/47d08697494f4944c6ff1a710f24db3473e87c": "910328579769409988158d674b6cd5b0",
".git/objects/1d/1d23c26b68cbd9b3025f3597aed62174f44a8c": "d3d1ef53789045726553d0ffa94b0f0f",
".git/objects/71/d41728e64f7b173a37233c28733c94501ac3cc": "507481ea71cd5494266c2348e2cb504a",
".git/objects/7f/86db99a9947b3c8e3d3f486727ca64674dc2a6": "ed2c97c0c2a8256dac0647394eff090b",
".git/objects/25/b639277093fa33384cba743228b4004ede9322": "6cdb1958b1ee6a7d14af992cfd4d3f29",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0f8726eb5fdd740b3b90ee1f173bc84",
".git/logs/refs/heads/main": "c0f8726eb5fdd740b3b90ee1f173bc84",
".git/logs/refs/remotes/origin/HEAD": "4ae7b77d5423aa65c84f7a76e24e14ca",
".git/logs/refs/remotes/origin/main": "b8fd29867cd0d493c34adfe84cafbba6",
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
".git/refs/heads/main": "58af109922abda061841fdc56d20748b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "58af109922abda061841fdc56d20748b",
".git/index": "a91c5c95376dcf8286b9cb485b34a224",
".git/packed-refs": "b6b1078eb38a85a3dd231c6cad4b3633",
".git/COMMIT_EDITMSG": "a80dc2cda8fd5a278f1fce4dfc7beffa",
".git/FETCH_HEAD": "4e82df97b0e1524af9200bccd11b57ee",
"assets/AssetManifest.json": "52a339e55f44dd2ef74272a520eba5af",
"assets/NOTICES": "5d8581ede50814d5b778062b183ada92",
"assets/FontManifest.json": "3be8ba3ac6cb2670d2dbc1a5dfee2fa2",
"assets/AssetManifest.bin.json": "6c82e59bb0e5e06d2447f7d1f03c0176",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bc26e48922267b94b1e5aa7dd73f0d2d",
"assets/fonts/MaterialIcons-Regular.otf": "7b2a692efca7e93eceabca07c9938462",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/motifs/heropatterns-white.png": "e690645bd17ce0be722abe7d9c3d0015",
"assets/assets/motifs/heropatterns-black.png": "db8a9290897fadcbab79a3815fed68c5",
"assets/assets/feeef/feeef_icon.png": "5465a322397229c128d11b2e29b168ef",
"assets/assets/feeef/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"assets/assets/feeef/feeef_background.png": "cad8fa9bd9ad45f1596016883d049f19",
"assets/assets/feeef/feeef_icon_foreground.png": "532a21a1ac3980b64e9c29c95d9c1aa8",
"assets/assets/feeef/full_logo.png": "48b77d60884c105b25d1b3bb94ebf562",
"assets/assets/feeef/logo_text_arabic.png": "9b9c5e718ff98099acd8acdda3c8d8f8",
"assets/assets/feeef/element_3d.png": "090734a979efadcadc48ba24149e6272",
"assets/assets/feeef/logo_text_english.png": "1df8f3fff22c6885674d98a072cc62b7",
"assets/assets/feeef/feeef_logo_mask.png": "4fe9368fe2d2ceec01c5f1b530bde6be",
"assets/assets/feeef/logo_text_arabic_english.png": "6e715b05c0ca77c4638d1d43ea717bd5",
"assets/assets/integrations/ecotrack/logo.png": "df0f636c10d4254e799c43de8d6d6fc2",
"assets/assets/integrations/meta/icon.png": "daab63f1346aba43129d8ece72499db1",
"assets/assets/integrations/maystro/icon.png": "cdacaf7b2f46cd5d818991d25f485f3b",
"assets/assets/integrations/yalidine/icon.png": "56f01721eb287c110abad0f75fbf82ca",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
