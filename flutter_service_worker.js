'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f39a6eb1acdc1b8154246d509a991554",
"version.json": "0fd5f21438d1c6e03e8628b954530eab",
"index.html": "82dab4ed0f60c132bb3389c4d5400541",
"/": "82dab4ed0f60c132bb3389c4d5400541",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "c6e51260f6f04944833630ed975e2352",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"favicon.png": "b78c10780ee3328f1518dfad2f8fb803",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"icons/Icon-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "e3b59e9d019f1df0956708da58214779",
".git/ORIG_HEAD": "f6ae4a0e18e3e37083fc952d43047b56",
".git/config": "19c0f3787834ac5456b8f197edc7c19c",
".git/shallow": "56ea6cd3c19c59825f04b5a3a59923de",
".git/objects/59/4f0fd6625934eb2697918812c3b7f4bf95ef0e": "d2b55f6fe2e2d52c2a7c5b8d8fa4d21d",
".git/objects/0c/5a7af08e34080ddb5da3d668364e7fe76508fe": "a291f84e5af31711039972e4b73adc7a",
".git/objects/3e/da1bbccc3ae25bc7999b5aba9224488a80e476": "425a67e7f0fb15647aa983faf6406492",
".git/objects/50/c8dae39d5a03a492642ddd7ca1e0adfc9ed617": "266d4a62e6f45c593ac097cc598f1d62",
".git/objects/68/9323899d6e142715a10699266c2c0767f20732": "ce8d2429265e7cc062d268df48669073",
".git/objects/04/205188c830c6a57d288cc3ac74caa68d932b8b": "576d5ea9acdde6f96468b3dc120e600e",
".git/objects/32/220d39bd8d86570afa040f5589e77e0a22e8be": "f738f643361590de573cb33739e42f8f",
".git/objects/69/80624c253bbc416e8b9f82d56190cf419c9d1e": "8deb4fc4c074117924c0899df6d5293e",
".git/objects/69/e3369becbed135ae1288bcd57a09f566d13fe8": "dd3a832df704ef79aab66474dd362974",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "d3a449987a90cb27a061aa0094db79da",
".git/objects/56/ff9421fa330ce5b6df9c08f7eff2925f29b655": "8ed5ba1f10071e61718f1cb8d44d26db",
".git/objects/56/6f30e6743cb14d659a0960b6a8648e12b9b55a": "0f3957bb4e1362015f472e8b30258bd2",
".git/objects/51/fccac6323a19acfce9a3be0101dcee8169acae": "fa0738a1b76c0a578590e63a39215d9d",
".git/objects/67/7b1d5aa08052d51176ae50854ba373d2c117d7": "22b92bbdde88d0946fa293743c80d89e",
".git/objects/67/9dd295758f02587cbd0e80ce01f3a7cfe2b38a": "0fde177d1afb649b4ce8deb2f63df8fb",
".git/objects/0b/e149b490dfaaf3463688f7a6edd4e5fd486028": "e63ebed886fb19dbb4592fef94fe04fe",
".git/objects/94/cc095f856c434532caf9cc3e45f89b658ec2d2": "09d819f613a950074dec5243ad38c8ef",
".git/objects/a4/22c983012871421617df56729d0338458ac629": "a7492e1f4c204d20d7ae00f60dd5888b",
".git/objects/b2/a020edca71733238950e8bfa397ed6633c05ae": "592cd997ca09852b5c543b07b4e1a0f1",
".git/objects/bb/e43ec3ba0569563faa8da3007801941756b683": "5e380e2209235d0bbb7532c49e86ed9b",
".git/objects/d0/6afa63df8752bdaadc01dafd06506bb42f65ab": "07c4f22a3df4d59b14ed27d78bdbde9f",
".git/objects/d0/88bd9ecf226f282a68efb37e8db5eb721544ac": "75824a62b2155a231d281a5c976c6d69",
".git/objects/be/d304c9a2b970df62bd87b65e62f76727136984": "88dd4cf19aac5f3953872b818ed40903",
".git/objects/b3/1efcf9014f4ce1e8c5e3e988e0504819a5fa79": "801df81ff69636faa6ddb254fc3651d1",
".git/objects/df/7203b652e9c99bef89471f97fe3a25bc788d23": "59b909c2fee3ed7b80d6dbc778bf09d7",
".git/objects/ab/b39c1316b2f9c9014c53c90e20fe3f17279cb4": "1f63f9609ed9a87a2e828c478acd9021",
".git/objects/f4/f3d3e413fa6c8e13577d06bfe36167488ec1e3": "ac850728100ecc420d49956dedcce9cb",
".git/objects/f3/618831e7ba7bb2585f1b93fdb42e899f0cec13": "16a7125fd29cae0ba6470438a67bc34b",
".git/objects/c7/e783b67b7bf81fe74b10f7e377ec635d8d637d": "33d3392bd4a41b23cf5c3a893a0efc08",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "9ac88320211880cc3e45982e35ed6886",
".git/objects/f2/0751e6742b93fb330ad2aa68420c98a5ba0ff3": "8cd3046b1f0c3d55a1c8429887665a44",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "1571a0047b31531c7a039af463995b54",
".git/objects/cf/fd6b7cbcc9a9906530716bf79673943d8e81a2": "4cb765bca54c5a131b86526d17789cb2",
".git/objects/ed/907fec02ffad90275f45015f059db10bc6e7f5": "6947cec18b4d5b1791439624edcd98bb",
".git/objects/4e/d8f85835fc08ea1e5cb27ba47ad067741a838a": "20568539a0a7128eaef6ed83839701b1",
".git/objects/pack/pack-2780837d5ac2280ae0fa248676e992b602997978.rev": "bae07c22e6c5eb374832fa76235282e5",
".git/objects/pack/pack-2780837d5ac2280ae0fa248676e992b602997978.idx": "9ce790372012ec92473c71f5d3128da5",
".git/objects/pack/pack-2780837d5ac2280ae0fa248676e992b602997978.pack": "f848fdbb76ee8ae4a3082349f134e683",
".git/objects/11/89274d2e3e0061cdb7169cda746633cf8bc6bc": "f64e3d0b8bb010d96db48765cb8d3b3e",
".git/objects/7d/c313dc28603a40040eea6bda3d71d0d004cebf": "9ae1fae563b24b75a6b4d172bb68f501",
".git/objects/42/34b54e27396a1de257a2c6d3882a29e4ab84aa": "59ff573861632a331daf640126860850",
".git/objects/74/6c13eb79dcb977d7615b28fd2acd35c0634e68": "b13ee7718b1d304906244ce4736bcc1d",
".git/objects/74/c1e5f0d692656c5af26352ab358c7a45147f70": "a02c732036515406e00f8bbdf249b0f5",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "37f85982bf33ae590630cf59163c306a",
".git/objects/26/81c8929e4ccf96a93d791552503a6e9696a36b": "722ca76a247b57c295e45c747355a006",
".git/objects/21/a6fedae346c544a04e62626e1d18350ee7ee66": "4f4e44f6b0b4ab11d1fcf27ec09434fb",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "77f02e77879661926a5cd8bda5692a61",
".git/objects/75/7bb92bb8af616791500537caf14a399549d82d": "ad16983914dca346b09d79c1b53e0bb4",
".git/objects/81/0122b40a8a2a99d4a17cc0eed607d141e259f4": "6365e8d790b5f8091ba12cc05f748b31",
".git/objects/86/c677c7bb5b035c1ae1450995a99279a703897f": "35c13fd6e5f6b2724a098d720e85fb89",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "86093f3409129ad1ad40b48457ae8f1b",
".git/objects/43/28c7dea92eabc270127547db1da1012595f74a": "7cffe913afa23da5212174dd9e60e41c",
".git/objects/88/ec9cba5cbe2b8d128c7df158c2b6afa4a4d4e8": "db4d569c069c8132ad70279cf7ffb3bf",
".git/objects/38/4fc034f2753b96ef8c70aed1ddab2070a41448": "90a4f67486bdce28ddb9ea2fa5de6dbf",
".git/objects/6e/046406730a9024b4686a42882ca34f3ab1b8e0": "782585f4484179bc3278a1d6e2adee47",
".git/objects/36/de199b0bb1343a5f6e71ce005fe073277520b4": "99431ab980c0923dd6a96845deb03e17",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "93034798fbadab9d29fbfc286c300b25",
".git/objects/91/0eb42ed523da69a87a6ca16dd0a457910efe10": "cf2334632e57c75be9bfe823c847501b",
".git/objects/65/b125c72df031068d917a960bc8211d8fd9b5cc": "111c00233299b6d2d6c6f4d5ab3dac03",
".git/objects/98/4438fe2fef6decd41a95013328319bdd2142c9": "421759b395f05d65b2c376aef92f1a45",
".git/objects/5e/1f6db7a914b2e40a17725d62025c7af20d4cc2": "f1aa63d3407a983902526e9a205e5bbc",
".git/objects/37/bb0f0cfc928c2b37b5698320a0d4ead0e2dc22": "dd2afcfe457ed9fc99b72fe9887d7fb9",
".git/objects/08/01ae87846a16358a8779e64be6dac040929fa3": "4ad7323e8ab33d3654d1c9858a4486c0",
".git/objects/6d/317f017abe65c1fe6887abece982c1f83aeda7": "41c70a799bba099b7e27f0eea2325f3a",
".git/objects/55/c88f5f01f769a130573cefa684dd567014b261": "4bf35152bd7112006e39e85de5404e83",
".git/objects/55/288554a35971fb4d93e3f1aa8f6c18684ab3b7": "32f7fedcc6c76065210650c294b2f47f",
".git/objects/0a/cac9554a05a35a72ff8e3d5c11f8768a684bf1": "2e0ed27184a54b60873e5e8450b0a50c",
".git/objects/64/995d3188b9145443fa99678e422fcfb082b72b": "b9bbff9ad0d1611b09cfeb49d0035579",
".git/objects/64/b95b8c5d692232a99acad098683c5f12539efa": "936df10d8a7bcba8a739b845f5e13375",
".git/objects/64/43632ae0db21c33d4f25767c6075d70a7c2dfb": "a68d78fb5d9eccc4629e15a9d3bf0c6b",
".git/objects/bf/4ecaa13cd4a36e3521fb6fe2a3b025868ac287": "6a48abe6230626a47ac729406e351ef1",
".git/objects/d3/6d3ed0653675f64ba8075b4bfaee5de2c5cc26": "2cadd466664864392cd37a51e2a21fc8",
".git/objects/d4/ce97b5fc8e4472c9a69f3de3f8be650897cd12": "9de48b82eb9caddf47c2967e50f8cda0",
".git/objects/a0/7e3828a0682e58ea3885187c8285a8e8e0874c": "aabe23f1a200ad369b77afb6c7ee04e3",
".git/objects/dd/2597dc590dd95dd7a30437c8e8bcb9c32e7314": "fef00e49ad34db58462f3ed765b63111",
".git/objects/b6/e58ac72ee4e4211e11058adcf5c9d73fd5eca7": "ad07fb36c4d4368e26f0965abe24e7f5",
".git/objects/a9/044e3d9943460a05ecfc4350fbe3dfe8f64f26": "9f414c41cf5fc48ee0caf9cdc9fcb99d",
".git/objects/db/d88a64ff9adbb228d714abb79c7fe8f678a597": "0374a5e44de5151ce70468f9ceb94d70",
".git/objects/a8/2c2171c6b8d54dd8cf2d240965b71b74f5448c": "4bf832bfea1c567bfb1f69021007aee4",
".git/objects/a6/2e720627f82aad60a665bffb59ba69499b8503": "82bc1fc9c63a22bc8f8aa193e193bcaa",
".git/objects/b9/aa951f186182eef9f481e1a281c94cfc974be6": "3c84e8b9a04ce210c54c2dfd30c02a52",
".git/objects/b9/b01412dacd7ed9af5b27d66250e0f2c4b8203c": "d89bc49ad925018ba920385fa84a32a9",
".git/objects/a1/3347c0b9fa5a763152f6f0a552d6003251759c": "3791113d46ba88e1ea4f6bfca1f939ab",
".git/objects/ef/4e48c1436ba618af7db13b30f947d386836dcc": "1ae1ee59b448dbb9090d60987f7f9b68",
".git/objects/e1/c96c19dc4a5e8fd39ca051e0f84d0b02500aa5": "c6573f3f80f5c6470917aacfd4f5b64b",
".git/objects/e6/a8f03503da7d8e0344e0bac03633f582c41fc5": "86d9e246a90a59c473d5c7a12ebde92f",
".git/objects/e6/1c5d18a2b722ef31e148e11a8fdb9731c22ef3": "19dd2142e9acdcbad2b0a7809c47168e",
".git/objects/f0/649e0df0a31c9d1338133d6b957d6e999acf00": "ff5d7a6266dcdc454a5d498f43640fb2",
".git/objects/ff/ac0cb73b74f164ec444e143c7c92f0ec30190d": "3205a74bc3c0f55ee03d782f7116ca91",
".git/objects/f6/73eb69eaef8f35595504936e9a3f7e859b1c89": "2b755de9a18bf206784383b1d38ba8f2",
".git/objects/cb/544a4d59584b30270c5f68f04f6494d1b26aae": "4240b9d7e66a725b44d5736c3a72da79",
".git/objects/cb/5cf46a4fb50e2a424a8e3374e8af3b62c204a0": "59a6fb6fca32ae95fb57355be64de5a4",
".git/objects/46/0b9a986c984e145be88f615474924f1f1ccca8": "adf649bfd4bf7f64220f9fbcd223f927",
".git/objects/2c/8c290efb549a8c7e377458eca70837415a7314": "b4ccb1d66855729268314b34ed3e38bf",
".git/objects/79/2d499819dd1f826ff5d58d30e86e460a6952a8": "f3c7ed5ab98d0571710668a347a57c40",
".git/objects/41/91562f035554abe910d2082ba1372878a886b1": "9c2abb4a21f014b839cfa93426e5d7cb",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "035b9bca4ff3f565e4b9d2dba298d005",
".git/objects/48/b3a3c6a55c3dd55594c50611433104193185dd": "ed9fd9a77090227958b9cad0434a0f12",
".git/objects/70/ef703ac2201a07a77736e804ac38d86e15e060": "f778df9833e3b3f5d8d225f004648077",
".git/objects/1e/f1b7a0038bf7c2975835793494b54821b9bfba": "62a6a171ee84864b24fdfb9ccd4bebb3",
".git/objects/23/754ab59a5b8ffeb3319e8b0e50ab5eabc9f6f6": "0f1d3f4d2a7fb3915f65fcc8428d9c5c",
".git/objects/4f/668d5c442782d4a569b6ebc0f441702922da7d": "28c897c31779a2ea8c53b3ad384eac31",
".git/objects/15/f1b813b476de648dd6e37cb11eca416b4dd2ca": "11612ef068e7d99af0749e45d40ebbe8",
".git/objects/76/e44f882ff3a0a1cd5f4afe3b3b2cb584860515": "6f460e9707ae407318006bd7780b52ef",
".git/objects/2e/3cd368d46ed13f134375b8aec1f39b6403699c": "abb7262cfd9b9c278dcae3bb62fdab49",
".git/objects/47/bc4397557b6bdf946abba65a5152e533e387d3": "ae44d5a8bfc42776a2ccf5a0226a2a5f",
".git/objects/78/0bf22c7a063bf9f067042c8b82141af2b13766": "c8248e8e39b4f304746aec2de5721745",
".git/objects/8b/7ce2db8f6cef867ec9fd3e006c34297cb71ce5": "8c471d2cb379722e02a95b247a5ba527",
".git/objects/7f/d161a6c2f122e4f638caa09cfe4ba4d42fadd1": "a9083b6458c97090ac97549c63a27be5",
".git/objects/7a/597628f1c5103311dc9e4ebf2cf8a123cf01e4": "0cdcaa7d38e077b1a8ef56a5a3e94b3b",
".git/objects/14/d1fb932a2319640eb75b0df65cc4d57ab89f09": "f0584eafe2983e300dc8076f0fa37a17",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "761dc13aa1b552ddd7312bc4ec9c7664",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ce908756064fabc8e011e45f5669207",
".git/logs/refs/heads/main": "6ce908756064fabc8e011e45f5669207",
".git/logs/refs/remotes/origin/HEAD": "7bc059f9b4aa685229a7d9acfe46b8d0",
".git/logs/refs/remotes/origin/main": "4b59d3b4a93c1fc6f288a16daa92f34f",
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
".git/refs/heads/main": "f6ae4a0e18e3e37083fc952d43047b56",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f6ae4a0e18e3e37083fc952d43047b56",
".git/index": "bfd810c23ff1878e14cda03ebeda54d0",
".git/packed-refs": "2f9913351363ec69e428e6d294b37c2f",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/FETCH_HEAD": "771b03903017c03d6b900ed6225fdaf6",
"main.dart.js_3.part.js": "c1f683e8416623043e2424eb2229f978",
"assets/AssetManifest.json": "34a79acb2d2c1a2285d490b6733445ce",
"assets/NOTICES": "cbd4d6dd98bb46c4625f37ab35b6c1d4",
"assets/FontManifest.json": "cd5dc4e497cb3ab85d5bee3ccf610c8c",
"assets/AssetManifest.bin.json": "ba0bd35cbf4efe5f81093a1ac68c562f",
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
"assets/AssetManifest.bin": "0d33a1df44760857a54fb7eebf70363e",
"assets/fonts/MaterialIcons-Regular.otf": "28fd69acc4a5bdbca6d65dd5e6fc6302",
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
"main.dart.js_2.part.js": "8d61de0d9134b66f1810750ae3009d17",
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
