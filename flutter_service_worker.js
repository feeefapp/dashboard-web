'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2a51f98c77ac6b009c8b8bb507311f69",
"version.json": "f97542e2b5d0ffaaa07af9dd2e3cc87a",
"index.html": "156f47ea06ed9c51ecb7347d2ae78964",
"/": "156f47ea06ed9c51ecb7347d2ae78964",
"firebase-messaging-sw.js": "482ecc99110699b3404ccc2c63120094",
"main.dart.js": "dc1096d7b9a7289bf423c34fe8f1f897",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "ca1c8ccd4cd4b3564645e460488c3c43",
"icons/Icon-192.png": "7104a431c2da32cb07861f7704e726c3",
"icons/Icon-maskable-192.png": "7104a431c2da32cb07861f7704e726c3",
"icons/Icon-maskable-512.png": "fe40fb29a20e2c8a8ab5b012acb621d3",
"icons/Icon-512.png": "fe40fb29a20e2c8a8ab5b012acb621d3",
"manifest.json": "8208a6521a014da5441992185147f52e",
".git/config": "50bd7ac3d478b05cd88a8fb8efd465bc",
".git/objects/61/04addc3f7f39aaf4a08efb7ed8f4b08f84e567": "d6bb0f5a18103aae40db201ea8f81bf9",
".git/objects/0d/de920cbd394dc0351254fd9b1278501caac8f1": "9690d479f9e0f9706fab544052bd3ae5",
".git/objects/0d/ffde83459727849e44a4d92953cca392ae5203": "f9e8b5d46e335cf5130ff75009179020",
".git/objects/0d/e3adaf780eb78c8e4462c8166902270f2c96ab": "8492dbc5751bd60fb534823c152b71e8",
".git/objects/92/805c5545f4ecf3470a640eb5e8c4228964ac92": "f3d558c0e99a59b010ba25b5ff103dd8",
".git/objects/92/38fca8d6f30d7cc5e5a3d32f223d9e81571a2f": "2a0ffcacf8d925bbb26ad54c4d472b91",
".git/objects/3e/eef09425ab788f8c322865f35b1ebfd17fcc64": "96a9195d50db246481b811906756cda3",
".git/objects/3b/9d8030669217a1aad375cae844f599eedad863": "44ffd99f181819f94b3cbf5612d58e5d",
".git/objects/3b/c1097d4dac665affb5db46818d9ccb6f9bb73d": "771a0d0809877dd492032c2255e07d76",
".git/objects/9b/8782adc1af49f0d195d741d31b3e998d2969da": "a98f81aab630d2cde630bc43bd1fcfa6",
".git/objects/35/757d2b7687db1cfaa0918f13216cf5f1a5bdd6": "89e0483d452d8a7d3637ee6ad41e67f9",
".git/objects/35/1846f6ba28f1a7fd5784b225475efccd8cd039": "272ab75eb5e2390e9faa21e9a36879e5",
".git/objects/3c/7cac61682a79b52501e9cfa511835dcf94b898": "193048bc12b8a06a2bbb44d4cb89ea1f",
".git/objects/56/1c15eabcbc1057a22785a42fac4c4ee20eed8b": "b40343e2f2161bd0128768c7f8661e4c",
".git/objects/3d/076ca2058e3b62d8458526569d91bdc98808ec": "66649910abd396b8496f0f33be965ce5",
".git/objects/58/222d6ea540225a1446f4137bd08909d3b6d6c2": "fb8ca314b283aa9155f987fbadf8cdac",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5f/49c6cdac77c894eab1b88b2501c11a27e829fe": "5ceeff7440e623cf1c56a2c3c833fdd5",
".git/objects/33/7e857c606860bac87d606a03fc8bb90ccae106": "934672a817e90bbfb615176bb389a822",
".git/objects/9d/4389b7ea2478a5bda10ea7d389596ec9bf9dfe": "bd26cc6f3013f97ba0041ebba553abb1",
".git/objects/a4/66baad686745d99b2dfce62a70e2b3b2e3683e": "7ac12f4c40bc7145e1e4adced1d32909",
".git/objects/b5/ccedcfa1f0cfd7e681799a20ad968b1a7b2999": "39da1b04468813029b2dbe113fcfa58c",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b2/15c18d6b09e09d308cfcadfc7bf6968d8a4b1e": "49c84148e2644fbb6ddb4a2feb429d05",
".git/objects/d9/1dd4ce8a1905f474d466dd3490d8a81fe06ce7": "3ed576fd8cc7fa6a7674d7340fc169fb",
".git/objects/ad/351d66628809d3dc13e603348393c50f4785e5": "42b998655509453c38cda8b9176a3c5a",
".git/objects/bb/497d4d43fd77d240446264c0a2a1728c219c75": "6236f89707f731fbdf379b5ebcb8bf9f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/ca3d24c19f5a732ff71faa67dc0ab45a208bf0": "ad608fc0747f3958ce6c0e0bb9d79aca",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/e2/ae71ba287ce69600a458eda6203ef5403495be": "946427c2fda9bc6566a860fc785e8b55",
".git/objects/e2/83b6f4960a88c4b154be6a030cd8934bb4d0aa": "a876d848db8ff0bbe58aaae9b20d7f95",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/95eb0db99bbd38c6f48980694db1c21cd46562": "743b19befb6361350950aacc9bde0e1e",
".git/objects/fc/fda60fb94585bba92b1e51716077e248d18aa8": "ee2118059c2f189de77fc03a38133b25",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fb/3ecd1f804acc4769e2af4183fec33247fe7c7b": "3497788b9ac50cd53a9d36f70421f460",
".git/objects/fb/e0a6466f31f628c4c50123adb181a54bcd9898": "6d648524cfacd6c78329b5ab9e514fbe",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/c1/23e1f31c829188d8b50a90438c4687d441999e": "1cfd309e0a68274dc0b588b0f84a4e1a",
".git/objects/c1/a91cdb52d7e0cffd5db7428cb73ed378379aa4": "e08c74b3a43c03195bb9d44d2f2edb53",
".git/objects/4e/6500c02aa0d0b91ab1e47ace248366375c7feb": "e43de75ca2e688758c6a6004577bc2f8",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d07b3cded8708f31f4671f4974308d46441592": "c33bb29f3c4afad8ff02529a95d13c72",
".git/objects/18/e1bdc61f3e7b7d5fac235ac4bad07aac5d7953": "ad7caac6e4aa83258d97f343e81b35e6",
".git/objects/18/85c358c0184c75a30682ceb3105daab985fec5": "293a8a4988c3d322db8a1c621bfbc865",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/425ebaf602e331b8619adfcf7a256e91e8df38": "71eaa09f7008cd42fc7d06efb167944d",
".git/objects/4b/94d9a0f19059e8aa6b3776b7718caf316f215c": "dbb97dbfc908cc35fcb49cf52242384c",
".git/objects/16/0ffd2bcc84c25b6383e7ed4dd875fe7cf3e3c2": "f4a543cd6613a3ddb89c6a6fb88639b9",
".git/objects/42/41cc2663956bdd31c7400628d755b43a5002a6": "cc2249aff48c5535205a8455eeb0a6f0",
".git/objects/42/7a196d532406a8ef4b1846148b870106e15d75": "af0db8e8a1e17a516500770843b7c633",
".git/objects/89/420ed6cfa6c3e54d6f587f6af8cf4afa70ca75": "63b5ba886bf3a18bb15817d38666fe2c",
".git/objects/89/1d8e164c5460cb4c94b3d4726ced9ca7fc9b61": "c3ba238664045189eb47da30e6b17d8f",
".git/objects/87/b059eecb19caba38bfb1736eee6da28f818543": "0daf80466de5ac5989b2ae0285646cad",
".git/objects/74/2581d4325d103bfa42c4016b5722ca1eda0b4b": "b27dc98d0fb31436a0b65756c741446f",
".git/objects/74/1bef0c95ae6eb409aade19f438848a05c2de33": "7b3dfa1be655128d4d6434a0d4255159",
".git/objects/21/6f374d3108e7ddc8a9d2e70874adfd45751a1f": "503fba10c5c0f84640f8bea5e9f88573",
".git/objects/4d/da50cf3e50d9a1c3f727ba09d0991c4f831782": "e85fbcfd620294916bb25d8c197af0d4",
".git/objects/75/3cd4f286652e35af51e5a26eb81e4f80b0a3d1": "aefa475c6736db36978ab6b46421e333",
".git/objects/72/e249a0ffe5e586d931d3a69a211c2e082ba9a9": "8d6ca53c80759fc06b9abba107c3ea0a",
".git/objects/44/1ba59575229110c8b6d682ea145e04179186e6": "df65829530b6292314970e7b392b8bdb",
".git/objects/88/dca8f9cceba247913e34925e1a9ad318fe2e8e": "76f176d87e0d0d6db5c4b5affa3cf069",
".git/objects/00/0a17eaf0fe9a1a8c3f172799b2ba245c8a96a1": "f0fcdd6dbb6912b2184c6ef4716366c6",
".git/objects/6e/1eadb0de78cc65160436ed94436177141a06c6": "783ff41459a79f99da605ae6464ae43c",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/31/5cc7fb77a50cda0a8acd59077908b0e5948fec": "933745f7f56325352707cd7e74e60b7f",
".git/objects/54/0fd6e6ff01457935304902ddc1f859a2d117b9": "284c18816ccfce0a11d7550b2df6d992",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/99/82ddab9f021af5d92a28007089862d7b58809c": "7ef09cc1ec075eb342753ab434aff7fd",
".git/objects/99/9f97acd8a1d9676b9cf394921157c43d1259bb": "f24682810251f65f322e7f1e1e5cb1b6",
".git/objects/52/5ac4b3dc2ad7699509633ed7e29587e3a17799": "0b3a6d261a39bfb0042df32491061bd5",
".git/objects/52/75b5d12eba6918fbd2bb95851300916ebf442d": "1aa362a3ac715d82c610f7d9394c58eb",
".git/objects/55/b170a97a09a15fa33540011b33d7c2ec15ff31": "1406bcc1d56d04d7ee33bac214b8534b",
".git/objects/97/e5dc9af6e1093966c5cd42d608fd6fbb6a0c59": "769bbf0edfb872ed024f198c9d8d02c4",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/bf/b11c48e7f80c8a403fe098278e8feee1d62e05": "7fe32860b52bfc3cce2cc44f0de41632",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/c33400bc62f47a22119f7121143f2eaaa51af5": "d6c9b913c7ea3e53033943b57d4c1efa",
".git/objects/a0/a3327cf31955bdae6b1cef06f20cf4da7bc1f9": "8304dfd75f352b6e76175d6dc2f3e531",
".git/objects/a0/d0565e211eee4e9c26655f8271ca92c12f48ac": "53c897804be9e7c52510c4052b49a076",
".git/objects/a7/26b090836f8ceba5d1ff4ba9486bf88a15e925": "8410309f1d1b554d46693122fa184a5c",
".git/objects/a7/bdc6f19d94891f6a849e5f8d9392e1de9ffd73": "d45569273acc4fc39eb1599883940e0d",
".git/objects/b6/5164de707ffeaf0adfca5fca65532bf97e6903": "b0c794f74453ae77a83e942b9d58d94f",
".git/objects/a9/9c7b90b2435faf41eedd0851737a805bea6248": "ae342f1d3dbdf9cfacb644eea229cd15",
".git/objects/d2/9b4f66f72d971dc58ee82ae9afde1c464758c9": "6f51e75424660a90267d7a9dc82a5ead",
".git/objects/d2/d197afa888d6e251edccaf49b92b6e7a7d05df": "de865e88f33e4ec49496700b11d23766",
".git/objects/aa/3cb818958709bb2d947166fd24556f15f485cd": "f0dccd4adfab9bac73a74f8117621cfe",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/a6/3b8b094748a7a9c6f1927cb4c67c638713bdd8": "e9d704668a2ccc2dfdcf27336fe75dff",
".git/objects/b9/f070e99a2d82e2a727c9d2c330c7aaaf4dd88b": "3487a0073d180c7d17c21607cab9536e",
".git/objects/c4/f31e1693bb769a7dfc133361a183e654194b3f": "6873435fdc230e6d3b0d8eb57590f90f",
".git/objects/e1/0fcdf625ab1e35ae2aef745fbb5931b4817afc": "e086d2af6c606821984e38b0f3705e1c",
".git/objects/f9/315e39eb0c9f8640e4f1d7d6fdbd9f1f19b3ed": "975eecf2a0be8d2ee28a39bf93c0146e",
".git/objects/c5/613970665f4fa41f30c4a020dd58feb9b171b8": "2b1e535bf202cdceeac8c5c818ea24f8",
".git/objects/c5/0426b7b4d0e53f6528c765bc0ebc059a506ae5": "3048310e8c100c6282b65cf4de66461a",
".git/objects/cb/7ddc492120dd5951e7edef7e692072c50d0c33": "6eb08f6673aa2809df211bb85341b1c8",
".git/objects/cb/9dbd2b70286652d3aa9691491d66f1fce81756": "7389560d77f89584d7caf30d6a747cf0",
".git/objects/f8/5d445381cfd102b8377972b235cf28bb4010ec": "789d067d8a53fd38b59f481cbc592cfc",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/e0/ad32a234e426bfd25538338f4105c64528705f": "562204313cf73e7b8aa9c07862a12684",
".git/objects/2d/f7281c8a903d19dfd11b14893bfacff4f8e323": "4d2d5a83cddd510f985c6d499acd6014",
".git/objects/83/da6829e493c0730313737b48386d33497c6166": "b6744d07203dc386691038069a6790cd",
".git/objects/77/997113a55080f64939ed7bf7e785de6bc38e6c": "979146b7c1827aeec4b8a1a4f88a9006",
".git/objects/48/b176c64b13647f7f1557fb36b2804bdb656fbb": "c1d95b2f06a34c1c11a55017434aae5e",
".git/objects/48/c4045bbbbab49fe7e5ec750e9d09d5794808c8": "0dba31d34da5d4db4b6b0d909651ba02",
".git/objects/70/853ba74ed5bffa4e53112d85036c4dc960e9e4": "07a1af9f5fed331b9904c9999c4705d5",
".git/objects/4f/c25368d33e18d907f730312a009c0563fbfa80": "a030ca1255841a7924269e43827a113c",
".git/objects/8d/76b6b3721ea726c93748ffbd94dc8c652e6fe2": "129404a73eaede5d40212ad29c3fcdba",
".git/objects/8d/24f1405eee2f40bdbd074bb7f5f3ec4c9b5765": "8de397d259d3902a0d24eab672dd2597",
".git/objects/15/b3f68a3426102a94a4c072b36d8aa740b11b0f": "850eb368d9c32082042bce92dc26726a",
".git/objects/12/86de81ef35501c6b5bde56a1fde0eb9586f16d": "36182c9c3b39c7090c0560c321eb4b6a",
".git/objects/85/be74f49a9f6aeb90eef255a23bd8c558b03f3e": "3694131b77c829a4214c237ba1122307",
".git/objects/85/e105b61500738c05364028f3e035a81f5a5954": "db49581a1836df715afc2ecd5464876b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/683b6ff6607dba48a0591db7c891cc22952049": "2790bd78c17c21296414d3ba682d95f9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/6276ca553d870339ccc3ff523e67667f365824": "ba367af796840e38be2b0198b37814c7",
".git/objects/78/9cdc7e7d243bd1f20f5ee0b6a58773adfec3dd": "6db3cae68870fecf55bcfa99e702de95",
".git/objects/78/0dd7e8780719e8ae6c2273f9151e0ce6bb83a7": "e8d3a820192d010c630b71084eb14aa0",
".git/objects/8b/62930ee1346e946cddc31723aa64c55d02bdb8": "6b0ad619a271d8f98f7f9ec8f82ab1fc",
".git/objects/13/0986f6cff59658adbf0361ae0a30012f3d9930": "16358e8ad400e48ebf6d2df236db09fc",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7a/85ec35cdb7993fc0408549b12c5f4bd8efdaf0": "5539031610435bbdb4b25158ba94d2f1",
".git/objects/25/a8432826e38f5590ce2dcfd28fa9835444a6dc": "56ddf8e4b55d14be229440f1dc60f4b6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c67cfe160bf451e344743c7514fc020",
".git/logs/refs/heads/main": "3864e9963a19de653d58489bc257d02e",
".git/logs/refs/remotes/origin/main": "ef6e488b0bb0ca357b8339aedc7e09d4",
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
".git/refs/heads/main": "c6c81612412979fdfb9618a96dcf526f",
".git/refs/remotes/origin/main": "c6c81612412979fdfb9618a96dcf526f",
".git/index": "d381c216bab1d360fb03c258ca5d8b56",
".git/COMMIT_EDITMSG": "e85dde330c34efb0e526ee3082e4353b",
".git/FETCH_HEAD": "7d97abd27f61a8c95a7d1d5ae18246f8",
".vscode/settings.json": "2a1b3f23839b9de18082e3e12358a6e2",
"assets/AssetManifest.json": "795c818ec79d2051ab6edc4ab2f15def",
"assets/NOTICES": "dd61db157bd30a6424012db66381162a",
"assets/FontManifest.json": "3be8ba3ac6cb2670d2dbc1a5dfee2fa2",
"assets/AssetManifest.bin.json": "40fc86ba4c14bf9b8d25881b3ff59532",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f028b0466808be78e8dd4da11844924d",
"assets/fonts/MaterialIcons-Regular.otf": "bf11d531784174dcf0678fd7d14fbaad",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/motifs/heropatterns-white.png": "e690645bd17ce0be722abe7d9c3d0015",
"assets/assets/motifs/heropatterns-black.png": "db8a9290897fadcbab79a3815fed68c5",
"assets/assets/feeef/feeef_icon.png": "5345488fda48e9ad642d1d243d587b8c",
"assets/assets/feeef/feeef_background.png": "cad8fa9bd9ad45f1596016883d049f19",
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
