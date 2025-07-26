'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b29d9b35c4ecf0e4c625331fa43520a6",
"version.json": "b3e887e71febb96e76eaa546b8f4057d",
"index.html": "d2a3749c0e67e10706ceca0933603995",
"/": "d2a3749c0e67e10706ceca0933603995",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "eaeed63000a4ce6ffdb8fef13b3f08ed",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b78c10780ee3328f1518dfad2f8fb803",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"icons/Icon-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "d5306ea2522898031d21e99166fb4d56",
".git/config": "e08c49bbd46bf55243e672fc7b422f36",
".git/shallow": "48692028ff1f5842a0fa137ed0e499b3",
".git/objects/61/cc9be3f5694ba960dd9cc8b7cf7bfa5448ca2e": "a6a74e64a3c52a1084c8618d994837f9",
".git/objects/59/447d31f10ffec1da562279f8bdb5d9025b1e4c": "f5ba6ad2c18314147b25cf92932b43da",
".git/objects/59/c08ad11b51eb586ef6f0460eeb3a7a889055a8": "204ae573658bfadc7b371d769acc331a",
".git/objects/92/e9c33c565f26f7ab7b7be8bf1493756d0b1d40": "bf09eeeb8564b42ab6ade21f1086c90d",
".git/objects/50/d331f3a0970799bb010a651afd6a74aeaedeab": "168ba12bf6f93e0c5ff1791ceb1ed384",
".git/objects/6f/a7ddb6c9112041adf767c066717745245f8a0d": "f7a3c46cd9e8df1da37b0a5a8802c359",
".git/objects/03/7e29da1ada39127608248fe6811c380f4da4bd": "65176dd35e6306f19a88d38b6ff274d4",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "7fef652fbe034911f76c4da9e817e225",
".git/objects/32/27c6e938f361475cf5cc596e14e578a937df8d": "21a296e28b48d78d0e1cfc99f5ac9ce2",
".git/objects/51/4b6a563183e5c08367e649d2ee3fae1d95e0ff": "e878de6a644fed5093ddbf72a2489589",
".git/objects/58/cf547d6668129de234b7c3264d32f93f8861c9": "29c941970b921146a13786b817431b05",
".git/objects/0e/b95fc5f3e00d4e668a8a19ec1af291ec22f252": "ff9ab120beec7a703034291257c546e7",
".git/objects/0e/ac28f503df9ca43313a61ede03584ff454f90b": "2008e15e4418e6dd4d0d9aa176911e4f",
".git/objects/60/7f8718747cdfe55515e0f40bd9b642d2742e29": "1b2b2c6d63f7fed654b03a2a40b3ed20",
".git/objects/9d/612b5a6a0802229b08fc3d43bd5fa594035555": "6cb558b670da7fc99602d37946ec4ad4",
".git/objects/9d/236e19c177c283c9597e000aeceea54e4a78c7": "158044db91222a5aa9522215193844a4",
".git/objects/9c/b2aa8c30cb345859b0758cd004a6bf3ff06ddc": "5e41e801e715852972a26260b53fffb5",
".git/objects/a3/cdc3a316f6fd44ac9b53d55c0eabac8da0d598": "d5f8f93c4d50afc5b17365f74dd2c4b8",
".git/objects/ac/ca54e9edcfae20387d079e73fa1fd7d9d380a3": "d8f0ed8e0be7d92e472d6371b44fbd8d",
".git/objects/ac/ee0b6246b215df545c55f03d121025f6585334": "ce1d2f9e12d94e153ac97b97eed8a491",
".git/objects/ac/337ce02d9f41319f343fe545ea0bfac32fb1a2": "b658986fec61ef65b2160f16755c9241",
".git/objects/b3/2c61bf6ae432bc9976b6806fcd3c3e77f04a1e": "eb05c34afcb32cfaf3a17cc596af694d",
".git/objects/b4/17a1a90e26eebbb67b3f80ac135a946850d21a": "38ddd95399b627a775cf6cddf1e6babd",
".git/objects/a2/2c1bc1465f5e1ef608ad20f3838a667bcd967e": "d088726be55ec814a8e97681c47d6e94",
".git/objects/ae/b0613ed9ad40874c14db62250254cc1417dcc3": "aebd177cde97623ffd852eeaf67a3072",
".git/objects/ae/e483fd1574e5879ac7e22767e6e23c5ca57b63": "90be8e5df6e1307dfd0ca62d9694191d",
".git/objects/eb/2ade151e3407391cadde9d959a9d7547d6ca21": "626e7b13a15b3a988fa911d55166f18e",
".git/objects/fc/05e9b68ae987684f1b7ee365e5414fba3da37d": "60eea02b60a96a26c1593d7754955f8f",
".git/objects/e3/3b1a5427d5f17beda95df73188849867b4435f": "179481fc2bad24ff23aa356cbda646ed",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "b8a36c8cfabd566efa7afcbb37489693",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8758ec0601c68cfa14e5aa0bd1db956b",
".git/objects/fe/4674d454474c756592ea026b274e959e5d7e77": "79ca8451938348548767f449248a417a",
".git/objects/c8/ea356f0f092e1c3016127ae3b7cd641eafaa8c": "b7768b91a3b80bf90d913c80f5d44c69",
".git/objects/c1/9eb06c6b72903459abaa3065d728d2c7c721f0": "cf644f43810b06987329f7b1ddb3c913",
".git/objects/c6/6c652799b62dca327efaab0da089009b8689d7": "b050627dbe218295419a946d99c9279b",
".git/objects/c6/b3c94b9e789bb71b0530c9925f5e6dcdaab10e": "266da69b7d621309abb1d17dd2da44a0",
".git/objects/4e/b610ae57cf9b5e931181468500d60c4aa635e6": "e67ea28b0072c16f8d870ba976a3e26d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "1eaf6fbe076294c3f0daf90d55e4254a",
".git/objects/18/1ab6a28362e21886cbc2d8ae15f1d2a264803f": "1baacd2c0c33f7a3b0f5bfd595ffdb6e",
".git/objects/pack/pack-48fe256bb7ca269407e77a0548bdbd74ff6686b8.rev": "3e9ffb1b489934f6f48ce722b359641a",
".git/objects/pack/pack-48fe256bb7ca269407e77a0548bdbd74ff6686b8.pack": "18dda05dcf3c45185b3aebe3dda56b16",
".git/objects/pack/pack-48fe256bb7ca269407e77a0548bdbd74ff6686b8.idx": "923efd6a62405348fd928941576e462a",
".git/objects/16/3bb9501b6576484b5dd0f7dd13ba4d8db263d5": "db77337d97effcd8e051bebeabd5e777",
".git/objects/16/166d8e6a730d75d41d320acea64ecff2b341d8": "597bca8aa78781474530f12734230ee2",
".git/objects/42/8bf792ad46b2ce465618f6caad9a821f554a82": "22e0b9c96a64642949eaf7fe738d45a1",
".git/objects/42/cfaec6d0810321db687fd487143681166185f7": "280eeb36d10bae21f10a86b3b49a17b3",
".git/objects/73/2cd23b6728a763949fea6a956bd2ab11eef1bb": "adaba8f8f795f062f27606b2473df855",
".git/objects/28/cd5b2c55d4046f8120b6057bfa7c105368931e": "852004d533e1d54fff923dbe598fec4d",
".git/objects/8f/3756b5c796ef45ca8075fbe9e65b9b2daf10e6": "c1e5bc6a046e8f4cfbc3d8c1a9ca6758",
".git/objects/8f/ab58e8d42e1d616c17a951611bc1771fda2ff4": "3efc9b3f39fe1846c93a4429eb44c0e7",
".git/objects/19/68a9f98ea6c9b70994e25eb206a4c274f60605": "40af5e5138e3ed8330b6bb2961f84bd3",
".git/objects/19/493fcf6e959a841fceea2370a7666aff76026a": "5c182db330df4c1dc88666cb4d7bd8b1",
".git/objects/19/439f887c386fa306ffb87567171649b75bde95": "94604589e32d771a39307c78731869b2",
".git/objects/26/e64c810d7c914dfd8a445e562f4e61db3c1d13": "8bb9a6c2ef0d3d33eb08f4834c498fff",
".git/objects/4d/9cd823be9dbc388dc1cc9b98e4b718c3cfc617": "f7f2bd24ad340894b14d9885389a4240",
".git/objects/72/dd8be04ee45b7384d2e1d066572f75be5f1ab0": "0c9da83a5bb8db22e22ebc019aa9977f",
".git/objects/72/1f569c50171016115171f35df39b2fbe2ed427": "1331b396ce1e4072afec532a7948f4ac",
".git/objects/44/05cb0a65908d21bfc42bf42b4ec38783cc9174": "a0bcecdb0f92b86e9b46b26b23920ab7",
".git/objects/2a/ce69560f0d629798c4e2c8fa24b32bfaaae25c": "2c1cb33832abd9b1b9830ebd0f9460ab",
".git/objects/6e/97cbf2df2a273c3a2d24bc1ee7678007326050": "3ef4b721edf352a22d18bba1d33a2290",
".git/objects/9a/8dee61c76a5ff573b0dfe89fc0199999c8bc2f": "1091c339b2c01b743b8f90b972ea3891",
".git/objects/5c/e1f9e719c406cff6052f3188d406ba074cf665": "3a9d730d28988e8c104ce44d12bd4769",
".git/objects/09/327467fa771625bb84c29e6de246cf844889b4": "cc013640c8a4dbd04cfeeb1000f5dfe8",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "673571ee0bcce7e10d7ca6c90f04f5d6",
".git/objects/5e/81e4a373629513169eaf72b0cddc2a6fd6d10a": "2fa9fd6a8a57a4248e4c338fddfeadc3",
".git/objects/5e/80922d1273a8faed49894be143f25176ebf21f": "c354367ee2fc28c60d0cc05605757491",
".git/objects/6d/986e385ff1e4638af234d12be39bdbd76d1e75": "ed2e27695e9f19e4ae9e39304db26c4b",
".git/objects/6c/c0d27114fece2456c15f9a97e11f0d4be6da0e": "7579480585053ebc6ac1b9bdaecb15b1",
".git/objects/6c/14f3d3c1d8d97d7be71f11460cd2632df4744d": "950d9122e4b347c22bea34aa5bea3489",
".git/objects/39/5d00268f34e9e7f087f863155bd2923d314e47": "dcdde60af429928a54b761f833e5236c",
".git/objects/52/af067898408c290b3e2dbe3e559d22b8ad892b": "29866909aea0b80290b69a24c2414c13",
".git/objects/97/ce85f55e559721fbfbd6adf40f37d3b05d976a": "22be7919ffea75d486f4bb3a8d8dac18",
".git/objects/0a/4cb87e15d17dca65136829c5663fd7f1969083": "60f31c8f406f39d736be670f05ab8273",
".git/objects/64/de413157e9a6f9fc419ec6d9c42632c9e77268": "68da864e0c99ac5b5cd233ec571f0433",
".git/objects/bf/d736ac63095b617d6e2303de139312c0686399": "856c5a8b7d32dc299a3b094f54f50864",
".git/objects/bf/49767a51920f36878c9fd1741603861b3eaebf": "34c2f06252b2dfddbb3a7568f9eb53a6",
".git/objects/a0/2a500d0551692c8b39f86df8bd49791bc44ef4": "78ae24abd83e53d45b0ad035006e2107",
".git/objects/dd/fff0c6bc52a034166ad8eb43fee9b8fff20366": "0d92715818734844f29b5b8da4b73be5",
".git/objects/a9/347a0cdbfed8b58fdc932d70ba3d8a237dc85c": "5e2ac7939f8168e715416486451f03f5",
".git/objects/d5/89be2d0a22073868ebe244c0f40d3fa902f539": "7ca0740d6309219c4aa4ce08ad1f751a",
".git/objects/d5/590994f676e182cbc2baedb0afb1481ea993dc": "d0a99e00f2865b6c2847e49c6a19d069",
".git/objects/d5/aa6b1a8410bd494a97af58761b495cb1adb2e2": "0284d1a2da8c6d3a082d2258ac2d7766",
".git/objects/db/656b1f581f355521210f23bc4f4874bce1060d": "c076dc73c00080c81e61a422c8c29946",
".git/objects/db/f2a7781cfd8476c0775cb78502fd870076cac9": "b1ccaaf3a787bfaceedb65b11623eb2d",
".git/objects/de/eba9da9721ed3dd5266198edf80e8e2cad32ad": "011164d743e3b5e9cf8d757b9397cdd1",
".git/objects/a6/98ff994bd51255523475393534a91ef016002c": "5de9738d6e1d7205200b2da7fbc1f0db",
".git/objects/b9/81db1c111d6d5a429e9f9e81b1bffcb62d58e8": "4b324a94111b23ea2602cf69f16dae8b",
".git/objects/a1/f41c2a88b2fe471c4c8de665889505c4826066": "583c777c875cee99cf13db8105aff84d",
".git/objects/ef/61ca290f96ff2508c3eb56f415d69a8f4c2b2e": "ad4b80e846593cdc7e538fbc8f70f995",
".git/objects/ef/e61e88a11c1bc98656baf1c508fa238738db44": "1b7c1d73ca5970fd28908b5d0aaf4805",
".git/objects/ea/42a469ff4dfd992e93bcaefccea72adeb7926f": "10821f2a0e255608a09b61072a083f37",
".git/objects/e1/55d26b6986dc606f3ebadd7eeee6413d14c208": "219b7d8f658ebb3b3b8982afd6b8d360",
".git/objects/e1/5d167386d7d1fcefc74bdc367cc5acd6a58f3b": "48fbb342b86388832e8b258f23bb3a3e",
".git/objects/f9/77bc81f5837358443e25da6b09c79b99db233a": "81cfa5b49bafb30ea1dc4eddcb7f7edc",
".git/objects/e8/7a89a47ef2b6f38cbce2bbda43f7e590cdda77": "85d3ef9ef75e27496ad6ffc531b5bb1b",
".git/objects/e8/52cd658a3d7108a0812bec938c6c3388f692a5": "9cba4de04063693770b67202f6841e20",
".git/objects/fa/b343ecfb3e75dcc5716f1653317f6fd4b50e5b": "cfd12d2364c580e96ae67c503cb37578",
".git/objects/fa/9298f3a3a5f53f2a192f029738ecb691ac36c0": "0129fa7e26e19cb02dfa762d6902ae54",
".git/objects/c5/a19a7f50bc9465ae7b4119b01f6cf5114d8a1b": "13bfed94d6c511912e4407dd2ca49a0c",
".git/objects/c2/87dff20ad7d483aa75cd734bd9d94848a6b37c": "5364b517e4128db87e0e513202dad35f",
".git/objects/f6/1891cce2e7c9786557305390c91aac9f48daab": "2472727a440bf466f9a1d17c05dce22e",
".git/objects/cb/b42b5dde6891b0f51e006b822a07d5812b4d5d": "a58f79bb7256fba989491f780118f5cb",
".git/objects/cb/abd684caa816b8ff725559938d02151a300f55": "c336ae0d3757cf3a89b26822618ae921",
".git/objects/f8/93a3be2fc4085749bfe593af9cf01659d74e76": "9b09effa6347efb64cc1632d7f05736a",
".git/objects/f8/95adffc5a1e11bee14aa0a0ee9b2dd021ff4d7": "bac8e809bdcae1ae7d29c5785027e23c",
".git/objects/2c/9c75a0312ca0d6c066aaf72a23690d65cf57b5": "1d7e41cca75ed4fe6c7121b8507fd652",
".git/objects/79/2d84a163bf49a3df2264968f0424dc788ada82": "9da987ab9e6f01bb028475aef159b648",
".git/objects/41/e01eb2620665be01048ee2bd6e25fcc005b68e": "d8cb992062cf01fe4eddb6a89623a77d",
".git/objects/41/1fef3fcc117e74386c7ac1403be5e713c8bb9a": "3af844883104bdc8e485032ee53fb054",
".git/objects/77/f8ce9a943ac9578afd87f8a15192f0d9e33202": "12bc7016c75a3b146caefad21800a42a",
".git/objects/48/40a41bf4311d52bd7639d6b9f787e36211b959": "f54a3450b747f03a1f81c2d020e583e2",
".git/objects/1e/9eb4f1eae7a5174fb054e3e6614343a60dfe1b": "fc2f456bf99006aa390d794d88111366",
".git/objects/1e/9761a44d494aa737e2fbd98517dfdcd7a6c55f": "7557181268a10bdd4eb9a8af070e5146",
".git/objects/23/1c0f5484d276563f7ae4784d46cbf8f47cbbe4": "5a9b09e2fe4953ac14e279d75b04d4a1",
".git/objects/23/e030deb072ecb155822e4a81bcdae3dfebd969": "d7269556290e10888a46e815b455789a",
".git/objects/8c/dc16fde25c1c0e9eac11eac060f6561f989675": "21f4d59733678ab7728d5afb45f09fee",
".git/objects/85/2e473177bb7c398f6671d86282b999edf5c0be": "79d06ffb2fd49ff261e744dca4c88c7d",
".git/objects/1d/e4b328c1f4861e8cc87975ff0eeb9ad5b8825f": "2b3d8ce3a788cf922177389b968b943d",
".git/objects/76/e9609c1661508facd785ba9808ef2b51e53b80": "b65d4d9d4e1fb16e3a383cdc7c7c32cb",
".git/objects/76/b60bd676eaf11324f3c7432f49a065385cfa3c": "33ba11470c7f64976511260488091b53",
".git/objects/2e/517fea7443e21885d7323e97bf4d576bdd19b9": "1e477aaf1681663a95d0c511acb02b45",
".git/objects/2b/b23a56508f5ee4d7bb72dff880320c78201622": "bbcbc0a2d9320bb9e7f2b0902c293312",
".git/objects/7f/3d1db059b6e3ec5dfad098a711d1b00c716113": "d132aa65cc625152b66f8ee46dacdcd9",
".git/objects/7a/73fa0c82a87d75d97c55a075c78a63ef6a006b": "d531bdc6cf0788601507ba4351e4146f",
".git/objects/8e/83ae7715a9aabf9a11e80901d7406cc97f9cb4": "b02bcc982cd98584d413fbe60843a756",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "161ba57e9c3246f533c92849feae6ad4",
".git/logs/refs/heads/main": "161ba57e9c3246f533c92849feae6ad4",
".git/logs/refs/remotes/origin/HEAD": "559efa1aa1e0ec2b353cc1b1c47f63e4",
".git/logs/refs/remotes/origin/main": "01bdf687b4ecba21b77a448ba132ee20",
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
".git/refs/heads/main": "8270a83bbf3a0cab05c30efbf206db5d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8270a83bbf3a0cab05c30efbf206db5d",
".git/index": "547add6f5ede41076166579d5a9d6c29",
".git/packed-refs": "513ed1a8e9b64448297f44fd59f6b4dc",
".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
"main.dart.js_3.part.js": "4818bb60d19ba74906653d0e841a8688",
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
"assets/fonts/MaterialIcons-Regular.otf": "a85fab1922ec329687a885f68c0955f3",
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
"main.dart.js_2.part.js": "8387f9a66c8e32305efd55b99e91d72a",
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
