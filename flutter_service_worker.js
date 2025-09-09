'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "471182c2f4e0a7f2bb31707a29a00668",
"version.json": "9933c3bd3a483bdab94db9ea580b0d08",
"index.html": "6cb3e307da99fc5bb6b33a17a5bd9db6",
"/": "6cb3e307da99fc5bb6b33a17a5bd9db6",
"ultra_fast_animated.gif": "1f36943419d568794126f3f4a49552ba",
"firebase-messaging-sw.js": "e1b8eca9d5ca5ad77aaac32a0731b384",
"main.dart.js": "49adfc973ac5fc71ab911cd4e9da3390",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b78c10780ee3328f1518dfad2f8fb803",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/Icon-maskable-192.png": "7d18e770f40d8a1256e74ac879523258",
"icons/black.png": "903d03da41602ce03f5c92c4b44e72c1",
"icons/Icon-maskable-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"icons/Icon-512.png": "f199dc79b716dd7085dc93eadadd4c2a",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "662df95fe8eb7a30206c29e62d59e242",
".git/config": "e08c49bbd46bf55243e672fc7b422f36",
".git/shallow": "d22020968c06953ee507da7b01ddaf15",
".git/objects/59/15051bb526be56e94de2c86e32063be18eae0f": "421d254ea515627bb406cbac9efd99f6",
".git/objects/0c/116a148db9af5f5a3a3add681794054e459d5b": "8c108cd6e340ac9e9b8d82a80330b90c",
".git/objects/66/3a83d938668a450d6da6cdbef95c7858a31f54": "dbf069f7ef7b8b7c401b9f94419e9ad4",
".git/objects/3e/57a6b0000209907d90e9adbd227c6873eabc35": "54b0f9a8711fb2e22684427558d5157b",
".git/objects/9b/96b3c2dcffd33427ed593162a3ae5e1ef21af5": "81ac432aec7c2bdc9683e4b41ad8c483",
".git/objects/9e/dcc602c40031dce6453f976ff12a2d49182651": "5fcfbcb62c5cc29cc2153634921614cc",
".git/objects/6a/afce1fae3ecd995afd79fdc1249e41aaf07988": "eee9c2c6a43d3214eecd367b1e7301f8",
".git/objects/32/abc31a2492fa76f5b1a227cb7d7337db8481c4": "6337c48f05b4be66b6dceb22fcf76d50",
".git/objects/69/2433966ba3ecb05550c22285d1fc75d9f487f8": "3523269985537be8ca323eaab94e095e",
".git/objects/56/757ab351febfed0af0e91358edf63bf9ab609e": "3d59c237f7cddb46f814107aed9547b8",
".git/objects/3d/8c5b8a5fc65177bc8bbdf051245f2c766372b7": "695662c2f4ade4a34f233c636acd4834",
".git/objects/93/3471e6a70d7173de0c868e0f382ee3f20e6b2f": "962f2913f1da11ac089cbbafe6a18813",
".git/objects/0e/2aafe0ec3becd056ac211d7fe7df2e7827b234": "ab5d8365d8d4bd740296fd9ea2d6563a",
".git/objects/34/07c92d4b1a4c0022e49686260c386bdf7a8603": "952300caa502b1aa3804f0df4b4ba8d0",
".git/objects/5a/3d972872da9aff13845e1ef39fc04421ac8ffd": "dbee05910d87e25647a43ea0a85d3be5",
".git/objects/5f/bcc8d787a6a350c5e5de32d3d8fb9b8e72506f": "3a5e0a4d5ab7a007fd0eea79276dffdb",
".git/objects/9d/8b98d10d5558d16ed176c67dadd414a7578ddc": "5d264ca840e49844cb9979c24c37b98d",
".git/objects/9c/e394b0b18cf6bf998817d013223d45a6acbc44": "e412615cb1b5e73d2248b5e9b4c9607d",
".git/objects/a3/d865d02b89a10aa5fd35229197ed47a5445e04": "bdbbac46868bf513d5d3a4247e82ec74",
".git/objects/b2/b7e337bc8ec55f0c90232b655111e4cabdbe99": "5c2b0a1441fe3cd1cb77076fc14bf2c5",
".git/objects/b2/ec1860a456dcad37cf417797f0635822b3b02e": "34fcab70421f665678f27eae9063a8b0",
".git/objects/bb/cdd29d35f796064500cef3bba68028f446c35c": "1709a2b3fe69ec9c992636198ce26bd7",
".git/objects/be/88518d0da72ffa46a33424e6c286a9e8db7f57": "7c41a660794ae1660cc80b015f6fcadf",
".git/objects/b3/7bb9acc0f4c41cc3733f90586f77d0bb91c8b8": "5333a4514f2bfdd962fd1396bc3b2dd5",
".git/objects/b4/f2d0101ed8c61a82e3fc9284464fc575801f65": "4c66b845e89124b7ad52306df87a0119",
".git/objects/a2/598bda6602d9d188c5b80731be749dd1880d72": "fd6169a7a5a4b4a7c5b1a57c44f9b663",
".git/objects/bc/c74df2baaac904f5668586085a94ae9d0708a6": "a7712bec3d929868b7fb73e872ec06cf",
".git/objects/ae/9c2cfd44165b547997e87dd7678f04986ecdb4": "07f36ae2632520c0b81f5e24fb96782f",
".git/objects/d8/46118d762afc695804f549b8498e9fbaa0dc2f": "8c7f57d3c0143fca14155cbec096899a",
".git/objects/d8/b0948caefe886d3347549585c2cd072915db3b": "fca66b9d51f33b40b3c7704b21fb42b1",
".git/objects/ab/9d421a308f1b98e5b99c20c2554f8a90f72063": "1689e4151fcc0956707af6c5316000d8",
".git/objects/c0/05ca038b2806f068f42e244213e8e83c962556": "298fe10748406600f7cdf651e81a306c",
".git/objects/ee/1c1a82268f3d1ca0fb859ec0f2d905427ba951": "9c165002805d9d0540553bdca6e78d1e",
".git/objects/ee/8f44cb4ee461b51a6b8f52da5aa15702d4d549": "f2f14b5d1b14d26fe53bb75c304d14ab",
".git/objects/fd/f83011fb9d82f08680be43d214fe08614a43d9": "a337ea11342508c054584130c317347e",
".git/objects/e3/03ab359d2a4a68f5609574611ec7ab2f84e522": "28d83e9a705c0581dad359b96280c466",
".git/objects/ca/2d83da13ac5585f587e9d4206910f5c4704d61": "8e11e9f9e023499ae03112c3c6fed3e9",
".git/objects/c8/0f6a1849f6034122134379bd0c23759068bae5": "3101d6c19932a22f08d71a9e1936c900",
".git/objects/ed/4b89307b286c76cd9d4b7aa4f45fea1b234e0a": "1521c3fee962f0ca54c252e5a3afaafc",
".git/objects/4e/7e43f464494a535fec7c7d1e440419a0750960": "2f946c6ed1b6bd931c35be5ebd90e218",
".git/objects/18/c0117c7a6fc576ce84f200fd0c0eb8db5dab60": "45e1e77229fd92da56ce6b7ef0983006",
".git/objects/27/9e7ac471f48c7df846fdd7fdac69d2f76a285b": "90855bcd5d956c84a471a72ac1247a1d",
".git/objects/pack/pack-63a406808c7b9e2c997c938c6ebd5f7d49304ca8.idx": "86eee210586f033a8f4c4e80418c6027",
".git/objects/pack/pack-63a406808c7b9e2c997c938c6ebd5f7d49304ca8.pack": "e51ddd14f719cb42ccfb42daee4a46da",
".git/objects/pack/pack-63a406808c7b9e2c997c938c6ebd5f7d49304ca8.rev": "d95fec36ce77cbf187fe33841d1b3605",
".git/objects/89/5ff0f273d58622b615306fbcea2ed4214e8a4d": "003516940192faebab9ac405a0441cc8",
".git/objects/80/ba93b92a204d03c479bdd7ab44a9682d8f5910": "91abd35940421e04fbd4d7b81e4ed254",
".git/objects/74/256bc31a2fe8c879c0e78fb64f87253a8bbc84": "e39beeaa9a3b9b91f8bcbc07de66d86d",
".git/objects/28/35ea5b9320f5244045da274bd2df75b3fa270f": "cb2a9486d066feb14e38a708be793ef0",
".git/objects/7b/efa5080f62aa5805629cff4e9642fe13fa9dce": "079451bf18dc55c45b3a38c7a4e9ed7a",
".git/objects/8f/8408255b5497d5c3c32a0b90438f648dd3ec99": "e28433b912261d661f608f43a40d6f97",
".git/objects/8a/87ece4f06fba42d21e8f8c3c572a46c10900f2": "411e0a3396842e82413b87db195b1072",
".git/objects/10/1cf34205b41e54cc78d37be43fb3ff67015541": "0f9e34f7fec39865adea5874bced3ff1",
".git/objects/4c/124ce0bbefff37351defad27c882d19b65159e": "79e29f6dac4b21f86444f521623510bd",
".git/objects/81/928fa6a314d55bf90d5cdda19496c456fb9879": "b49a9c9d2e38a9e3e5a684aa590ee160",
".git/objects/86/a1facaac782b72a745ee861c8d746f72715b0b": "ffb3239760b06c781e397f99e8b42721",
".git/objects/44/3e2336832b9052b49c234131e201557d8685ad": "3c72ac092c726c773bc63f31a42cf547",
".git/objects/44/c837597d3cf054b9bd97b05179c4ef0ce2eeb7": "436a535da6079478ca546ce24ab160ad",
".git/objects/44/41fea01e4002529b9ddf6b6aad268e6058b015": "17f6a5ef743ceaca2139ba7a3759ce0d",
".git/objects/2a/49a2d5aa33046212e1191d8b9d5658be784558": "e824208ab5784099a32771e65b46772c",
".git/objects/43/af128937242f80358bb7de4aba471a6f2e2a0c": "8a9926c356a423b86c2efdf97cc94e71",
".git/objects/88/04eb3e7ae61f0708c3df1aeecb7fc0b7a10b5c": "2fc3700792a80991c8802229e032c8ae",
".git/objects/6b/739a761f1b3889cae86878b71bc5992e77c99a": "83cd1ea40acc91e9f6a9446d03629aa7",
".git/objects/07/5ba7ab45860ad9b07a770a0aaaa246556f057c": "560c3540d464ba245d024c3ea247d4cf",
".git/objects/38/689618c5a6ba37e4b4e3fb1c1556c9df007d72": "46f6890151af5b70a193dec3e574ecd1",
".git/objects/6e/25557594b6316da4902a607248e2f02747db2b": "62c265398e8fb9b898f6c0f117311bd8",
".git/objects/6e/97796956d1ffa7d635b1e4ad66b0f3d28d7096": "12c6aff79b52573b547e4ee804844741",
".git/objects/5c/1cbb4a509fd9679c15a732ad12f1d2786136a9": "e483ee3b7db044b741789a96692a1d11",
".git/objects/31/d66284b750e7266f58174f05a7348544f6caad": "0cd660141fce768c4f0a6ff1f474a1db",
".git/objects/3a/ff494665bb88fec34cd5400cb031da52a4cefe": "603b9ec1637224d9b0d04d13b636583c",
".git/objects/54/e6771a03ed9f67b80741f78594ee264a620271": "57be5e2e2bfe33ae96ecfc5afd30f462",
".git/objects/98/743794173408da4bcacdd11f6842e8807e9c22": "f6611385fc2bf651b8940739acbee353",
".git/objects/5e/534f911d4a1eeac7ab13c1cc32db5b29cebd48": "1b17c0123ad164d0b22274b340397c97",
".git/objects/37/f52c47ed16f6862bdf28931368d87fd3dddce2": "8c5147d86d9289236140e2d26ff8f630",
".git/objects/08/d7663a3104c6de753675b986b4f799f2dbdf12": "ba8caf33188258e08ee12572f4458ce3",
".git/objects/6d/c936e4546f8dd46dddc377aa720ce4619f167c": "eeae4782c3c96fa449655eb5adf7b1ef",
".git/objects/6c/487795c6ebc163678c7a5c8a9e5a542a14a7d7": "8c91c268e584295a28505c0715c2df35",
".git/objects/99/161fc02445369aa7d1d1860eb3c9f3968f6dac": "b00f24d4cda0341d27ab11f243d05ba0",
".git/objects/97/cffc60ddd6f46853addf308780512c9e4d2174": "84a83ee43a3df1978c574cce86a63c2f",
".git/objects/97/a2e9c434ac9ca4d105c797871605eefafbcdef": "1ddcefecc6eb08ac860682bf43cebf31",
".git/objects/a0/afa90dc85cd0227627a7d2b0661d2f58ba0eda": "40982f89351ee3ed70b431a1440ca4a6",
".git/objects/a0/fcc01cbf41739026540734280d0fcb9daebf19": "dd6d520e42e4a4e6b3fd9ee32c068fd7",
".git/objects/b1/5b71344dc660d07ea826c83c9bbe00206a028e": "673991a585a7522c20a45ada99af06b1",
".git/objects/dc/9d53413ac64933c2df96a18c095550c8adb352": "efc2961c0b82274b86a84482a687cce2",
".git/objects/b6/e7f940812b72f421cf360f8b1440aba5961a48": "f8b0a3cce74d7da0dd43656f9b1f2bae",
".git/objects/d5/81bfc019b71111faa59855c5e32fad6ce13e42": "9005b7caa6f0905c617c6549382b3083",
".git/objects/af/9c795a156652f0056a103f84fa1cd878171c05": "a21a41158f4e7479f3dea0475356f478",
".git/objects/b7/70aa35555d219ae0d80b90fd9dc9a6fc0e4800": "76c427963340ef34d9b7865d67f1ea88",
".git/objects/b7/f242542d9421aac6d82c151ff299591c0eae4a": "6d3aab7790d32cbc9e2d10de37477493",
".git/objects/db/13ed937d7a6e7a32470dc714fc617d666c207b": "5742093236f646c09aeb43c5853a26ba",
".git/objects/a1/70eab0a6a8649e821058e8da202c96d63bb39e": "11f72c815ad7980aa2474f7771758e4b",
".git/objects/c3/e01715f00a0123056a2f7bf1b7dec0202ec60b": "c6aa198f77b4e85b5844f68a24d4eaa1",
".git/objects/cd/f0e952bacf75eb4d63acc9f548e31b70d1f9e5": "cde640bfd6669918ca47dac43e58f5c9",
".git/objects/cc/f7e57cd6460098312bea21836857f340de2577": "ef49df065cd788487eb2637a556b134e",
".git/objects/f9/c848f71359b50492fe883d734483795b18539f": "0d0cde7acfd322c1e2c12fa506f18376",
".git/objects/e8/aae78a7a6b6d4d08fb4128a6b21576e0cacbaa": "faefe33267b75eb9bc857dbd249354ca",
".git/objects/e8/2d136e89357d219b6195ed2f63b929cab62a4e": "b0e69f8e75255a6e0571c8bb3172372c",
".git/objects/fa/c2735005e3db2f45e055703f42e17d7121a35a": "ad455a17da0a75ec50822b17ef2fad22",
".git/objects/ff/c2be72909295a0167487a5f71d416ea34a102c": "e09b22e3c26945b65997eb19dc42002a",
".git/objects/c5/6700cf70f89ca153423e31968074e43d1f393e": "9b41325e4f967eaec4b228cffdc1042e",
".git/objects/c2/c962fa0be86c275fb470f5955b672b6fd6fd26": "51133b22f0d9b32fec996696cc921b6a",
".git/objects/f6/d6e0cfecf87b45f1b62e92eb9b0a7a062f25e4": "65667e7c043a46e935f747ae4fae96d5",
".git/objects/f8/b00fe0366e6be89f2398f8e4cc7f1ad5bd1819": "699466efa2becad811bf2a3e0e558186",
".git/objects/e0/b5aceb932e35410de535597b34839e79d2c30f": "edd3e92342a91c16d543a7210abbe422",
".git/objects/e0/bae74cbebfd799b973a1e1d0151b6456b93d42": "a1add106702b5079f02ed3aa34b1a8aa",
".git/objects/46/736f0d299dc1fd2810680a64c982afd4cd5dcc": "1fabdaafcc864d2b3096bc0817f64a9b",
".git/objects/2c/1d1d9d1ceea4ca8c66a1e2c6254c0e375f681e": "ce0c78a215965d4de26818ad4955c444",
".git/objects/2d/b0ab3b64b668f13f46c717fa2b2ca3040318bd": "c42e74fca40f2ec898ec3411d848b71b",
".git/objects/70/974d5ccc24c59b1c90f44886e2dc550e52ed36": "b1ba28f5b3bbe843720b1739936ab751",
".git/objects/84/1747318eb4e721aedf9beee3461104aa5467b6": "3c92a997542c5e2d88d66a22401b6524",
".git/objects/84/46cced9f6801c1cadf5c9e6e3fc986c268a1b8": "eecef308c754ba62e96fd5f93a18a0ec",
".git/objects/4a/fd63459ee36d7768c6395ac96b5efa7abc8a91": "5f5e344e0763aed1995eb2f9c803e8e9",
".git/objects/15/4eae469a75b5b3e6a9f30ca60df5e010dbd751": "47232b1b10a5fe04e6c4343424c58358",
".git/objects/8c/6276263d7e322e7a945afeb8861ec940ee3291": "df9a5832113e0dabd80a723f202981bd",
".git/objects/85/640695afd8b25a64ba7f78ae3567820d71d8cf": "14e2303fa517a4c673e51717702a6951",
".git/objects/40/de57ab6baecee7ae7bdb03c43b1fe157c60bf6": "ebc003af842a4abd54fa018885cb9418",
".git/objects/2e/162bbeb0f443a4bc832d2e68d4ee9eb8adaffa": "5c95711a8a1d1c904bb061a7896b5628",
".git/objects/2b/cedd3fd25a796c11a6c1c9cfd8c7df8c689272": "62e9d3fa13fac4b4c5572c158cc1bece",
".git/objects/2b/cd6c3fcf793ccded3aebf12d36ac91be9e7be5": "79e65f8e08f80516862580310df9edcb",
".git/objects/47/d0bf344fa4b434db10de8ed19d17ce9859889c": "6c3be5e3b3bad302d87d46cc5cf33306",
".git/objects/78/329a9fff017185e3dfa4586c3989308e012a45": "10fa9a726e9002284eb911c15f453a16",
".git/objects/8b/78f6f42e0e8dc15f4c2f48a1c2afc874c8cbe3": "d4f277cefdc180ca10d53b9f67522fd7",
".git/objects/13/93e7155662bb9bc2337bf34165b1879bc92ae5": "a73ad2b1f42f604112784e958df510a5",
".git/objects/7f/7f70b9092256d11da63b687f1178b11213787b": "12a89a3689231ea98b20ff423860d3be",
".git/objects/14/8c29857823b94b6cbcd555d732e84c919a4b6f": "f7c1ae19015c27a67d2012a4e43ab8ff",
".git/objects/8e/55d9e2e35ab1b9250ebd3aabe0d0666bc5963f": "040c79c5d490fb3aa50fbe77e87960dc",
".git/objects/8e/c911298ca86a35bb777a0e21b226a8dfe6b3c5": "ef90750ed8e08a9c5dff6a02751a5bd8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbd635ec02719153a26591e7bdd0b78c",
".git/logs/refs/heads/main": "bbd635ec02719153a26591e7bdd0b78c",
".git/logs/refs/remotes/origin/HEAD": "0cc751097776526374997fa32a14f770",
".git/logs/refs/remotes/origin/main": "f6b7f34220c7223686cf1e140db47b94",
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
".git/refs/heads/main": "f9d5f9b825bb5fd62a4e43e0fba9a58f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f9d5f9b825bb5fd62a4e43e0fba9a58f",
".git/index": "615151c73a71332379c1517fa3cd6a21",
".git/packed-refs": "f9bacf763a1d2be30a6a9f79df7e6fdb",
".git/COMMIT_EDITMSG": "eff5bc1ef8ec9d03e640fc4370f5eacd",
"main.dart.js_3.part.js": "9886530563476ee6adb70df0fa89c213",
"assets/NOTICES": "7c3e60eabe41b5f3ef100fa3509baff5",
"assets/FontManifest.json": "c0dd0cb0860618b664627288ffaaef3f",
"assets/AssetManifest.bin.json": "119695a8a21731b810667fb67d8d79cf",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/appflowy_editor/assets/images/point.svg": "50c7d9067a4a84945f1d79640589f501",
"assets/packages/appflowy_editor/assets/images/checkmark.svg": "3dc55867deb579484c5702a79054bb0e",
"assets/packages/appflowy_editor/assets/images/clear.svg": "f74736135d3ee5656b916262104469d0",
"assets/packages/appflowy_editor/assets/images/case_sensitive.svg": "1f93577f39711359040ffde3d815fdc6",
"assets/packages/appflowy_editor/assets/images/link.svg": "d323cd62b3df10a342e8e78ca50bf4e1",
"assets/packages/appflowy_editor/assets/images/regex.svg": "31424cd1f827bb7f237cd8e56c58f941",
"assets/packages/appflowy_editor/assets/images/clear_highlight_color.svg": "0b35a31822656c53578fb91acdfacb31",
"assets/packages/appflowy_editor/assets/images/toolbar/underline.svg": "fc86b2c49c42f5b9322a4ba76d066203",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_ltr.svg": "16a42742a29ea1cf30253cd9429095cd",
"assets/packages/appflowy_editor/assets/images/toolbar/highlight_color.svg": "f8dd55016252c335c33e97fb39159882",
"assets/packages/appflowy_editor/assets/images/toolbar/strikethrough.svg": "82564a24aa7e82675d377431ac8fb075",
"assets/packages/appflowy_editor/assets/images/toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/toolbar/link.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/toolbar/code.svg": "2d41f509ac1e1b1eb60c9adedc75ce03",
"assets/packages/appflowy_editor/assets/images/toolbar/bold.svg": "51e86ea040233e6a093caf02eea0c5f4",
"assets/packages/appflowy_editor/assets/images/toolbar/text.svg": "2b52bcda2b12945b27e859c414ef43c9",
"assets/packages/appflowy_editor/assets/images/toolbar/right.svg": "19968f066c5bccae9f3e059f04492850",
"assets/packages/appflowy_editor/assets/images/toolbar/text_color.svg": "b912db1bb9568af27b19e2946e38cf38",
"assets/packages/appflowy_editor/assets/images/toolbar/bulleted_list.svg": "b9441734387d7df0122b9dc629ca6bbb",
"assets/packages/appflowy_editor/assets/images/toolbar/numbered_list.svg": "a6072f727ea30c379dd5e0e2909790c4",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_rtl.svg": "a994493865a43a16af27155434be4a6c",
"assets/packages/appflowy_editor/assets/images/toolbar/h1.svg": "735f59f34690e55680453a0d018ada75",
"assets/packages/appflowy_editor/assets/images/toolbar/h2.svg": "bf7b09c579a5db9e6392b01f95909347",
"assets/packages/appflowy_editor/assets/images/toolbar/italic.svg": "b96a655409eea41190182ae3ab3ed500",
"assets/packages/appflowy_editor/assets/images/toolbar/center.svg": "c44cf79c7fae101e6fb9daa8aaf62a54",
"assets/packages/appflowy_editor/assets/images/toolbar/h3.svg": "30d4699894d5de3b696b11cf678b35a0",
"assets/packages/appflowy_editor/assets/images/toolbar/quote.svg": "7d20ee07b7f80cc886294a43a0db0b3d",
"assets/packages/appflowy_editor/assets/images/toolbar/left.svg": "511106ad3206b6ccbf9702f22b0097db",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_auto.svg": "74b07c6cd726be519ea32060d7a4b78c",
"assets/packages/appflowy_editor/assets/images/check.svg": "c7b016041b6a5b0ce7cd50b7277364ec",
"assets/packages/appflowy_editor/assets/images/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/uncheck.svg": "d94aa89207d28adebb0a4e11237f1c57",
"assets/packages/appflowy_editor/assets/images/reset_text_color.svg": "a9ecce95365f0b4636ad43cc054d87e4",
"assets/packages/appflowy_editor/assets/images/image_toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_left.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/image_toolbar/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_right.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/image_toolbar/delete.svg": "15cbb502f4554ee7a443207099cc839a",
"assets/packages/appflowy_editor/assets/images/image_toolbar/share.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_center.svg": "e82165a5f6fb20a7ad3a6faf0ab735cc",
"assets/packages/appflowy_editor/assets/images/upload_image.svg": "67fac764479d7cded5e98f6fe58c75ef",
"assets/packages/appflowy_editor/assets/images/delete.svg": "4a8d17ccc8cd1bd44a472f66ad028a01",
"assets/packages/appflowy_editor/assets/images/quote.svg": "ba6e97b8ddde8bf842fe2a56d06003ad",
"assets/packages/appflowy_editor/assets/images/selection_menu/number.svg": "9dad0889a48bb8f0ff288a5c0b711ab4",
"assets/packages/appflowy_editor/assets/images/selection_menu/text.svg": "890a3a1b0a674b1fbd769f42520cfef7",
"assets/packages/appflowy_editor/assets/images/selection_menu/image.svg": "92468547c1be63604f0820e565a1a6c2",
"assets/packages/appflowy_editor/assets/images/selection_menu/bulleted_list.svg": "7b22749438c843bc176fb559c924ad21",
"assets/packages/appflowy_editor/assets/images/selection_menu/checkbox.svg": "b81c986f918f1bd859fe07717b1e9d59",
"assets/packages/appflowy_editor/assets/images/selection_menu/h1.svg": "8135d2d5883f5cdd8776dca2dddb5f9b",
"assets/packages/appflowy_editor/assets/images/selection_menu/h2.svg": "129cb4e93b4badba4805968b13d52098",
"assets/packages/appflowy_editor/assets/images/selection_menu/h3.svg": "cd75480a77da1cabc7c5c2bf81325322",
"assets/packages/appflowy_editor/assets/images/selection_menu/quote.svg": "f58d378109520a8058edb4fed9d9ddbb",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/underline.svg": "472439a97df9c883661d818045a40d95",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/list.svg": "ed5fb52546835a9865541c1e2c06c20c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/heading.svg": "8e872c0f97c1740a2f9858523aeb7743",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/strikethrough.svg": "c82d154453ef6759daa7cebb397cf58c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/divider.svg": "098194a544d649f3545d35f301b0191f",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/link.svg": "d7a05e0d3a904118900ca7d8e3cf47b4",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/code.svg": "02ef07d8ea084d72dc2f4cc74a1b756d",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/text_decoration.svg": "e4dd4997dec353c1eb7cdfab039a49ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bold.svg": "7118c4686f95cedaa776faf7924c89a0",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/close.svg": "aa945f43dcd92bce9b5c810eb33940be",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/setting.svg": "0cb728ff605b6f7457950f3a47d291f1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bulleted_list.svg": "4d7dba759b6073003a84e5938aa043b2",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/numbered_list.svg": "1daa60662c6ab43e65ac96e9e930b745",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/checkbox.svg": "eda1fb784a3429e96b42b7f24b7ea4c9",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h1.svg": "295c462eeb57150f11a2e747d9220869",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h2.svg": "88278b54319f416c66c1cf830fcf6c42",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/italic.svg": "c8585c2f19414f94f26430e8eecc4bb3",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/color.svg": "d061328f2a2b335e121c44dccff39a43",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h3.svg": "ba38c1cdee5d41663df86128b73b835e",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/quote.svg": "dda6772a0e0d9b40e8aad07ff377ffc1",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "aa2a8da7dab8d7940c30ab33054910bf",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "1fd130c38699e6091d14e08d0394d2dd",
"assets/packages/pro_image_editor/lib/shared/shaders/pixelate.frag": "19c7cd8e71751bf1865b0784e2e2ac8c",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8c4d6658bb7688e56b0a8abbeb1d73df",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Book.ttf": "fe9a0ad452cd1c07da91ff905ba0d191",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Bold.ttf": "895670f9160dd1c15d871a0c7e8f822e",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Medium.ttf": "61d385606e1cc23125af16a442f375a0",
"assets/fonts/expo_arabic/Expo%2520Arabic%2520Light.ttf": "7aae6e71e588f9a3af59c21c23105aba",
"assets/fonts/MaterialIcons-Regular.otf": "86a5cf25433f48b9e72be3fcee45ffd1",
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
"assets/assets/integrations/orderdz/icon.png": "6847156b3ea55646e1335f646bc61325",
"assets/assets/integrations/orderdz/icon.txt": "9148e9ac51a7fe35d52116c25063a880",
"assets/assets/integrations/orderdz/logo.png": "8e4226671addec2db3af887ee1336bbf",
"assets/assets/integrations/orderdz/logo.txt": "6b10aac3e4d512d99ac68226867dfa32",
"assets/assets/integrations/ai/bard.png": "bf14b7532583fd8d1564b25793be1c9d",
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
"assets/assets/graphics/arrow.png": "61cf15a147b743d638cbc130d8e696f9",
"assets/assets/fonts/alexandria/Alexandria-VariableFont_wght.ttf": "9d6b12baa3fa9324502098b13d8a25f2",
"assets/assets/themes/ramadan3/dark.png": "60bb534dc36484e96ef05b94bb69773c",
"assets/assets/themes/ramadan3/light.png": "e64d4f55cbd1548a942e9fa40c7a8e74",
"assets/assets/themes/ramadan/dark.png": "39fcfe35a2f31abbb23f790a31a37e1d",
"assets/assets/themes/ramadan/light.png": "6ea4e09ef69c518db78b2d21c9f293d8",
"assets/assets/themes/windows/dark.jpg": "bda58297ce5a1e74fcd8649e69ba7a22",
"assets/assets/themes/windows/light.jpg": "8d867947db259e63287d55ddceb39355",
"assets/assets/themes/windows/light2.jpg": "3a44ac7670229b9329bd9815c14b8e91",
"main.dart.js_2.part.js": "e33327164c413e8afe553d3a8af97740",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "a4c4f7b55a9bf3a1c3832187b4b03f1f",
"canvaskit/canvaskit.js.symbols": "36d2b6f6964efb82bc94f33e02be2496",
"canvaskit/skwasm_heavy.js.symbols": "02ff60f0d1710e1d4c1da9c03c064bdb",
"canvaskit/skwasm.wasm": "ae16f984be3d7ae07229ccd77e8c6fae",
"canvaskit/chromium/canvaskit.js.symbols": "ad40d1b53d3bfac12cc929dc8b99f2d5",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "72015727e956a80e2e1f678cce9cc4e1",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "c765ce13389f4d07a9cce87fc25dccc9",
"canvaskit/skwasm_heavy.wasm": "1e558f24e6f073a3ebcdc3e97b96862d"};
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
