'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "72b6c504532c1a899125f22a8acc47a4",
"version.json": "cd2ffbe91373213b5ff96ee21886d5fe",
"index.html": "2c6092289bb5aa173b4f2a181b2572ba",
"/": "2c6092289bb5aa173b4f2a181b2572ba",
"firebase-messaging-sw.js": "e1b8eca9d5ca5ad77aaac32a0731b384",
"main.dart.js": "18b60f3351af3373b4a1cead3bb91570",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b78c10780ee3328f1518dfad2f8fb803",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"icons/Icon-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "3633def70c6bf04198a0722370630931",
".git/config": "e08c49bbd46bf55243e672fc7b422f36",
".git/shallow": "e36b31894316747d633d370e63e77bdb",
".git/objects/61/5796444980d36774cd50e0a9676b1a50fb3018": "d81be5ed83b48bc0716158827b214510",
".git/objects/61/ddda96e5d51f9ec5a51c2480c163952c206ac7": "c78118498057819ad03b9ba5a7f29fb5",
".git/objects/95/9b2f9c83dca431644284c121de70b6b9fef041": "820126e986f39b92e40a3db5a0dfa6c3",
".git/objects/6f/1305e9d7fd9007ba3d3042db0255ae0dd5d3ee": "96a5690ef4c07d73651315a7e0d09947",
".git/objects/6f/3c308b9052e84d21d70b9de3382283c0d735a7": "bf190d8a37471efc490d682221af4455",
".git/objects/35/09b47c64aa50aa39f34ac6802ada32ebf57b3f": "60395d7f1cd0822ac0b8ab14fd505322",
".git/objects/3d/5960eef3e750ca3310f9ddb8799b67a8c1f1a6": "670c6fd673a6351dd88635382eb708a1",
".git/objects/67/83ec4f4185eb9e70cdde12c4a44a03af702eea": "73a53322cfbf65a5884015e4c6e0ac35",
".git/objects/0e/d4d8b3a47771c053161b1985a435d34af9fe22": "f6c6492cdce93779de5d3953d7c92e85",
".git/objects/5a/3e12af36bdf24d8be63720a591297af37ac294": "1d9a31ff892ea75e3a8c11d33e3b8881",
".git/objects/ad/dfc1af400e1e4b19b3960ff7582edc3821a49d": "c574c200124282229131194bcde47e64",
".git/objects/bb/1d89983fd914906906e3577c972334a09c08a4": "863a8ce06a2d207b5e825e5287cdeb77",
".git/objects/da/90b94f68877a634d63f7f67837500bc251fc43": "a683990d36692ab9e2a00ed2f5a897cd",
".git/objects/b4/5748f0d120beb329a76844a3592c44dc62caef": "a3e3880d3dbeea71e65d73db7633daa1",
".git/objects/a5/e3cb12726b712aee4fe8dfa9b87eb709c8ba8c": "06bc9c38e377f9cf9c200752b8d340fe",
".git/objects/ab/7ddd97f3f77e91add6c3ed538436d40f7d61e6": "85051c536b8225faae90fd8ee08b8162",
".git/objects/e2/1ea2cbcb808709c7addb8b0dbbe26be19d80b6": "d909758de9492e04aacf6ef02e9382a7",
".git/objects/fc/0e16e906dccf6e2613bf8afa0b2c5662a3f26f": "b796693f523f77d0578979c1c7118e9b",
".git/objects/cf/9db956d0eb276895cc38f342ae3fd795931fcd": "5ced729ed55a00d8887f4b8f32600ad8",
".git/objects/fe/a84709a1990a98d3ddc382e4ca949c8370fdd5": "c27f51da813d6060a5174e2aeac74613",
".git/objects/fb/993354bee0f9168466839693c13da246edbc3d": "43430a2e3bc89530db314346bf190b0d",
".git/objects/c6/44efa04b467d1e3b2ba87c2c190fdd65d22dc5": "3e6680d643edeb661afa6703c3fb730d",
".git/objects/pack/pack-d41fc6d535ba83a4f4ea2732636904774b5defef.idx": "a4198defa29a4b0e27d88ec5a3435a98",
".git/objects/pack/pack-d41fc6d535ba83a4f4ea2732636904774b5defef.pack": "3678303aaf6bf9d5e1571db429176681",
".git/objects/pack/pack-d41fc6d535ba83a4f4ea2732636904774b5defef.rev": "4860c3ff1fcb864e12484755ff124caa",
".git/objects/42/60f78c5e03843045d1dad3116820f61c9cb22d": "ed7ca1caa644fa6f346f5c2ec16a9c72",
".git/objects/73/8e3d89bf3a0fafb79be1fcf3fb9e7d17f08ef6": "6e7da26b9b784b59aebc4d8b8411535b",
".git/objects/73/95365ffe58ff7875424f3d1e4f85542192f8bb": "8b6ee9a750cc380b97757bf775126b81",
".git/objects/8f/000d387b9b0ea7d0566396a1493b169056db55": "53118695b13981f193563b6cda6c3fae",
".git/objects/8f/a47f1bb033c324d58ed63d285e9ede0fc8ff71": "192b4d8e2dcac24b3d94fb335288efe5",
".git/objects/7e/1a9583d8d70139c796b2596f12e773d96308f0": "b5953b66df5302e373eb341a2277cebe",
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
".git/objects/54/f4b388e396101b465386da5270ea0059fcc20f": "62804c91532b41126a4718361fb5fbec",
".git/objects/55/21ca08017cee6f73c3cd94feaa8de5d57ce21f": "e9109ba8711b6cbfd0482cee66f67a69",
".git/objects/97/138b74659d1878e964a5a7ece5cbc8d45d8f7a": "278617ee951329fcce045489c1c9ee71",
".git/objects/b8/2af9f423021e5349ec4d2487780613ed5c46fe": "e0120519337e602c6b8a3a554606c7ce",
".git/objects/dc/41839876dd74a23a8b7dbe09e8782f521bf7ff": "3b833bda58497043ada807a1c1a5038e",
".git/objects/dc/4547d0aa753262b694a9b2a9b46ab483fc7b51": "981f08fb4bd2a1a4f1c5b0cb9728241a",
".git/objects/b6/9b0af1193a5f45b4ae8fa7f04089f984b4c518": "e36c102c9b542021e828fd9796feb7ac",
".git/objects/b6/b9f2f95b6a2f3a6d84ea8db24ba1cdb49f31a4": "dd853f442a252a26339395f6b84df4ef",
".git/objects/d2/ecd4076800ff68ea4f2c3d3e771a6cd59aec26": "4d7220d5d97bd3c8635980687247e380",
".git/objects/a8/c9ae8c170dc508e73b5a5f1b07c4602d2f0666": "0eae1e7d720c4904db2df44b6da6b7fd",
".git/objects/b9/4d74f2b42e2cd819d5da711ab0cc1b3d09ac92": "7c8f28975d6b130fdbac141ebce343d1",
".git/objects/ef/913bbdbe8704e8bc8c844470c1afdb83ec7da9": "85681b82fa553a6836369ea0e7c059eb",
".git/objects/cd/4f2025b151118c960bc28a071350e1fec96ca1": "0bae708bc767d02b1405a2261d74d05a",
".git/objects/cc/dba2e4770024c147026f70134fc2971a58dc62": "bac26119b55a7a5fb42a46444a18ccfe",
".git/objects/f7/aaba67a7f84a4b04d71bc3e2d03184f837515e": "90ff5b6cb30b529cb507691e4b378d31",
".git/objects/e8/97322ba330fe2e300ac2c3c7a58673ed80d256": "d7448b9576485531ab22801b16c1757b",
".git/objects/f6/a3da80eddf77ce1d467acd40f1c7c39e93f5b0": "459f8d1761bd40ebdd39b82ee4084cd7",
".git/objects/ce/a15d448b4e0b6abf6fc81f2110cba0cc4d950c": "35b44311fa858c3f8a3138fb0a72daf9",
".git/objects/e0/27d7be1ca257e9d59f374db47a5a0bd334e2b0": "cd564a2b6625b4ae83a90fa3130d3813",
".git/objects/2c/f5f55be7e14ea6f96a62401d3a6d4ca6340fb9": "324060e47865ab5833c9e53212768601",
".git/objects/79/ad44f6cda8bb792906ee22a18b118a2bb96e3c": "5d4899bcbc3caa1cc1706d51fdf0ca5e",
".git/objects/1b/7b67e35f1c43216766085d17a5064ae699494b": "4d5f9fc0e540b351001987f46c3fe60d",
".git/objects/48/8d5d5fb723ebdf91a1d3ff6e06d26be9f80860": "c3897a8ab4d830e43563f1d1501e45dc",
".git/objects/24/fbafb41887092d00830bb8a47341dba8951358": "f7fb03dcff74e89981b285cbed21af4a",
".git/objects/4f/fef7615d20f5488470f579057ab0614193cab5": "288984ffb823ffa48c502f7810312401",
".git/objects/4f/79223ebb3485aba13701bb5fe5ade9d24df1ca": "1225a436fed567f3454fcdefdb8efeb6",
".git/objects/8d/1e435b72e4b05145a65e976783b90e7f267d01": "97f7032bd1d5eba97fe73511bd830461",
".git/objects/71/1e5c2d981936d9a9e08fb21b933ebf94537dfd": "4d7f818cc434618508a3f2941c5d0e65",
".git/objects/49/292e78764bf1ee539d85fb59d9e53bb5a38648": "7ad68e6f3bef698f7f6c08aea765d490",
".git/objects/2e/2129fcf4e333db12511efba50b664f27f2e079": "892eb1c96c4b8d378dfd44a206a6f50c",
".git/objects/2e/b855f41b535836ae8a361c1e3f2502ca1429f6": "7f13cf6e2055f6db90176b077dc593e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d83a232c14477b554b09ee7324a6c69b",
".git/logs/refs/heads/main": "d83a232c14477b554b09ee7324a6c69b",
".git/logs/refs/remotes/origin/HEAD": "38912d3d7f00ad5b3514535541892b3b",
".git/logs/refs/remotes/origin/main": "e1da9ab286220d013954b12dc0804f46",
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
".git/refs/heads/main": "59c969f452ef95ca52931ea2755eee82",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "59c969f452ef95ca52931ea2755eee82",
".git/index": "55f97835b060931c6317a77c3fd1a21a",
".git/packed-refs": "cec54d5d50fcdc3d8576f7eab5355f03",
".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
"main.dart.js_3.part.js": "97cd98f357bb6eb81e3601e7aaa481db",
"assets/AssetManifest.json": "58c2bad12f0e4ae4c5fdcc2838a6cdec",
"assets/NOTICES": "e8b8691fe9809a1ae49d43e0fb11f198",
"assets/FontManifest.json": "c0dd0cb0860618b664627288ffaaef3f",
"assets/AssetManifest.bin.json": "f64bed2121dfc58a954d33f4b48cbdf2",
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
"assets/AssetManifest.bin": "818c84abb91dcd1f7323f9db16bb5d70",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Book.ttf": "fe9a0ad452cd1c07da91ff905ba0d191",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Bold.ttf": "895670f9160dd1c15d871a0c7e8f822e",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Medium.ttf": "61d385606e1cc23125af16a442f375a0",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Light.ttf": "7aae6e71e588f9a3af59c21c23105aba",
"assets/fonts/MaterialIcons-Regular.otf": "e3dfcc3104452be4cc828dda72ef350e",
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
"main.dart.js_2.part.js": "5aa1c3668701f84103764b47389ff74a",
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
