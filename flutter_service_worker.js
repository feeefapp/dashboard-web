'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "38dc03729b4fa306962b6b551dcbe583",
"version.json": "d5ad873b2337a06514ce9e20a8009096",
"index.html": "3fa29c07e2857a5af19e594b4a527f46",
"/": "3fa29c07e2857a5af19e594b4a527f46",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "4e6ea03fb7e7765045b601e2fb65c822",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "b7b4a4434f796b519ee6ad67b1e742d1",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"icons/Icon-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
".git/config": "6fe7a9565e879024323c04807fabc112",
".git/shallow": "07f68023cda039709c0fcf6a3a397a73",
".git/objects/0d/18b31be8e061a9185a17537a6b6ded38f69e1e": "b3c99f0930b5e08337113f365e44f933",
".git/objects/95/d30e9daab569bc8c88578d1627bf1284472a02": "ac0b8aabe75a7ef2f0c73e3d8ba8019b",
".git/objects/95/0c2e4148f769c835e46a4f215868b195ab9da0": "eda90c48012f828bb295587cb931fbd1",
".git/objects/59/efcd5070977df4280cc7f8ebb7b7033a8ba353": "0c3cf459e503829adda84b6c4859cbb1",
".git/objects/59/0ab8d99a860b1b2892de7e5e160a1068f7fe2d": "75aeead148660b6e46182bf422fe37f9",
".git/objects/0c/21fb275262caa81a9debaed25333e63b434503": "03d06b3839da7b5bbf46a595b503d232",
".git/objects/3e/76e6f8738cc4ec032971555e8922809f335025": "c9e466446af32812f7b35433c1adaa91",
".git/objects/3e/0daa566ff56ad0d2a9458399651a38b70c34ec": "11328b05e51f75b8c3ac2b2e5b961e19",
".git/objects/3e/f9f4f8c51c218975c64bd16ddc7334fd8e555f": "349b46b9567d16dff42711ea5be3c7b4",
".git/objects/50/0587716a6ba11d49f1934d668bafc0e14109ce": "85dbcb2809798a3a0dd0afefffb811ae",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/976752e310dd96d6ed8039cbe043d68a087a38": "938df1bb42814044999f69c20cc985b5",
".git/objects/57/86dd13426be80956b01f20b1dd13026b03c48e": "dc4a327a78e1ba824e11cc8b5fa34efd",
".git/objects/3b/b12b317b322ccad16d1f2ed228b9c49221e700": "010e26c56d9dd85c399750859da3665e",
".git/objects/6f/8243a9d11decf18e076656db82905e9f9f0a97": "54385bfc739ce8f3046cb850847c1c19",
".git/objects/9e/420acf1604ab5b7f826839d9ab675ef952abec": "e27b3ba42603bf2506f017716d16f550",
".git/objects/9e/295611f835a5664c836983c2f8d2976ea93a15": "b3bdb4169567678cf91039194ecb37f3",
".git/objects/04/471cd8d228dc419bce0ddb616b297f1b114175": "b5314ec44d7371054d29b3957d912d4f",
".git/objects/04/ee5a391857502285ff3e3a97da05da455cf5cf": "18659005b62524e48b602c629ba0d9e1",
".git/objects/32/e172a819ee8fe7f8958486addab38cff9e7f3a": "d4211a1690094b4f090de25b66120959",
".git/objects/35/c8031a4d77ef5fa2767f5c669984d6c0740374": "fc67df14ce6fc3bd4eb17d84d9991e6a",
".git/objects/35/48a17a7f540930f6222834b7c0e9977a87e8a4": "7370376574d62a3a82149fd01aa535ba",
".git/objects/69/f97cfbd9df76c77e2976339e783848fda6d116": "a1b00365f4cea794ec35315a8248259d",
".git/objects/69/58ce98f92617b47989d985d6424ee077742d03": "4c44b266f2b5a853feffa3d426b73974",
".git/objects/56/c567194affb850c92d08dc64c874dc33d62376": "d797599f768bbe68f50401fa5d6dfa4f",
".git/objects/56/b6cbdc44f62cec0ec18ccd7a450caa4f4ccba9": "f4f6f26eda0b36cb1a5764b7bd4d3886",
".git/objects/56/f3d95ab8ba72f2b3496f7c6a0238fc57d82a39": "53a4ee6868b72ed5df674f6d38b5d403",
".git/objects/56/57949bdb61a1a7e2a61a7a46190aa78370f899": "fc116e6d64e4d0d2098f29fcb230efec",
".git/objects/51/7480b06af1fc0e97bde71b5af2c2ec08251e44": "db0e904cd31e3e192ecee503dc9deefa",
".git/objects/3d/0ec74b7793e0adee71882cf788729efb9e74c0": "eca2542b60d1e7cfb1e34f4987793cc5",
".git/objects/3d/670bd111b97f5dc5d5ef18615ea14e9a3a3914": "a53462a08975ed0d328b810fa1cf9ec9",
".git/objects/3d/91b8113c31a7080cc978ec87db3a8183d2a97c": "f78fe2f1088af9c24249ccc573286cc2",
".git/objects/3d/a9d2b5ca6fd19b9820201d7a24aa0f41853635": "cdde8bbc3e81c56bf5ba70e886e65339",
".git/objects/58/6eac103837872c3e26b297c8a48a39e5d654eb": "e59999f6babb378068f29f614e23ff93",
".git/objects/67/27bedebab4aef373feb49619937c025d8559bb": "bf26a25949525f6456c11f9c19d96ce0",
".git/objects/0b/b196bf8769eba6db671f05413c3d97cec955e4": "cd2e5434b6daaae70890d393f78f365a",
".git/objects/0b/21107c44d9af637c76c92d20a8d8c9ac87cd1f": "04bba46983fbea0a4369033b2d5b93a7",
".git/objects/93/035ac1f9fd0941d4172ea2cb863f28302bf6b8": "8f00fe1aef6f64ffa9177fdd8cd4c527",
".git/objects/0e/13f03f187fd38005b6ce296969ff0dadad3978": "d3e1236e7cdbcff27700d38f804e6675",
".git/objects/0e/68b9bfd4cb04aeb6748d1b0aa1dcd0acf86e93": "95b1c79e9f2524d3521798ccfd05064f",
".git/objects/0e/b9561679348ecfb92bf10ca1b3377bacf939c6": "98856e7ab5bb804f7518d53b599a59f1",
".git/objects/60/f558e9093bd8b6c3f8607785b1f2eac3179735": "3f1a951e86e31324666cc148f389f8f0",
".git/objects/34/feaef6f28ed160a2ebf0c49cb29066b45100a3": "26193b14c4b6dc44896e1d91f6a1acd0",
".git/objects/34/95d422a1d19485687cd02be8e49e16c00cece1": "0b0e711c7aff03deab716474d49dfbd4",
".git/objects/5a/cd400be5e373520ae039163470b92bd0f068d7": "124dc775178e826d4d154c3ed3e351dc",
".git/objects/5a/b6c7564b2505fef4868167d9953b7c851fe63b": "d5c8ae95043e866fc9ddcc204ebbf863",
".git/objects/5a/570b4a1b624039735caf1024d4dc2e89a5f7ee": "2c179668b17a1e976f5391278cb5527a",
".git/objects/5a/9082d6ef3b9bba120faba1156d20620bdf2997": "e0c765a1151006cd627a8579be6eab14",
".git/objects/5f/0b928db74473a9c52998e4a70e2c7b6caa9efb": "261216919d00b5e744ec4789f64de2b0",
".git/objects/5f/32c347e40f4bd3dfb485a2730c662ae7dec9f3": "f5ac43cd4de02df79c43b1de27e65af6",
".git/objects/5f/7abc74351e26e01a940000c29edd490eb6870c": "50e1b6f5fe6e66f4ebe786051e56cb3d",
".git/objects/05/143e43bad23aac521585baca00ff908b3d9099": "c65e8e9d66471d4bcbc4953c2a024599",
".git/objects/9d/2e15acbe92cd4089333c743477c33bd1f57582": "8f7fc8a11df63273555a138a551ade63",
".git/objects/9d/58da70dcf66579eb45b13edd7809eed7a0ea15": "6b997af07add95ce2de98a2aa8fe3bee",
".git/objects/9c/7a4eb3c21ae719e45dfd9e62f02c28676fef72": "31cc981233df05db6825d249e08bae4f",
".git/objects/02/e0c81d08f4600bd7e769819e75c9ef5622edbc": "ecf46a72cbd30618e281b552977a0510",
".git/objects/a4/adaf32efc8a19ab448320005c426b1d0e34088": "c9950b2cf206e92fd1e7ec21fa276147",
".git/objects/a4/42655924246ad2de93425f550e6486f9619e90": "76c33159a89c9084d456b0b7958a5b8e",
".git/objects/a3/f480cedbbe8f0fa7f92f6e881f14b2187c3111": "6d0090bf8546657c38423447245c7a2a",
".git/objects/a3/80d31c72238d16055129f890c2106b8a3e96a4": "a03d7bc78c0a63413dd55e9d424e623a",
".git/objects/a3/b1d8098359dc02bcb01d54d88a0c5bf534746f": "89c9c3f15a28390d29f0c92955f879d7",
".git/objects/b5/964f9beb9eb9b4de6f4ef622d587bbab6dcb67": "e6bf50623affcfce44f1c8f706ef6410",
".git/objects/b5/dd277bf631520fba6c1ba8f1b870fc8aedfcc9": "7ecb01f41d2cf2962c6e9ee4c7c1a6ef",
".git/objects/d9/698783060f3373b9c45ea7645e182396a0c086": "e6166ec8dd6976d6a8cffc1422c7dc47",
".git/objects/d9/22cf1b417cdc59218bedaafcdfef6847d38d8f": "6a56376a1d4b8647d78a019bed89e7eb",
".git/objects/ac/e838c78ef8c5dab05abaa39cacc95133987ced": "b33be1d544b1a2ab61b56a5cdbccb6d7",
".git/objects/ac/53c1f3a81e52d55e5614f17f2e0279c9219577": "e16391ffd79df5f136b71d7e5874a7b3",
".git/objects/d0/d248e47bebb149860049b129f9fe56fd1cd989": "582aaa08c8dcf6d25eb3995a42f9b72d",
".git/objects/d0/d25e3a02102ce18c1cc7cd5d0739675f469c34": "d4dc30033db40ec40f71674a09f66af0",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/928a5752a95bb1e488673c8f2cfc119ce90c66": "4e924f4926cc1d9ed27db25501d261ba",
".git/objects/b3/f2760f130e21444e77458c9c3f5a3ed35ef232": "50368beb234517b11f10298829be90b1",
".git/objects/b3/3768967c48d6d3a80e28e7fbce3fea099f5582": "7d2755b543395adf79a58663ebc43854",
".git/objects/df/970d4ccf66cec3d8e710870ca3f8f7aca67559": "603f1b5c12ef0ad99b8fb1fe081c3c81",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/f5196f1506ccde1fbc1f5aa8bd899dae590ef4": "20a3276d3a2aff5adac71ecafc3941db",
".git/objects/b4/57d86c53c8af5c58a18a3f6966edaef9160d14": "bb2e5c5b26383bfb32f4c60b1b186dcc",
".git/objects/b4/ff36d11035a6cec6d58a15bf2fb3a9ce79a7f9": "f60caec5141c1b8c4903aa20928b34da",
".git/objects/b4/4cfdcd4efc94f51eacf5316f8ec02ea8a8d688": "e13a2eb50bea84a760efdd5f742a93d6",
".git/objects/b4/60d610165f91b682776a08c0be30e50f083a7b": "21532e5f18db1982d6a007f465f8b309",
".git/objects/a5/75d4fbbe82b016e073c8d9643ddeac6b3b1348": "e7074b5c773f7e18ef0bb3e0b6fbc205",
".git/objects/d1/e182e94d673c5b379664958e91c8f49a6d7bc5": "d9980195626fbe54ab59bd234b163432",
".git/objects/d1/60eef1a30a38db84ab1b1359e930c1d13f5bd9": "9ceb5fc114636988a68f15b5db71bfd3",
".git/objects/d6/73cb5c5e63042a130411e375eafce2176c0034": "55c5178605d01c0a909e5f4146a7345b",
".git/objects/d6/38f216b9615e2310464acbf8227887de90c3c9": "77cb9d4d957308cb7a9f3e7f97f88875",
".git/objects/d6/e464f8d3a136b3ddd0a2d8cec3001785eecfbe": "c4cce66c4ec907af4d4bfb1993fc185e",
".git/objects/bc/ba06dc72d8f16a626ef2ba435e3f9138027582": "a342cd92f42222eebe26927138b151e7",
".git/objects/d8/810173d09a84d615fafe8cceddfeb3aab5ca61": "215003a6133ac97cebdef8bbed4b3bc2",
".git/objects/d8/714a42cfbd4520f6d08185d3943adaf850f831": "f6e856078da33cf0f5079d929b5c8414",
".git/objects/ab/d29b4b610b20f574a37175e6ef03d02bc836bd": "d225c686737ff16ead89067a73e5d804",
".git/objects/ab/568c63f752505ba4cad3c3afd6e3361c4cb2a7": "05ae2797a792c2a3f1b40d1883f1c47d",
".git/objects/e5/6fcc38e5cde89221b079098dc6d848b5fc051b": "374ac29251b1d66fda2f105625bf7594",
".git/objects/e2/46882f0dc7bd713e7d7c588e976a4bac6dcb42": "45f24231554f73ca52dae9e74ac4da2b",
".git/objects/f4/ca6b0335ec89b0d604e98a22b2185c60fc4658": "d9931ffcedff3529293bde5fc5814176",
".git/objects/f4/414dc0e7ddc86b2a88c16ea4cf4a82defc56a1": "0fdda13a715da870e024e7670d106e99",
".git/objects/f4/e2891ee5478f55bb4d7367578610fe51143c7c": "01327857a7fcb01f3672cbaa310d0221",
".git/objects/eb/d02b22db4de52ca5fb8fd23beee5e40f5cbc4f": "a6cbe54254aea319e655a074d4fd7255",
".git/objects/eb/24fd6ed9ee15e766531daca5ae67beaca33e05": "0b52a07fd03ca31022401aff09b4f196",
".git/objects/c7/80760a2eda99056b2216bbedeeaa858a031bcd": "eef9739219f0400a2b6c2f25da34ad33",
".git/objects/ee/dec4a4aeeca51c740ac9e0ad44c9a9506f53a4": "0e0fc636875e2a2ac108b998b1ae79d8",
".git/objects/c9/93ff304f7bc7b61c7fa43bdd3a7c895492ddc1": "b0f5061fc59dfa1ca2617514a295da5e",
".git/objects/c9/04e332babd7e9303518ad4e41d857d4d866fc5": "e1d1b933bdf73d50f001eb2f07a57c06",
".git/objects/c9/706db43903299ffa6b0b379cc76c4e0148c6d1": "6a3171c2270814f9b08f2bfe0742b538",
".git/objects/c9/f4be1bf815915b79af01c8760e834aae866cf4": "4c1617e83447b465613a51f8fd5b96f8",
".git/objects/fc/4ff5ba6260b9e49a8ae83bd3711a773086ad1b": "be1578ebc4a93885f810a59c52ff3182",
".git/objects/fc/adedb8d1ca004ded66b7a5b3de0945eb90e7c1": "9104251452b127dea4afafa95dfc476d",
".git/objects/fc/12edbf316e59e18edade78528aefbfb70ebbf9": "efcb76959907fbee365328d84ed27ada",
".git/objects/f2/2dfb883c7a1a5071d9be5c32d4fae3edab1f18": "a7c9a9b39808dc86085a121bbc97c383",
".git/objects/f2/0e0125780d1581cf817ccb36955a6aa34538c9": "fdc006463ae683fd758f8fe079c41754",
".git/objects/f2/da1a48b5a6ed01480356bf5cc131f803b21866": "9553a14807f7117c6b5926e0979bc953",
".git/objects/f5/f36b9ef5383d296f15842deb3cd18c554e6f54": "963942d10eacddba868cdf0d21603576",
".git/objects/cf/b236bd87753a5a9a2c4ceae34227a92d984172": "a42e8de5f014942306ef0e5dcc5eb5e0",
".git/objects/e4/6379335f77d3bcaab3b851e5f126fc5270f40a": "95cd20913ddf35e12fefcb16dc44bcfb",
".git/objects/c8/6178b0c4f008d96a73e00e65f29d97c888a569": "0adb0ae9f0ca938d04c11b91778e4884",
".git/objects/c1/c25e13e20c4e8c6ed2f20b86996855690c1c6f": "0efd9b65067f6f79e879ab059a68220f",
".git/objects/c1/5419fbeae92eab3be382665332518626b604e4": "77aea2eb58738941c5060e0b5529faba",
".git/objects/c1/5bb3c3a6447dca3f66ad2820156fe4bc2eb5dd": "9d2877fa56abfb067feccae542eb4fe5",
".git/objects/ec/1880be22868fee203e0b9c3b03c8f6d53e0082": "e508c24aa3b8ad5490304467a5367197",
".git/objects/ec/2edfb723bd048aabea1bbf46619c47bb697a93": "fa4b88558b9c068f17169c848c0c3448",
".git/objects/ec/6c402cea22ff069ec1e29342d1121057e6ce99": "46b1fdfd16c716441efb158bcc1d1df1",
".git/objects/4e/538b3678d3852f4004ea833d8b4dbc05a2fbc4": "7c04b41387ec9caf88eebc0d6776e2fa",
".git/objects/20/e224ff35de30fb74cc4d3122a7627aa17657a9": "f48a781201e8b9bb24489b8d7a12484b",
".git/objects/20/1eb8369daa86ea205adf856aa5da81cd0495eb": "4ff365fe79842be07987ae4b55116a45",
".git/objects/20/68f5f26c043713e707588f3151f0d8696c23be": "5fc470cff25e3b800556222fd3021acc",
".git/objects/18/102bad2150401acfe822b3dea814598ca9157c": "0d5406e8e27c6c4d5843971d226c433f",
".git/objects/18/ff3ca9d9ca7243d3eaa710bd5bc0005fe7de9e": "c430d2e31a4d1e2665d83730a9bd11aa",
".git/objects/18/2c86a387f6c8dd9273c076b04e4d9c272b43b6": "ee1f824803c1c61b552e9b8cf088e7dd",
".git/objects/pack/pack-ae0f9fcfc0f380476ca5303d4c36c9ace7615fad.pack": "d3ca3825fb0b32136f583a618a3369a4",
".git/objects/pack/pack-ae0f9fcfc0f380476ca5303d4c36c9ace7615fad.idx": "9b1df32af1ce4802f0d2d5d36c7fb5fb",
".git/objects/pack/pack-ae0f9fcfc0f380476ca5303d4c36c9ace7615fad.rev": "e467bcad1869ab047933b764ff1f3e5d",
".git/objects/11/40c8b58b2816908e90819e3565c78627b9520a": "475c3426d05354a2199d600e57dca24f",
".git/objects/11/1ac981e63c2d01e967aa7d45a31a43d0aadfcc": "a2c77596311331c63064491cbcee3e3e",
".git/objects/29/9bbed35b985a42bb3c944712aea76773aec387": "0080a654022eb7c076f982c3e90756df",
".git/objects/7c/bf2426b1e0156b118e1f96e877c87a3d3e2d76": "88c4396cfe94b35a642965f7591f24b7",
".git/objects/7c/8297a045f2ab7bc5e66326442f91859a01c9d8": "1a26501f2439fa72d7d54eff17b454a2",
".git/objects/16/e57a95ed3b47a1783b4ce12a92e1a3bca7790d": "5ed7ead16e56ccac618cbfb2065c7c0d",
".git/objects/42/6b544c05a8c68a113195f1eee0866360b61700": "fe536412596ec21403bdb76d045dfc1c",
".git/objects/42/6489eae44687b31bc21d4cea2dd146160565d0": "44543a7494a803414273d491751f1747",
".git/objects/42/21d1661a6fcca660c23c551c67bcdd9bda109c": "201e38afda02b484ec7f4fd112d047a2",
".git/objects/89/db12e6b94accf1ba25aef7cbf6d536e33d57dc": "de6d897ef358900cdb4b56e28e08247e",
".git/objects/45/21bd43928e1a3354d7593992b4fd035642c3d6": "702da72469831b6f7f48867e873ae358",
".git/objects/1f/1301fae41d2915c72d1f0ed8cc7b78b0b9211b": "aa54b7cbb7c1b8f0b2f0a670d6d74b0e",
".git/objects/73/7b624f006961e9b1a10f8496cf5451a569e510": "fdbdf32aa40254a20a41e6f15d8ac651",
".git/objects/73/e2cd6b3aca1502e4a81b9619683a8af85ed6e1": "cbc4a51d9e739a44d48eddabe935d6d2",
".git/objects/73/7810f7024632af67451ce92d04f4c6644adf90": "053e04323b9922305932a6cf0cb30c19",
".git/objects/73/10172bfcf73de61098abbc3af65a87f6289314": "f4aaf32678b4ae80f68aadf249d18b6e",
".git/objects/87/e66443c8bb1757427fe5fe33424a1736432ef6": "82bf4a35020db6e52ae3b5412b655265",
".git/objects/74/8c9981f0d5eec333db3b34b6683a458f443e0b": "3e0207cfb185b16afea7d04041940f26",
".git/objects/74/01c42d5f2fc7a1028d8ad1fce9f4dd56e8fd49": "68a88f6e12094a90e01cd4c5c6df0c16",
".git/objects/1a/48b7ea7278e2b2b25598afa6b9b4e91266ed56": "4e4228687668231c1b759ce42547e4f1",
".git/objects/28/40ff72a2f799479b5d267d7a9d0d399c549938": "87fdd220a023b68a5ebe6b31dd5844a2",
".git/objects/17/c46e994081eaec7cf5037dc5eae1df237598bd": "41b06e0fb2100883bb70ecd7135851a1",
".git/objects/7b/0d643fd40b7bbd1b67ac3d6ad56550f130a4f1": "99c8e97223e4484232e6068c4a09cfa0",
".git/objects/7b/37aa71a28c3a79d0aca35fbf21765d64f9e96a": "e42e6303784b2d82b50529710fcf9c4a",
".git/objects/8a/8b0c7b3b9eff0c9b290b1c39d1431e182f36c2": "4ce5c073e2514e79cebbf1fbca2cdb92",
".git/objects/8a/ba652edb2eb02f07981f31066520acc178dc5f": "c2c83f2f5d97f9dd0ed1247313476188",
".git/objects/7e/4a5beb2234b88f9d42c1f7138cc38c8f6f17bf": "5a603cde7d0276da9722ac7f74b190ea",
".git/objects/10/7672ab7db035f5b2bdd3895d347bf5ec8d5a64": "a9c3abfab638d31ab2429880551fc718",
".git/objects/19/ac1214b598ebbf97a126d0c4b8dfce445e3e24": "c485b405c5338b13efe536d215bcff56",
".git/objects/19/68e38389b6f5f249de49f2c0b4f2fe70211ab1": "8df06e823e5fac8e97e23f25559c6771",
".git/objects/19/2aa5067c31fcb66337e381da0849334d0c5814": "96038dc76e13c543f40e9b533121dfeb",
".git/objects/26/b713445b6636a08469f1ba85c49011ff636477": "4a7cae7eaef3352e132c63a173fa4ff0",
".git/objects/26/2aaae3e7d56e4a0efbc81b19dda9816ed4b20a": "d7ec4a320e8ffd26abaf5ac193c24b36",
".git/objects/21/0ff0ddd051d9b9f5bcd71bc24d218cfd84ea92": "b46e65cbd8e6bcf91cb81e8676089a45",
".git/objects/21/4003ea068c2cb47003a2ee000c766e78bbebed": "c8e08d4cc29ef92519e63d91a895829a",
".git/objects/21/3f3c763bcfe119a43641c01dafb24fe2401697": "9e8c38271f8af479461dae04b3c5bbd5",
".git/objects/21/1844a7b112801951273d3ecea476f27429c415": "b794ef9809a67c0ef3e64272aaee8dbe",
".git/objects/4d/4a55818275468d506ee16ff6bc453c86c47603": "b94874e0fdf961bc7a2f00655559ec9f",
".git/objects/75/8e7de6f2473f47ed35e6bba08e529b6fa8e2c1": "6882fd91bbcedfa10afe916a0e337608",
".git/objects/75/65edf6931d887ff0e01be6e08a2fa1ab673361": "d8ed399ff06bf1361967e578c8e8078f",
".git/objects/81/95497dd16f27721e33e793419503d7333d1076": "3c23e581486402118d8e7037020f5f0f",
".git/objects/86/490418ade55c08ede9b5f90723b45819e362eb": "831cb81e966bbfd5d2e4b1f90cfcdfc9",
".git/objects/72/5666cee643d2a6f94f55953cf622c897ffa4c2": "097e0e90048dc800e5c736faf6a7f560",
".git/objects/72/3f72771cb220427ad25525f40390cef0dc516b": "85d94e1780786fb4e1e31e7cf7495110",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/f99a6ce63026c42f84f2b2fd9f86be30b443eb": "69447a47754e5941d87847f1ff506e09",
".git/objects/44/1bb542730f2325b59ee6cfa06e6dc04e4134e3": "39b5bfe8ba5479e78467959f02a154f0",
".git/objects/2a/a035a3b184d426e07de9302489e10e73b6156f": "d4276b8e476203b097719dcc0c1a4045",
".git/objects/2a/b87a0bdb15370f2e37e30fa6764a45de3c4ae2": "037dbba8bfb0d466567a4d9f6b0b27c8",
".git/objects/43/da8c17d9fc1d50ba2fbc88ceedac576f29a582": "e7d4b64a4212174c2f342f261efde72c",
".git/objects/88/5b50ff9cc104739ac2f2831acf10e75e48197b": "d14e7f413b8cec7fbb56d6407f284f3b",
".git/objects/9f/7fd5cf698f558762f4e45620e48677d5963b8d": "eb78e50e6bfc5fc21976956edffe9188",
".git/objects/9f/90ea6e3bc2510312a67b499e128c49df1e9ac3": "a74bc37d714dea2e8673a047f9483dc4",
".git/objects/9f/5ae9a7cb5c7682aa6f4dc84961f48801437db9": "574455e8694fd287029938b492faf93e",
".git/objects/6b/039272bd453330850945f9b8a0e1d0471fde00": "52ed057fc0b149fcd2aeccabe47bb7dc",
".git/objects/07/bbb7dc5c8388c5e9479fabfdcc0a23b51caef8": "e45c77fd33deba84508ad67025a73e2d",
".git/objects/07/ed47dd31c31d83fe0972c6f99c95763736e455": "b20a0c627fd033faf17f5831a9bbf5ad",
".git/objects/38/96d488ce0d2d2721c6a7009ae505d102330401": "d560ff377e774f3493df3ca7fa35fa39",
".git/objects/00/f1d4af3d195eed83b9e3bdc51294e45fd22768": "0af1e8dca149e941c2ea05fae2d6dfc0",
".git/objects/00/a647e8aad760a539e481fd4a2d700e609d2884": "8a634866b2d1a23297e46d7ddd26828a",
".git/objects/00/6a7b0854405c51dcaa013cb5e2556b8618ba19": "914aceaacc4deaa33cbf7e18bee7875b",
".git/objects/6e/fb773d1e0fedc943fd6f2588a03cf6193c8273": "ec7988812329ded1fcbd70cfee79131b",
".git/objects/9a/dc1aeaf3a41a3d5a2a813748095a9fa45002ed": "f17433fa9481267df28b694cd7eb3cd9",
".git/objects/36/d4f3299ade201e1846953a6206604b889008e7": "c296f011b095c43fdb28cac313dd8372",
".git/objects/36/f22d6c5fab797653d53f065bff59111e0468cb": "f91dd0c9a16c052f8d1baf36c19726fc",
".git/objects/36/67d96f1134a194b95e8533dafe7fce7f0eb974": "0bca07a4eab436d9005e0b1d45c17141",
".git/objects/5c/c4b420700f78a58d0e29aad18c5ff29e136df7": "49cd2b76791f870fbfd506cae619584b",
".git/objects/5c/00cb3021d9dc17535df790b1ae75ae4503b952": "a6bece0a7de15973998d4128d3f59f0d",
".git/objects/09/cd03229db670f4883730c58a35da5345534290": "e3ba05a5cb0d4ce377ea20293d6e7a7a",
".git/objects/5d/97d6409ea3c09108fd4fb01ac9ba37a701518b": "92326c326fad96f157e731c9ed08385e",
".git/objects/5d/48dc34ff94bcc09f700ae205e26a6ceaf17654": "411846cf4acf50604e6682245edf4058",
".git/objects/31/6aae786f470339dba8f16c2911e2714587b9fa": "0781de0fcc90f6392cb08e0b5434ff93",
".git/objects/31/3d59f503f07b8700d947af24bb50a6d6a6a929": "90673fc9a0bb0f00071b0fa26ed4507f",
".git/objects/91/8f3d8cac2aea458542a6cff5f287ae90d2ae4d": "167a1f75f39afc9361dd01f136524d15",
".git/objects/65/a503d3404f8453a66465335fbc0feaf1a1f4d6": "ec0a40675e7eaff4374bea7528c575af",
".git/objects/62/77222e417a5a6ddcd1238ac07c77971e1f299b": "1a1c27f11206bf4802950f09b8dcfab9",
".git/objects/62/1c8f00c9efb46d764ec92aa13ad35ed92c5ffc": "52ee52155864a77196f36c62f8f8feda",
".git/objects/3a/016be97a3502b1619c9ffa596e89075838ca6f": "196aacbb0df43d4252e8483964a385d7",
".git/objects/54/c4467a2ceefe5ca8ab28928933a95734801334": "e47d6ce9bd54adb1f2067fca30e14875",
".git/objects/98/968768ddd8e53830a8cf00ccd274a4cf843d1e": "693361f7ad64c3adac2bfc709f8abf17",
".git/objects/98/40dfaa2c8024bac8dbbb7d13952121bfa8b56a": "10b5651b354995d9aa02bf7e8c1a0586",
".git/objects/98/4a0272af83be1e75d3986a2016a6a24d5db923": "aa3bd5226527dd019075b8d867a16d70",
".git/objects/53/95ccb567db156d733d6f2da3e091e994865dbf": "38711184a443362e2deb4cd65ac2ca74",
".git/objects/5e/4c41863dabd145be5a007c6cdb3bb8703d3af4": "bb28c588e870e0f716c87d3c5d69c56a",
".git/objects/5e/5e55ca420c06373eeb89dd35d9ec88b9b0cb67": "583321c51374c6ed1c6e64f358fb8649",
".git/objects/5b/d9ab0fdc7dfecdb916aedbd04382691f98f234": "a8f009c9cb114602aeebf5cdff14e7c1",
".git/objects/5b/6ad8ce15efcef622b927347c3316ab5f4ad106": "56e1ecea2e4cb4e59408905b8aea7e2a",
".git/objects/37/736fea1079985024021b66f5fd5992ca031042": "7aa8e3339c98ca5e22ff75cf34782ecd",
".git/objects/08/592f40c1ffb0ec30814851231b36ecf0adaec7": "75af5cfcf12f0b99d4f9f8e5d1896b1f",
".git/objects/08/9df7ff6c6d0b308bd348d073fc21135a3d10f8": "b05a9d3a63dcadcc994b5e8a6e12904c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/bf70c3b89c686393ab23f0a843848c138b4755": "0fcdd3a8249561cd3d755a330bdb668d",
".git/objects/01/a2da803cd1a2cb0e1e3a03c7f09887b2e3b578": "90f8fb223625df571aec3b10ec3e3104",
".git/objects/6c/8228611a1f10e8ea5a678148f334e0d716c954": "dcdaa0ec0c48413908e88768c134b596",
".git/objects/6c/54490fa4f082d07172cfdcf0406ff120dcd9a4": "2ba5a4f9a5a7ff9ffb86b1a96c17d4ec",
".git/objects/39/3d5beecaac5019ae8a63ce7069c42b0917ff23": "44244e052ccc5adcb35947d98129a9ec",
".git/objects/99/7281d48993af74b33c6ec7bf748151d59944c7": "7c5d83150be5644853e5be86b6e25e4b",
".git/objects/99/1b0cb3e4f6f43dcef7655d6be9210902d71dd4": "295f7aaef27a3715b51a246dc97752d8",
".git/objects/52/1c93ed49c95310d9f8a41a630fbf4a15544a5a": "df73fd7e4421c8d63d0c04e451b75f5d",
".git/objects/52/ddb626f07fc01d46158d48aabe5ffd990c54df": "1aec7c34d28b1cc7970a7a6d56d81b04",
".git/objects/55/6d6c7ba522354c64e4d1a308b01a52a71f3b2c": "88db4fda67859b7b57c4a6dede84d474",
".git/objects/97/307de8c35702c3df85a3949493e143136403ea": "6626a9203657acb698393f4ae1aedb7a",
".git/objects/97/d76bb578ac9d118dfdce218d039f20577c2d74": "7e5eb0317f860516b8ac574a58882ede",
".git/objects/63/d66072e7fc7fb0bacb645d66423cf8099c05df": "4fdc20d7cf16b87aa34ea387736aa79f",
".git/objects/0f/2b923f51e0c8603c4de3fed1f3a6f389ab860f": "aefc037673574df1a84b6852b6bc419d",
".git/objects/0a/e5c215ba60ae5d0b61a935a4e62f2d6e13bed6": "d9fc5ebf44c480a631cb5ff1f46866aa",
".git/objects/0a/b405f3113ace44d6040745d5dc4684a0e7b5ca": "b26c2a382bc8302372de8554648dd109",
".git/objects/90/90fcef25a06dc8e975b316253a37e298894bdb": "dc5f8383025df34be878ffdadc17adcc",
".git/objects/90/21d545a49912d645065808ad8acb07e6dc91b6": "dab6fb89a74a5cc8fd9bb2ad178e3300",
".git/objects/90/e85275a5b14657609d8c599cd30fa909036d8c": "20155b0c343ff49fe7daabe76779b2a6",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/e45384f9773e1bf4922d1cd8df6790e0a650c3": "59328ca375ad385cdd713c4aae8924ff",
".git/objects/90/fc8d271a94f2ee700a2ab89c6d7112ab94ae5e": "55ab1d22f7e83d0eaf2fca462e5f9c0b",
".git/objects/bf/805ad5ceea3937ebddee392f07c889962ceddc": "12ccdcefacdcd01e00a6c681e58a7d61",
".git/objects/bf/fcf4b8af7ded749a807e420d2f2b9bda2b1672": "6993b22ebbf24b9f5c6fed8df3714a09",
".git/objects/bf/f09c317e43266abb8ce44de4dc1e8b37fd6574": "b5d05f4ed7572bf8a98a3f1e6e4f18ef",
".git/objects/d3/16bead64458cb53699b4895b7fdd3981ea37fa": "f398ce87c039312840d560f65cb4c3d7",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/a0/3f9ded7838cb4ab9db7874569f3ac100784c37": "56bbe6d9f722460fed97a9b6068cfd92",
".git/objects/a0/67afb19426add6c45c1441a7060f5f9f794fa4": "c7d6dc8a6097ee70d579912943ca6f95",
".git/objects/a7/e8ec3c7c4b71f874577cf3c4d4e1fe715cba96": "0e714ae5a419e85f9c6276a2df46c481",
".git/objects/a7/a34f4eb85b7a9bd6a2703103ad8792e4183a81": "9af9ebba908f1b234af5903ad2acac1b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/0bf3c007a5682369643ed9a9bc35b2b1542919": "c273e9ed21bb317aa9c702b5161da72e",
".git/objects/dd/431e33b29b33b3520ccb35b7bbd64fb668fa77": "a0368b96ad0d967744666a8252f98f2f",
".git/objects/dd/687084e1a525c49f0dc39be1a3eb72209f505d": "f81379e56bcc5f6c6a20c3d92ccd8a7f",
".git/objects/dc/e7dcbdd8a6192dcb3d2ec139b6790a40ac97de": "6eb1ba888eaabed911f8dce52b1315a7",
".git/objects/dc/7c37001cade9e355e160ce091eb7d21b8e02e8": "98898c8b5349aaadf856de07a868920d",
".git/objects/d5/62dd3649ccea4d710d01f0b30391609b77f4ac": "c463966a8d93968ca7d434b219ebc0bd",
".git/objects/d5/0ff757d2547993a61715421db1e5eeaad5d5fb": "7f66562fb9862ea5a67b705d4139953e",
".git/objects/d2/35f05f4a678b8624429db94e2f92a6b05b2d44": "21d450993c5a778c924b66bdeb793ebe",
".git/objects/d2/045573cb610d33cb3bea7c610e417818e696d7": "4d1c6c6bee513952ef1f784e543346ee",
".git/objects/aa/16ebe5af73183e391e401649c0c5a65b2c4fef": "d53f5ce770edd0e1bbf930a6233ed165",
".git/objects/aa/54e98daa2907547cf273cea82656614d011092": "33c3dfa9d3131f3dc3baf37f0af7f894",
".git/objects/b7/921cc8949a24eec35a3f72fb728713868c84d0": "d57695f7e03d79a36e6733321c04f871",
".git/objects/b7/3858cd5f4745881da4c0f01be8a248f6fd1b63": "219432e6c64d8c7491bd424303cb6a12",
".git/objects/b7/803c91f7ac9d4baee34de7414ff4d74a70e0f0": "946cb7995a25c6bac235086d159d8c28",
".git/objects/a8/b1756f8adaf0be27504aab964c35516ae61fea": "f6897a2c4a6a10c01239532bd2ab66d1",
".git/objects/b0/529c293f8bbb2c7eccaa558ed7e0f2a535c8b9": "fec8eb213a86fe36caac2c739d0e59cb",
".git/objects/a6/771bfa5448db99d6609b392ac59cbd78a57679": "ec75236a1fc85dfc5da6473fb8f97070",
".git/objects/a6/d9664f48211b89cafa5188ee86734f2f5ffc0f": "0f1b56885ce10d08e2ea248eb63f5ba0",
".git/objects/a1/a38cc211a8d6b741153662c5010a01fe0667d8": "8bd25c2e69b4dd0a683c867a65197e7d",
".git/objects/a1/f04c2fe314baee05f0f3e663046fe4e08ba17e": "d96d27a02ec6700dda515adb8da41b3f",
".git/objects/a1/b671176d35f79dc27c7c8590608c26ad3af24c": "bf6453e9c37118d9cb11343764517c2b",
".git/objects/ef/83e147923b1d8efd97f42465b1594b08f997b9": "98af30aef9b44521a2139124b89ed350",
".git/objects/c3/df71c5de5ba56b1642016532f999effacddbb0": "c1d6bd511b701f5f22b56a7f6849c0a0",
".git/objects/c3/2dc3a1769157f82650258ca7515e42f8e6983b": "436f978b774c6ca3f377c1f9b1273026",
".git/objects/c3/36e9df1616d5cefc5eb685d0ae90d56a5fc1e3": "d7087a1fb3e20a41c92a9aaad8418dbb",
".git/objects/c4/777720c90694e3f5393ab64a8ec3cb3f827797": "260b49a51f87526acab492116853c9cb",
".git/objects/e1/edb7e433bc46294d621c2cf9393caa88168aaa": "3f2438269a2ac8f8ea6ab228d42da1e3",
".git/objects/cd/4023bff677835500f33d5823999bb2dec7eaa1": "51f51bf161ac9aede69343f682567f85",
".git/objects/cc/57bc0612509ea9951eafb9a206af998b1d2a53": "c2ef90475a9e24e2e813e8a55dc5761b",
".git/objects/cc/4267547d3ff58458aea52a5c4b2614c5f68d08": "7534d9a677b0ac8af1a25578fcd6ef67",
".git/objects/cc/e0bd14b6fadb53ad0023d72bc70aaba16fb143": "1d83eb90a87679cfb7a0c6ed1268ca0e",
".git/objects/f9/028722fffc150a33f0d7d3eae93c9997ea5733": "6a60f061ce8a7a65a71c025e05531e63",
".git/objects/f9/c72dd399fc75cb704b78d453fd62fa22141f4b": "e1de053f483130d55ebb446f24edab45",
".git/objects/f9/f07bbee2976dbd891b7fe7f3451689f062dc1a": "4b98431d7182c384610e6ee1fa88bfb1",
".git/objects/f0/52522824ffb03b1c7e07d164efd299c2ba6763": "8403497fd66a736f3f44e5ffb5aeec20",
".git/objects/f0/d295f9be0ebead7c77204bf206de3122ccfdf8": "774a7002740ac69a0f1727911a69fa8d",
".git/objects/f0/3f43554362a00ad5cc6733dd654d959243996c": "58251d02c82462aa131e75f8d0566573",
".git/objects/f7/2b23c9ac98f58b92980a5f38d0b4eff05d2a37": "75af177647ba74759e2ceb20bbed9bab",
".git/objects/e8/00b5f723c33c293a1d6d41b2deff65b4c826cb": "5e6e53e13fef509429e7761240b5cad2",
".git/objects/fa/71be70add189cfaa8ea53c3da785da302f52e1": "7c6a6434eb49450087b0a605c89f9030",
".git/objects/fa/a5e51019f0bd3e903ea2368d7d5fc3e6b18277": "46ee0aac96725877817667b9343118c4",
".git/objects/ff/77c915dccc405de1d86df4bef0cbb2c56dbfb9": "48b9776761ed00b05a5ca2900f11c7f3",
".git/objects/c5/bef7ba6e8f5fdcbb542f68f99fad431a6c907b": "002d73c6d5e41ba60a524afdb3315962",
".git/objects/c5/1b23f24ec5d960fecda171287458e8a9093b29": "994b25082b8c5381d8c38d7c1180d657",
".git/objects/c5/c2fc93cdd8d9452332d1f7ad77867978a58bbe": "61e982a35f75a025e283e86caae33195",
".git/objects/c2/d26be314ed97f519daebf22debb3b391dad756": "f4ccb80261cd19b46facca787d33180e",
".git/objects/c2/72469ebdf905dc64aa87f8b875e46721517a1c": "136ea960cab2ee3ec68edc1daa60d9c9",
".git/objects/e9/33e5f73e534398b6b4100a157fd78319310478": "39370a5375978e3188006f9397bd2cee",
".git/objects/e9/43130ebca312ff3d82e16eefd3a29cd28b27c0": "7d76ed39dbcbd5859db38b4511a7702d",
".git/objects/e7/1834a3a1e4c5a8a2ba3892b5d82338d42b31e0": "bf499c1592d07992a504a89ec3015535",
".git/objects/e7/ab74ec74c4d8b4a5606ac36bfa5e3adf32a4f7": "6a69242985fee89f5ce32b8458275ad6",
".git/objects/cb/5832f958b96cc4f993a91ca6cd9b37df5f2968": "505ce84ed269b53578710b030416bdd1",
".git/objects/cb/d7d4ae16915a2091c5849684519164baa7715f": "aca88ee41a4a48d8861181af515d41ea",
".git/objects/cb/62acbd56bff983b7ef76783cb84fc6b94d71e3": "df0cd25d0f49d1f7db2ffae2cd348693",
".git/objects/f8/5cc5e7ebcc50db1907c9051569e44614d86f16": "ac465be5cd484c2c224950b4cf248c78",
".git/objects/ce/3a1dcf8cee06ecfff83698a3dff7b7b3fb1322": "6d03e16aedbe692921b2bc0e678ceb74",
".git/objects/e0/c874ea437a648d800ab3293f9e1389e12b8207": "d5afba11529f88fe697ccb96f7c7744b",
".git/objects/e0/d2e5f90330a96a6bc6c4ecb8f2f1fce8ce2578": "640662cdb67bbedf82fb23d1fb4ca34d",
".git/objects/e0/5b8e1f20592b6270a76752632c0dc9fe510169": "f6f2390b78c530e34974ad777fac97c7",
".git/objects/46/ba55d8908f99337e0c068e857f5db32a18f77e": "e73191e643278148ba2751ba3d37e462",
".git/objects/46/775adbe4b88777792ca879f9f6b3b7505f2726": "e6c63230329ada47d2f570841501777b",
".git/objects/2c/6d92edcdd06c2f0c1b874df13512e3316bee4e": "4e8f1575ac08e4339863c05970352179",
".git/objects/2c/1f85d619412adc2e759d0b1813003f72d65ff6": "0abb8e2c003693ecd918d1a7c2528380",
".git/objects/79/598df9a60d28d82fbc073c34a8d0e522578c2e": "aa04bce418b8c4dbf7a083c57b263a63",
".git/objects/79/c3b34811d70a6ca6a8b924309bd7ec6024bb45": "9fa6faf36a2e0eae8eeefb2ecdb58332",
".git/objects/79/439994b5db12413b1aff1dbb126e1ed788d329": "ff551ddacea6c6ea22a9aaa6fbbf7122",
".git/objects/2d/d27b2a007e200d447daba291d1074975efc676": "57ccde85b295452497e11e411e16a4c8",
".git/objects/2d/e10e3587644b7fb3554f2c321bb0ba91590944": "f71dbc9e183b1532d7cb9852a2d28519",
".git/objects/2d/b7a4fb06972d28a225fe9b71c9a206fa75b306": "a251617ef0ae27469ef74c39e5be7738",
".git/objects/41/beb8b0e2013f9a717ebd33f977b480c4139b84": "abb10ba164f831d2b6378bfbcbf89377",
".git/objects/83/51789f22c6b6bef9acdde86e4eb076871271c0": "56bb7dbcf4644ce3c3a394e8173478d4",
".git/objects/83/34bb5039678b37d542f28dc36ae032fcb00286": "5129ffe325e503fa7efab06ad97330bb",
".git/objects/1b/5228b3ef3a0d3be570044f2838dda8cf5d71a3": "b843d507181de574bfd7df334aceefcf",
".git/objects/1b/71956b0f8ee30cb705b9fb6e1619c300df76b4": "f5bd206a7b3999943dc004c289b26749",
".git/objects/48/ea426cb09f70056596ecda45bf9ce40b145689": "be28bc711f2d2e17a01a1fdac3aaa186",
".git/objects/48/8d1f15238f1768a7dd5d10c36ea6244df53796": "761fd0f9a0652f1111a1d3ab108e09ae",
".git/objects/70/40fe8e8ddcb34b2f7d7259adaa0497edc8bd00": "cd5c0c6b735bea43d8c3e2582ab604aa",
".git/objects/70/0aabdaa7fee6f712e479ac3ac01d42442cecdd": "1dbb4a83498c5debc3465411b39a110c",
".git/objects/84/d27236394451d53406123136757c2cbc5afa0d": "cf49012e578706ebe51c7eeeaadb8987",
".git/objects/84/072e8ae574bbecb7a8ceae72a76718b1823a5f": "92d74ff57687f3056287549897836f10",
".git/objects/4a/fdfecd0c01903fdc11281770a77347014425de": "cf12e5efe474bcb013923af17934c484",
".git/objects/4a/72873014b43c818eb6f25a9cf83287310271db": "170baa546ce4dcd7889eabdab75f5bbe",
".git/objects/24/a1261a90c0da020e214a55381955406d40e50e": "e8355f6fc102f000728aee15e62dc7e3",
".git/objects/24/5ffe9dbb43f36c45a5c5c1790bb56dc3ed512e": "f86a2e5105759d3a77e94f32925b4988",
".git/objects/23/4305863e590850b299e6546132ec2d0627b799": "e952fa3a872d4405af8cf5c808c66dda",
".git/objects/23/070fa2562e19cd742856f11c21e774736a8bc8": "8cac5573286875b36d8c73a33500c988",
".git/objects/4f/47ec509abc71b3d9a2ac1a5482df5d2175a5a2": "e577b974639b382df7811cdfc4a60524",
".git/objects/15/a1fe330071dc42ea929696ce2bf86966390822": "35f1c2851af05e028eb9a758bf5bffd6",
".git/objects/12/fdf0f745b83996e469b6ac8c2be575e1ac237f": "1a093ba68765e80526fc2c943eb17701",
".git/objects/85/0472e094c774ea9ae20f85fc8dbe5d774f1f69": "90f43ab26a468172106b1d1b10848881",
".git/objects/1d/ade8f5760e2834dd389931d2fbf33fbe271ab6": "3376aa9111dbc1c4f729f3920f931b1e",
".git/objects/1d/c3ae3a6ba4e0dde2a62b1c6008600de22d31d7": "5a6fe73adafccc67691d25fb0125e0ef",
".git/objects/71/ccb986f7a1c547e068c40e25a05aeb3d83e1fc": "916ac64727995581d0a05d106c46adf5",
".git/objects/76/e8a77893aee67c2c321452bb9e4c9f66123024": "cb8eecd6913ea47317ce99f589588edf",
".git/objects/76/6b38f9225f7a3ba266cd667009d75faeab7b2d": "80c70ea6448160912f2f24c8b79ed2de",
".git/objects/76/94a9f88bcac80a779451714319ee3119f368f9": "7c9c63d54a554b9f8ed737744c46cb61",
".git/objects/2e/1d4e3199a6ed1275f6500fc925a5fed6ecec43": "be0218c450ad9c1bae045c1eee278300",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/861b0d13b7264bffdb346e73eb2cf9f98b0e4e": "a8f1f8f9fb14d0a831129221b2278207",
".git/objects/2b/3d7ee70de09384482b7e0b5218908f587c2545": "4d284ad49211b40d72fb1262322521ac",
".git/objects/2b/1818bef2cca7551a3d9d5e3e3a38c4f8de2637": "9c1b48b93d4b30ec908f04c3fb257f19",
".git/objects/47/b27adf785ed4c3628d3465db9da0ecd2a0f665": "fe06d5ea848d1e47a3c7fd8b00e560cd",
".git/objects/47/6a4a9add792375224ed89261c1827c217154c7": "b6874076e122d9212b42f2c6e206b9ab",
".git/objects/78/8bc744781ca784a202eb2a32d27bf21fb675b9": "1888424158cf4e1d8c4cfb1703d59ce7",
".git/objects/8b/2f547bef8b44089b44ecd9cf697d0f1cc234b3": "e650e951031b8ec48b05f91410d80d5d",
".git/objects/13/44986f0475dc567daf309ca739bc786e7e46c3": "95fc552e2f264515ef8fbbb5ce3d85a4",
".git/objects/13/fc1c0622510543df2322dd83d58c85d8acdb24": "c4a3796e5fa50e0ebd8b52cf4a418c90",
".git/objects/13/c2c161c17a2cd5e1d18dc0bde96e085ca357d1": "f76fa5c82c098a2176421456590a0a6f",
".git/objects/13/b11efcae87a1013cc2f431eb2c20a01994b120": "a89b28859c94621c9ea80daf3b4dc5b4",
".git/objects/7f/e4be29fc85021a4656cdc91a1be4439a34d11c": "608b2beb35074ee87e160dfd30ddc220",
".git/objects/7f/0e2fc11c9b61cc1b8ddd3f04a04d3d8845bc01": "564570a673516a2a7722177750b7835c",
".git/objects/7a/923b0d0cdc08539f39310ff0ebe02ea70b685b": "aaa569a86ea09559c52b02f6bf4e5512",
".git/objects/7a/944a9b6436d5088e35a00f8672072c9c2f9e67": "52eb3751592e9b32d808586744aa5b7f",
".git/objects/8e/14dae5bd1d3b8ed2a701daadb024d422db64c8": "bbe27facec276a4f6e54284630896bd9",
".git/objects/8e/38b489a13096332483f73f26b0db90cabf58e2": "36754a1b88c8804884df3d371b62615f",
".git/objects/25/2441a681b8b4485781902c51f9529476eda428": "3f111e7f41be23a942f6d167d0ab6802",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0aa1ca8b9d938548b9ef24f76a35dad1",
".git/logs/refs/heads/main": "0aa1ca8b9d938548b9ef24f76a35dad1",
".git/logs/refs/remotes/origin/HEAD": "bbd4de5e5ee606b12ca5360179048021",
".git/logs/refs/remotes/origin/main": "f9431eb8bbb0abe3f0b861a4b1596305",
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
".git/refs/heads/main": "c70b32ab625002bb827503a0c8ba4c4a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c70b32ab625002bb827503a0c8ba4c4a",
".git/index": "deb1724ea31de658d0fadea119bb1bbe",
".git/packed-refs": "5a6b2165460cb6ca7c9478061e19fb38",
".git/COMMIT_EDITMSG": "a80dc2cda8fd5a278f1fce4dfc7beffa",
"assets/AssetManifest.json": "108fe7fd55125e6562426be9dfc960f7",
"assets/NOTICES": "9aa43deab281534d2044612b2403b412",
"assets/FontManifest.json": "3be8ba3ac6cb2670d2dbc1a5dfee2fa2",
"assets/AssetManifest.bin.json": "7690d6596de1a6dcd2db330a4c060e11",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
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
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6346625d1037ef9584327a9fb8bd1cf1",
"assets/fonts/MaterialIcons-Regular.otf": "61d972310d328ec388b25d4cc0c9ffc7",
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
"assets/assets/integrations/meta/icon.png": "daab63f1346aba43129d8ece72499db1",
"assets/assets/integrations/meta/logo.png": "46cc3dbb06b4c5f5d4b666a0110c4beb",
"assets/assets/integrations/maystro/icon.png": "cdacaf7b2f46cd5d818991d25f485f3b",
"assets/assets/integrations/noest/icon.png": "cd79e4b5af848372f200048cd84cefdf",
"assets/assets/integrations/noest/logo.png": "f2c81f422cd95b1a1c6e293d004f5077",
"assets/assets/integrations/procolis/icon.png": "95570cbae0ae6927f756e52968acdca9",
"assets/assets/integrations/procolis/logo.png": "84fffb321f6e8a4534a7cb2177198de1",
"assets/assets/integrations/yalidine/guepex_icon.png": "a3245ebdfba497b6bfb438eee0a436f0",
"assets/assets/integrations/yalidine/icon.png": "56f01721eb287c110abad0f75fbf82ca",
"assets/assets/integrations/yalidine/fees/yalidine_summary.json": "25d3c7571348286f49b3049e2b612f04",
"assets/assets/integrations/yalidine/fees/guepex_summary.json": "b8449488e26cc8fe78510c2c3eab0321",
"assets/assets/integrations/yalidine/guepex_logo.png": "19688eba2c1ed79f8c74d5fa5e09e053",
"assets/assets/integrations/yalidine/logo.png": "55cd90cb00f567665c672a7b2e2d00fa",
"assets/assets/themes/windows/dark.jpg": "bda58297ce5a1e74fcd8649e69ba7a22",
"assets/assets/themes/windows/light.jpg": "8d867947db259e63287d55ddceb39355",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
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
