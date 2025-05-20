'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8a9403b20f6c241c00e3830f5e555f32",
"version.json": "45df75c41d59e9f75022582aa9c54dd6",
"index.html": "68c9ddc8201ba5d6df73dc148fe1f8eb",
"/": "68c9ddc8201ba5d6df73dc148fe1f8eb",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "4a7a7d111e27b429469553f67dc20e13",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "b7b4a4434f796b519ee6ad67b1e742d1",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"icons/Icon-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "e6757e6e678133f1f08b0e8a6fa86b0a",
".git/config": "19c0f3787834ac5456b8f197edc7c19c",
".git/shallow": "d9aa0314cf0ecf3c65339c0c4775d679",
".git/objects/61/cbb47a8e25724f614d29514dbb9d089df96a77": "c9c9a83ce1d2f8d0a759582561f5eb47",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/32/ffe86d5687c2502c89422f30d272dc492ec12b": "73b25d06762fb72b4866623b504e982c",
".git/objects/35/7efd2f8a0bbb196e2316cab6cc95ff5806d5f6": "a7b7ba54c29ef29465e70e12f402465e",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "ae6313e3307bc7af1c2f844c6e0fc2c5",
".git/objects/56/ad929b4bbe4fadc4f5296ad51431eb29fa88e6": "22a98e7b9b0c07d40ffd70b5121bb77e",
".git/objects/0b/52c9e0aa362a74faeeab11c6b8b10a39f2eaa9": "74afa7ef72a684864635a095503cde16",
".git/objects/0e/227af83011aa83bc25c9b9fe1781b86cf5317b": "e4fffdb0a86b4e4396ebe65960fab8b4",
".git/objects/5a/b9df14ad538f12e79782a09a948d7d1f12956b": "ad254d75ef33a753dd89f75175f40344",
".git/objects/9c/eb872c669f72e1e4b37b4fd1f2e2abb0933d7b": "ca7f8a0cd32ae50cf57daa386a7318b7",
".git/objects/b2/9d97b97530ab906057a963e6457c893efab95d": "49b751705d907696cb5e1cdd52614f15",
".git/objects/d7/7bdd137c0503eab09bf300e3527243ce7005a6": "8412fd358c7939c8a91571b828b8de27",
".git/objects/be/4973d1977d2068b32fd3d9a1d32f427dffeb46": "e6ecdb7b3b0209c0346531a6a3fbfb69",
".git/objects/b3/1efcf9014f4ce1e8c5e3e988e0504819a5fa79": "801df81ff69636faa6ddb254fc3651d1",
".git/objects/a2/001b7622b18044c9a4edc844c18ed068222d3c": "a98def182a3fe4d090700e1191634587",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d6/2eb15574cc4c58af44aec4b7f87070b94ba8c5": "ce0d4c093b7a92f0a0bfe0e215701f64",
".git/objects/d8/ebc50cdaa8b0bd8066924038bc0c0210b04142": "52f1cd461709bafd5fdd15f6a2299936",
".git/objects/ab/b6b38987ad081457507eb93d33563a75e26698": "096568bf176828ae9a786eb1d3aa1904",
".git/objects/c9/c5ff8cef31369e6e12f6d7aa4fb83c41f8e90a": "43966ee99cb73cf0ec3d146d4abda211",
".git/objects/fd/a16d710aba2a2e843736d02f98a39c4e05c2de": "4ab6a452bb79646a22cafe0fdba6b16f",
".git/objects/c8/6024e13273acf87444538ada788f1d2873a903": "9fb3d411124a7d731846128c9f8d6442",
".git/objects/c6/5909819b6d6e895161ba87234c1d7ffb364ff7": "004964f394a77469f2c49932af8ae7a1",
".git/objects/ec/7e12b8d2d90ac70f247a052aa969812d9ab929": "9b40641e27b7ac6b01bf50175251c8b0",
".git/objects/pack/pack-93974098d36caa99109411bf5c70afc87a847f49.pack": "ae8b7a7ea662b3b0dd06605f7bd73ce3",
".git/objects/pack/pack-93974098d36caa99109411bf5c70afc87a847f49.rev": "094e6623a08b7d095879203a38f2fea8",
".git/objects/pack/pack-93974098d36caa99109411bf5c70afc87a847f49.idx": "8d79c92731a9f041d65753d084e0b483",
".git/objects/11/185d7174bc967da879fa139591c7c1dde73c35": "6d104d49355b2df59af265ed8931ecf6",
".git/objects/7b/ff88d437395ef6279c55ee8a19744652a7a926": "c888210f9539c9a11aefcc3cb24cac90",
".git/objects/8f/77113204e1731ab18aeda41864135bf3763e57": "3601d3e5bed770030fa809175ff87d0b",
".git/objects/8a/d8ae56f51c43631f0e57e57f4b115d61afc4e5": "93b39c5f926c53edb2ca40187d5e4680",
".git/objects/19/9c244c065e640f6dc45acf989e0c81cc937d55": "fcec68b8b876ca2c6b06d8afd4c1869c",
".git/objects/4c/5b1c4363d44652e229e1f84dec2b0aa4d246a6": "6dadebf297a4aeb243d4817f618d4901",
".git/objects/75/e9de34f2f6f0763fc190d6db4e5ae5b431edca": "d4176f357361b0b71c41f9dd49da076a",
".git/objects/75/bdca025283fb75e22c617da308a0d4c3764162": "f57f6bd503746406c56b4a0b5473c68b",
".git/objects/38/3db9cd1db3b2a82bdf964d5beadfc72a6bbedd": "f68ea355b46daec4467241b5b068e5f3",
".git/objects/9a/d28d79b37b82cdefb4bf85d7bdab22d178dec6": "7450abc62bd48a33e4d4f1a046cacb62",
".git/objects/36/72ae149ccef47c7290ae1dd4a2d1c8ca1c8bb6": "a6dc50365604d4aaa7fca1600d848fee",
".git/objects/5c/305981f95373b4d0c6475c8be43fd5a673641e": "b4c5f96e85c371fa5a01720933826163",
".git/objects/31/d4644c6b98997187d4655a2c916bcc4baa1134": "619f0d0f658db86ab9f485192166fd72",
".git/objects/91/b51385fab08417e9925cbf4edbf9eaaa47f9df": "ac22054960c97f376da9103f0cdc44be",
".git/objects/91/501f8dfb6cbc8c65aea8136ad1834e12103cb5": "3378c48f4832c2efd8c3b2023583d250",
".git/objects/3a/dda287b12cc3ea2b05375e81bf8439c4a5d239": "7c9343ba3131fa0a7f265a75d31b00c3",
".git/objects/3f/e19c869ca26d46219bfb7e288a53fbd3ddac82": "c35d408c7595b099f11740547a85cc5b",
".git/objects/6c/3ed5f19dfefeca942481c59a9771cd60915608": "17d982590c0aef3de0b1354c1e834cee",
".git/objects/0f/5b7425d2593977aa40058b85df729cfc29ac9d": "564e00b70049536e0877cca24d7ef72b",
".git/objects/90/e760b93e19583a580f8300e472e733fd0cefc8": "fd47b1314a94fea796a1c8cf94ffdefc",
".git/objects/b1/f304f56e9b1ddaea137e4fe1f084b8e5059b46": "4fc2bb4189972d616729a256e9f2f870",
".git/objects/dd/10c22d9320615e5f9f683dfc72a09a046fb385": "9e69f746667b6350b4f91980c7df67e8",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/dc/327fdf05925129ccfdb64a2a4745f6a567b3ae": "e1c0ba5c9d950b8f130ea1f3fb7c37c7",
".git/objects/b6/2ba3ae9975849a51263a6fd6d8683802545c47": "2fc3aa5a4ecfc21eb39a54a0c5e15346",
".git/objects/a9/09dbb1bc4395c90e5f198b7c6c8e3d7be6656f": "9f8bf7980c75a43ac7bec34eb9ca0eeb",
".git/objects/af/22139be1230bcd00f63197408f259a19120e76": "f117ac13dbe64b7fd2db63b499b95802",
".git/objects/a8/348ad6c7fbf754715d87153c60bac8a8860bec": "7052111a36a978b5f8523cee7940079b",
".git/objects/a8/b27c692603aae6c95d61161c32c40c756816d1": "7065974c953b87a4e6058e7a19f668d4",
".git/objects/c3/3417624c9cc00770e45d592fad7742b58743da": "35ef3a678b39f916261dd4f491a2cf7b",
".git/objects/c4/2119672d44e6d76e30a5415b04a3baa9105abb": "5de26802e2f819047e4ae1f720b015c8",
".git/objects/e8/f1d0a684a697f7a15e8406dfef65c700df105e": "373c08be9f709eb70b9fd4a0d4e0b360",
".git/objects/fa/a8070080d1220d5ec5e6f9642748bee834372a": "dad76c7c15aca3b3b880d7620092377f",
".git/objects/e0/a3f3cb80be0c6182ee551ca65b186b905f515a": "da9840197535d09a02c1de8fd7624e55",
".git/objects/2c/395a8ebd4de318d6be39949ea06b013d6547e2": "73f98425993b767cc62eab9aeabe42ff",
".git/objects/2d/030a96f59f63888353db2bbc47c9e20daaadb0": "bcc8f440d650c4201326cc911d703763",
".git/objects/1b/ebe5c6cfb12829a6731e28158635ba414e1ef9": "67271512fef007fd9d710b99ca3a8e1e",
".git/objects/84/cee2b7d2c2f8b80a74df53ca395bc1d55191d0": "e143fc2694c75cf13e86c8ad42763620",
".git/objects/4a/6c327f015faaf0495973f5f4faf101624eb912": "d08d3e2350dfbf5ea6464374bc9c4e98",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/8c/0a8e009981a051141a1609a9dec83a413ddf7e": "960b3866a10524481440e5a61117b2a1",
".git/objects/1c/fde885cd33fb11cb7756791801f06ba1306c22": "ddc5a35f8f9e6df0b905ab22b63af349",
".git/objects/40/608ef6f20c62cab060a76315803d8eff6223a5": "4d612034ffff3521f6684513b7d635e8",
".git/objects/40/de2bd5c2abbdb70072a0773b1d6b36f176d3c2": "98307f56b2ce4e6470abe0f1cefb0f9c",
".git/objects/14/524ea6aa6220403c2d3df5681fffafcaa278ce": "806f4524ef567bd950563f01dc0dd802",
".git/objects/22/9594162e2a5028a717cc3c0b7f1debae982c4e": "c4b08fdd3afba755625f3beb09cc6336",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fbb15456f58994a8f716c9b9b228b397",
".git/logs/refs/heads/main": "fbb15456f58994a8f716c9b9b228b397",
".git/logs/refs/remotes/origin/HEAD": "3f74c953c18032bf389979042b4e7752",
".git/logs/refs/remotes/origin/main": "c59c4efe966257502e9d211743b2a9ba",
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
".git/refs/heads/main": "fd4bb0af4b7209661365f330acc73878",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b37a5a4bb8e29044fa0ea95d4738fbc4",
".git/index": "b1a47057c6ca9260614f18ef55956c84",
".git/packed-refs": "69178d9f81dfd4eeedc89c20a62630d7",
".git/COMMIT_EDITMSG": "50a2b3eea45483257ccd0eadca73e8e7",
".git/FETCH_HEAD": "86946770cc51977578edfd50523c0da9",
"assets/AssetManifest.json": "36653226e796f7b97c1f4e01a1f9e76a",
"assets/NOTICES": "e35db17ce5ace17ab7101079a15d6a1c",
"assets/FontManifest.json": "67e6458b5e19e09d2d9f7879043f3a40",
"assets/AssetManifest.bin.json": "39b683124821e2428e6e9bff82156d4d",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "e73f0125ca87ce9b1164d5e8aba546ae",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3aa91e570e37eb6dc6b2b751b7d09cf5",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "8ec508eee0436d47c2ff0a38cbfae9a6",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "d0680f3b23a29bf2f05c5911e11c3c11",
"assets/packages/pro_image_editor/lib/shared/shaders/pixelate.frag": "19c7cd8e71751bf1865b0784e2e2ac8c",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "f67c336e8b9a0fcd002e5485e4b9c808",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4b3801222db23fff32c91c131502abcd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
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
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
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
