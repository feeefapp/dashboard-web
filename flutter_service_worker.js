'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c306b0b837bf72facf6b59c5997bb311",
"version.json": "7b0dbaf8a4ad0792310ce654a6eef687",
"index.html": "632701ae9f32039d7a3237428509ddfe",
"/": "632701ae9f32039d7a3237428509ddfe",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "3a54d2c65ad07583b0a1690d76085add",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "b7b4a4434f796b519ee6ad67b1e742d1",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"icons/Icon-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
".git/ORIG_HEAD": "c8dd1f44b15482fc09c1f2dd8fedeffb",
".git/config": "19c0f3787834ac5456b8f197edc7c19c",
".git/shallow": "3ab5351ebe2d0ab7068837017fb00f40",
".git/objects/59/3a14e22ff7cee118369bd2a07d7af0661d6b2a": "5306e625a7c1f0b0b2e8178d64f7754e",
".git/objects/50/40ef3a26d789f480867aa4609e8d60f08e2948": "cefdea72dff2a761a206a095ad14c9e8",
".git/objects/57/b4e8ad45c7077c41917f900a509218016f2ea1": "24d1721da8c3bf21fe7d5017b724d83e",
".git/objects/3b/b02fd47ebaac22e9e2b9f1b5c0030919251ca4": "1d444c1ab80bf4f1f47848bb5355e310",
".git/objects/6f/190e9231cab50dff7832f887850427d442ee85": "df64b53225186aa0341c6ee064efaa47",
".git/objects/9b/43706b47d7d03516ef592d505ababad1447579": "694b1e55bafd1d3cac5572aa99de2a8b",
".git/objects/04/4b5233d8216ccc6758ba72e8f1372b8cd2802e": "dbaf07cee6a561e0418b41ab9ceb47ac",
".git/objects/6a/3dc0b7c57df2f2a94814a288f3a1451f1f0348": "e654ec5390685d5695d052ff699daf05",
".git/objects/35/6ca40946a5639bc7b3ecdd6891131350608851": "2089ea84e56eeffc548fa2a0048ba196",
".git/objects/94/2e4b18d5ad3df0040c8fbf8be84a6aa1cdec86": "f1277e56ae53bead8c1496e47f0781ca",
".git/objects/0e/3ea8799e368ed05d34b2066d2417ad8d49fb61": "113c77633acb9d7052cb3cb7c14b5029",
".git/objects/34/9103f66672eee351578e6a821f8ee98a19f7c7": "1502b2747215b40da76e0600fed42331",
".git/objects/5f/28ebcb3b1e481cfc26ca46a3f3fa57b5a99a6b": "c9943334fa8ac99e9a2a37243b70c3ea",
".git/objects/5f/c56b66d59d05ed254a7e02fe985e37dbb9c83a": "feb5f5ccc0de58c7acd4b3f86e548f8c",
".git/objects/33/0297e1550d11806aba637b72971fba2251f75f": "37d129d2d1ac9744f1b8a9a2645ce7c7",
".git/objects/9c/7543e3a5337168a61c5b319dd9b644d543d17a": "1cbe7009f06aed630b77369a2b9a0238",
".git/objects/a3/1a28213b04297a8d035fd3eec166bc6c173e1b": "c514a590a4aed7d95b41f95d5bb5fb89",
".git/objects/b2/254bfd83d8682bbe49a1c5eef4a6b64fe4c68a": "b606c42233416aa076d2dca1dcaf2af7",
".git/objects/d9/8385f76ca4c6b90a20274437579c7b3c2bb5ca": "02c49acb810487431ec19782f592fc6f",
".git/objects/ad/996147787ca2efab79237474973bec1fdff1e2": "cdccf4638c4d08aa5ec6684f8e01fc70",
".git/objects/ad/40a44985b0f4bb360dedb9f9b56c8bcac0adc9": "63fd91312ae4ff7ec2f71c0d0194f863",
".git/objects/bb/497d4d43fd77d240446264c0a2a1728c219c75": "f78049de5bf9526e35172b5f65724b12",
".git/objects/bb/a8ebc6d90a333fdea8ad28030e6a1e7659ea90": "de7a246c1b68c5dc86109bdb53be7077",
".git/objects/d7/e688ccca56a5cee7d6d555f0adee3415813ab4": "7a173828f5d70a219bc50462cc7b621e",
".git/objects/d7/ff01d09c12c89b7757f6baeaa1a3b865410fba": "fa90b09dd830bc52671416a0f3a1eded",
".git/objects/d0/06ce8830eeefc20440e0add41eacbd7e56f73b": "5d68cf6ee335552e6c3b9628c2174ea9",
".git/objects/be/76905d6ad9bcc8b44c9f1915311414dd6fa9b1": "bf57b43c1368dc0029c3fcb2ed05688a",
".git/objects/be/8f238f037deb5f622719b762f4b440f8ad011b": "98321e71ced4b47c1e0d7ec974667f92",
".git/objects/df/c6393115a2097f303357a2b08321bb62a98e4f": "ca07c041b97b0e67dae11aed931eb0a4",
".git/objects/a2/8b6f76fd221f4343d14898cc9bf55952a467e3": "1fbb60971f99cc9f9fa53fc26ae4d5d3",
".git/objects/a5/b8a0a4667a7fbf757f74d9de88629e330a1a24": "daa258cc51db5d255f9683a408b20c46",
".git/objects/d6/ce4da273e3a28f10d8945922527f516916e5d9": "6a5887037421c680396c1e9c3f9bfbb2",
".git/objects/ab/8b8305a1c475291591e9643fd9b20a9ca60488": "6980618562cee075c71fb692cc90fe93",
".git/objects/e2/b79a5707362de879537d528968efe44c2c4fb9": "a51241d4484a23af78b5e9f82e2f918e",
".git/objects/c7/f387e97c930b5f158e24020e12a9b707651028": "816e046c30147720b77c1244d68870d6",
".git/objects/ee/69a4da993c92d8161e754fc9d756aa04315d56": "23a02facebd15afe8e9c1283821de142",
".git/objects/e3/88f76d2cf39dd6a622ee14b0d0f8a2ffcc03b4": "c10a28dbfd3ff73fe7ae52bddd3b89e3",
".git/objects/e4/dcec6475dab9ab983fa2dc53b2c3f5d826ed44": "32136d24dd92726cca45460f09ea446c",
".git/objects/fb/d1d38cdeb87e5b91e37a529749953b3e811828": "9a220ee31cc6d72faba8efc50b8c2b29",
".git/objects/ed/f1fc44ba305bc9182c908746530f3631eb2ae8": "d352552c084de3b15f442e19a6b88978",
".git/objects/c6/9bf63790a3426cec9ab67158da1e7538a2f5ee": "5574351ad6e702b0518689fcd3ae9473",
".git/objects/c6/ebf003b9a8ebb665444d8968e99b625d0cc025": "996712271f91460c0890e75f887a7f43",
".git/objects/4b/4cb15fd51e854b0e13be1f5cb42228880de891": "cb119fb6fe36b46dde979ced8af377c2",
".git/objects/pack/pack-4210c36b47b933f5b2537af9d2287cd09928b9d7.pack": "2359a5adeded0d83c5d8d82a5e99985e",
".git/objects/pack/pack-4210c36b47b933f5b2537af9d2287cd09928b9d7.rev": "d7c308cd6879c9fe99a24d51daa9e22f",
".git/objects/pack/pack-4210c36b47b933f5b2537af9d2287cd09928b9d7.idx": "73c84625fd498fcf05975525d34c2f09",
".git/objects/11/8ddec82b30ae2e16adf559cd43e56a4d52b275": "30aaea13309c0edf919953fb57417030",
".git/objects/16/23561ee0541a15418256554b28b27036fe49f9": "8995aa99619b4669bd6d5c6bffe12c76",
".git/objects/42/f0d9abfdd90c6bcfad9994962523dd25194c45": "3d552f8c2912c0936ed0fe38dcfc635d",
".git/objects/89/bb7ad30c15fe4ee7fc647574c9d1e4d1a76bb4": "963be88d07ece588aad85dde58fda0e6",
".git/objects/1f/c5f7284561ee9035db8afbeaa24b14691b7940": "32108a72c5266c251808d84272187ea1",
".git/objects/28/778fd0a1488bdd37a12eb035315afedbfab099": "50e262cccbc07dea7992ed4e6182e0ad",
".git/objects/28/865265ca6be181ec2e129ef3c0d4d39c0a28a8": "9b79197349d210284cacc5c4428895ff",
".git/objects/7b/6f07348ff14e2ad65eccfeaed04b4eafa337e8": "2bd682bcdf7fdb9a061f1784d472bfea",
".git/objects/2f/795068bd6819c3218c4aba70189c819eb67bbf": "bd6ff9a4416180edf2c4983607a64105",
".git/objects/2f/4a75dfaacab149eed3f7081a6c655b1228901f": "ba5cd8d6825263e0b76e2c39a64db996",
".git/objects/88/624ad04d243d02eb24a565f6427efe54c3e4ec": "02abf3689fe25898976e294dcbf27ac7",
".git/objects/9f/a7c2bf64e30c5ec8141eae13b6300420febd80": "64c5848c83de17545d3503c39860dbee",
".git/objects/9f/ee66a5ea2ea1c1bd6dc78e3f8c36791104823f": "5946a32a87a99d934e332dbe254f4633",
".git/objects/38/efabe47720d45d5374e13bc5c1c41063dbb2cd": "996f426af346d4acc2283592b61ced82",
".git/objects/5c/aaaa9cb8d05a1bd73d7656e0c27d54ef4d4d33": "3e3242d0d28ce683ca9d6da020dfc11a",
".git/objects/5d/66196713379aedbbb907a5d67d6e099abf2fa3": "ea554ca3f8ea7db7db88b5f4ff688482",
".git/objects/5d/ef738b026d0428f8578f566779eb122483bcaf": "ecb417cc1999e186686e731cadaa2773",
".git/objects/62/6996f29cd7fe20898be08c9470b68d5b848e79": "dadce8592aea11407ae20ce96789dc23",
".git/objects/96/bf403f1950f7db15bed76cae0093ea040b84b6": "9ce38e9a9792a7cbb6373f8588b5d2b7",
".git/objects/54/3939c59032c63eba5fc4946a72bec4430bbeb2": "d7d863322610f7d0749e853ddfe7a1c6",
".git/objects/3f/ca9181dfa9233e493d287a03d24afdce9e02c8": "f848d76e74d2ddffdc0e6548786b5cc3",
".git/objects/5e/420886a8caee2a01c34d26b259988da5ae98d3": "e61b24555f7723ddb0bb2a5815ab77be",
".git/objects/37/7f5cf8a501ed7a5522db2506c3b275a2b90af3": "3656f18ae1a95dbbc02705f13aff2ac5",
".git/objects/08/c0f31f183e64dbaee88d9797dfa762a05876ca": "28d1a71565e7d8c51d23ce96e36cc252",
".git/objects/06/1a3484800bd94f5cbb8c283eeff252dbd0c3ca": "2fb34c47fe8808d9f26b46eaaf81e625",
".git/objects/55/a10024b6bb0320b6a380ea4b605b39d4a00e09": "c0ff5c0844cd3435293c1a402e7d737d",
".git/objects/d4/60ac16ecfb37d48b6bb6c6288298e138703645": "4229e51a6884dbe93c18b7c2ee63a972",
".git/objects/a7/8b5de661d19fb8ba45f32ec3c672ea74222a3a": "d68032db4ddf7a99a6c128664621c85c",
".git/objects/db/745732c3d88cbe497d6f95966d67165ed0c375": "0f63a7ef91ee2a32ed23b6e5bf4aa64c",
".git/objects/a6/d30db07cad70e44a77a751bcbf1023a7b93c69": "d7cbe9e52b888bb92079b5ceab679f09",
".git/objects/a1/d4ea6a3155805096cc4d5072a890461fefff56": "790a4042ca0332532a397c0be4b59904",
".git/objects/ef/7aa957a3351b544c6590e7f61d58a2325be636": "71362aedfc64af5787f7cd72cd575a0f",
".git/objects/c4/e3416fdd10a670735232a0968447d42b0c3d77": "d120002124b3ba16a082c13d07ffac7c",
".git/objects/cc/fa32c78a33b2a670d96f43e2e1925636ac2502": "8bf649f7baa589a58334de8e7308edcb",
".git/objects/f7/0bc0702d921e1da7467ef7e78fd5f5b6ff9808": "5c847a1d78e5ab8e1bf53f608d132b7f",
".git/objects/fa/d1722e7e5e6e5fafc5d562d54c4e4935bfdfc8": "c730561079121292318e208b72520f82",
".git/objects/f6/230cd9502928a752365a63cd6a5a9c365394a1": "bb2493e5ad1d91792cc46a1e5e957de9",
".git/objects/f1/71927ad3fac76f1d50dd046e37efd82c432410": "3a8598b479913bbb3ed5751a1be3c563",
".git/objects/cb/5ffbdaa941e8b78c180995cd967814fd483a46": "960f0174c7b2dd6ac6d64d41b5643012",
".git/objects/2c/ec214642a70d6d6e4949a887787004aad3eab4": "92fcd671048283ecebee22e91423549c",
".git/objects/1b/e02eac6aeabdf467bf29304a0dd65e905d8478": "f1b3515c43119acc59ef3289498a97d0",
".git/objects/70/b97164be74a3c132d3fa8f974ad3f82c0ab901": "99e7a454e78056856bf3eb4588290ff4",
".git/objects/70/82ff473c83b69b19ee5744404adddea211a484": "e7ed313e8433c56bc355dcd11a64872c",
".git/objects/8d/fe1223abc7ab7fa49f80e85708a6b5bbd4b0a3": "1c2cdd2c402b6884b29545d9d2199364",
".git/objects/8d/a1202024bb4125b9a75130c9ddbe8b820f4126": "796814247dbbba23a6ba76c8c95cea69",
".git/objects/12/fe5ddc893b712b65a9c22f9055711fc256cfab": "0096e676f4b978fc3c0f84c5827cd58c",
".git/objects/1d/54216a1891ba983c941fecce5ce6f63529b170": "07ab84cab83e20485fa8ad2c7fe47d59",
".git/objects/82/4110a2e303095a2c59b2b84c73315e888eb1bd": "d9e7701517feb09ff28e42965852ae30",
".git/objects/2e/56847e40f868dde0a856b1b7e7d67c436a63db": "2270b68ac9ebad26ae5f95dd2ec59a3d",
".git/objects/2b/9d07020442301ab30cd73d4f6a7814224849e0": "98f947f51147b7f11a1e54f45e0f4b25",
".git/objects/8b/e71458114d4d4b3b472976d73e1ee7563c8ef4": "e1f828bcc07d163a3f538fc166b81100",
".git/objects/13/b181510ca472e0f86c7fd387a2f03dd4267739": "14e9933644333cb6f1d5eb83e287c3fc",
".git/objects/7a/65994c29e734e67e8dc7fad159967bc2372fd7": "5089b9f7b2114306f762d358dfbe1eb4",
".git/objects/7a/d5014149c3ca4f40ab23055afd8a78edf60d11": "d51dc6beae06ada0cef2fed9b0f15015",
".git/objects/14/0b38d3a839890552cc1810af82031e7c4e4edb": "521f8e7222b175ad68baf0c049647cb0",
".git/objects/8e/38b4010bdccd674b9a983060e4334fa9a6917b": "eb19ff982c2b870c6b8fd3ff5e936ecb",
".git/objects/25/6542fa991cc54619792013094fddca3e1fd5f8": "722b59ec13c837635e413957124b5465",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "779fed01ffa0ad567d05596eda975fff",
".git/logs/refs/heads/main": "779fed01ffa0ad567d05596eda975fff",
".git/logs/refs/remotes/origin/HEAD": "51a83bc131733cb99399f940dfc204be",
".git/logs/refs/remotes/origin/main": "97993ec7e7da8260ff90e82475a19d01",
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
".git/refs/heads/main": "3840fdb0404d0e54871e0b0fc4d20267",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3840fdb0404d0e54871e0b0fc4d20267",
".git/index": "4e272b80b13c59d791db4b5bbe9c409d",
".git/packed-refs": "7cfa5f37a8d85fed56ba89779365dad2",
".git/COMMIT_EDITMSG": "a80dc2cda8fd5a278f1fce4dfc7beffa",
".git/FETCH_HEAD": "48c12bebf3bd7e3cc6ca4b34ecb5c749",
"assets/AssetManifest.json": "58170ce71cb88a0f61ce17438f70dae0",
"assets/NOTICES": "d56aa546133424f3150b0f9c3d00e8d0",
"assets/FontManifest.json": "128ae4635b000ce89197847ff6836c77",
"assets/AssetManifest.bin.json": "c3bc44a21c73fe7d798b2356d3a5b7d2",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "e03b267aaaf58e875458f3116cc32b0f",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.wasm": "1db8e76780b383ec5d5ea55425c0db02",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "94c30ff8f50c145fcf4a70f972fce965",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d2f9ebe078985a428cd16042ed24e5ba",
"assets/fonts/MaterialIcons-Regular.otf": "bed666d3d9f95c11ccd0d354ce03df67",
"assets/assets/maps/dz.json": "80acdeec3fbb2d77798184e77d03c40f",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/motifs/heropatterns-white.png": "e690645bd17ce0be722abe7d9c3d0015",
"assets/assets/motifs/heropatterns-black.png": "db8a9290897fadcbab79a3815fed68c5",
"assets/assets/feeef/feeef_icon.png": "5465a322397229c128d11b2e29b168ef",
"assets/assets/feeef/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"assets/assets/feeef/feeef_background.png": "cad8fa9bd9ad45f1596016883d049f19",
"assets/assets/feeef/feeef_icon_foreground.png": "532a21a1ac3980b64e9c29c95d9c1aa8",
"assets/assets/feeef/full_text_on_dark.png": "1e95fcc2c904ce4596115dd675c7730e",
"assets/assets/feeef/full_logo.png": "48b77d60884c105b25d1b3bb94ebf562",
"assets/assets/feeef/logo_text_arabic.png": "9b9c5e718ff98099acd8acdda3c8d8f8",
"assets/assets/feeef/element_3d.png": "090734a979efadcadc48ba24149e6272",
"assets/assets/feeef/full_text_on_light.png": "870e08ffd4c140e513026b5c632dbec1",
"assets/assets/feeef/logo_text_english.png": "1df8f3fff22c6885674d98a072cc62b7",
"assets/assets/feeef/feeef_logo_mask.png": "4fe9368fe2d2ceec01c5f1b530bde6be",
"assets/assets/feeef/logo_text_arabic_english.png": "6e715b05c0ca77c4638d1d43ea717bd5",
"assets/assets/integrations/ecotrack/icon.png": "e73c01c1228199c214ceece0d8497b90",
"assets/assets/integrations/ecotrack/logo.png": "df0f636c10d4254e799c43de8d6d6fc2",
"assets/assets/integrations/google_sheets/slides/2.png": "fdc1531f4d33475b28fb44a9081bafc0",
"assets/assets/integrations/google_sheets/slides/3.png": "9678981a0d8a2ae78e67c83e7e801e70",
"assets/assets/integrations/google_sheets/slides/1.png": "dfe305d17a9478829c3ab0b0ea0afa1a",
"assets/assets/integrations/meta/icon.png": "daab63f1346aba43129d8ece72499db1",
"assets/assets/integrations/meta/logo.png": "46cc3dbb06b4c5f5d4b666a0110c4beb",
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
"assets/assets/themes/windows/dark.jpg": "bda58297ce5a1e74fcd8649e69ba7a22",
"assets/assets/themes/windows/light.jpg": "8d867947db259e63287d55ddceb39355",
"assets/assets/themes/windows/light2.jpg": "3a44ac7670229b9329bd9815c14b8e91",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
