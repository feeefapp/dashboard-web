'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "88c6562bc122858cc7adb984734521a7",
"version.json": "45f26a5e1bc1369cac52727744ea6132",
"index.html": "80f2c384b48e94cc31a75dd99775d371",
"/": "80f2c384b48e94cc31a75dd99775d371",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "c0a7cd0aff23e94dbcc53a07c93f6440",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "b7b4a4434f796b519ee6ad67b1e742d1",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"icons/Icon-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"manifest.json": "1267d196674b754d9048f138b4f6921c",
".git/ORIG_HEAD": "a132fa591e8eacdc5d7d5aa02082a47a",
".git/config": "be11eeb67af7a9a83f35ddc0a6acbbb6",
".git/objects/59/15051bb526be56e94de2c86e32063be18eae0f": "dd960d052cde86e05b210320b6e13ee6",
".git/objects/59/efcd5070977df4280cc7f8ebb7b7033a8ba353": "0c3cf459e503829adda84b6c4859cbb1",
".git/objects/92/4f11a57e46836e7eab14d01b526ca4e17970a7": "37393e6708b83d9a13cd92e1966a2c75",
".git/objects/66/3a83d938668a450d6da6cdbef95c7858a31f54": "e28049c5d6cf6d175db4711d32376a68",
".git/objects/3e/57a6b0000209907d90e9adbd227c6873eabc35": "526925d666fdca32191ba35809772c63",
".git/objects/3e/fa2e3d7f301fade8ad5d5909e93807caa63c03": "552bce654cd77613fe8bf3008d839286",
".git/objects/50/dcc2923bd90719341b75317788294318aa73b1": "7f6d562b0b13bc143326e1c65471b45f",
".git/objects/3b/73b884a983ad2da557d5bedba6bf089fadfbde": "7af9e86b0da464e97d1ef4cef6928efd",
".git/objects/9b/96b3c2dcffd33427ed593162a3ae5e1ef21af5": "8c14f7facc9f7784801429285cb44205",
".git/objects/9e/dcc602c40031dce6453f976ff12a2d49182651": "880ff8757f1a1f002a2a1b5564952484",
".git/objects/04/11a4f3931ddb1cdb4983a89a1b5968f4dbedb6": "debcbe605818dea1033f060eb16eb77a",
".git/objects/6a/afce1fae3ecd995afd79fdc1249e41aaf07988": "137cb50af1b8637f535ba817dd6d1492",
".git/objects/32/3c7f47254ac46fe8ca5b6ca6266d1080669afb": "435640f65f2f646775bada78646e1786",
".git/objects/32/d47f49ab2a6ef8596ecf84b3841c0d07af4697": "813892f5c22c14c142fab83e81dcb65a",
".git/objects/56/757ab351febfed0af0e91358edf63bf9ab609e": "8f032886d856e91bdf0c5e404eff36e4",
".git/objects/3d/e0ba24ea9041d6b180247f6f445342e728f528": "55622eb1aa0e20b3f7d0e75d65e18c35",
".git/objects/67/b38ad3abd7f0ad5b2a4238eb9251a6f84a29e9": "81eca935e7d3654d537c7f739be890d9",
".git/objects/0b/dfaa485713c9a602b2d458ec23ec2b1575f6a9": "f25c95b79e8d13243d22078568c95beb",
".git/objects/0b/da72b4e8c191515b7205d84c005c27a6530463": "61d3bb09670afeb654653bca90024d8d",
".git/objects/93/3471e6a70d7173de0c868e0f382ee3f20e6b2f": "dc2b120d137f8d3dd5e38017f63cf085",
".git/objects/0e/46c4cc13173d40ba916e35ad969a9b79f36f4d": "09e55919b1625b00315974386bf505ed",
".git/objects/0e/2aafe0ec3becd056ac211d7fe7df2e7827b234": "d196fa13cdc81c4240a22c77764a4948",
".git/objects/34/8ae1ba4dbd57bc574d908081366dacc0223fe3": "a8958772d527ca1bd2db0a4d0ae5facc",
".git/objects/34/07c92d4b1a4c0022e49686260c386bdf7a8603": "57c30b0fa5b569baea471ba979ce0f07",
".git/objects/5a/3d972872da9aff13845e1ef39fc04421ac8ffd": "162beb7cb4a4514093380c7c077ba395",
".git/objects/5f/bcc8d787a6a350c5e5de32d3d8fb9b8e72506f": "eb1ad26a75dff704f38a8595549598e4",
".git/objects/33/7f69a45e49b064fffcc962ea77d3c057b21448": "65717f699b73126000300de7287a53e1",
".git/objects/33/e89227cbeb0ce285a144737da7e2e4a7bacad7": "876c57081d3452bb583cd022ce9924e3",
".git/objects/05/2f90d8c7339756d31eead85571e531815ba841": "9019a83b8a109c57e68a0356e07b50d1",
".git/objects/9d/8b98d10d5558d16ed176c67dadd414a7578ddc": "718d3a9925cfc4f3d58c9bd523932f84",
".git/objects/9c/e394b0b18cf6bf998817d013223d45a6acbc44": "b75e3896f0baa8477d2424da1366b79f",
".git/objects/a3/d865d02b89a10aa5fd35229197ed47a5445e04": "c003ecc4ac30b342c79b58dbb29805c3",
".git/objects/a3/58d7b4e19679297f9aa2c72037c987afbb8643": "68f0b29d34439bd5e51bd1f41d74735b",
".git/objects/a3/75077b23eef8bd5b3548cd3aea44c07b11d2d3": "57e675cedae473d4f91cada27bd43265",
".git/objects/b5/fc5066ce788ad0967ae0be3bb0c3732c1b6c74": "c6c8bd12df046e1a0e00de958b83af21",
".git/objects/b2/b7e337bc8ec55f0c90232b655111e4cabdbe99": "0cb813c260da9bdf68e755cc1bbede29",
".git/objects/b2/ff6edc1b825c54472ccef82e503e8a7a4e0d0d": "bae878e3a3690d205e9ff6353bfc3cb8",
".git/objects/b2/7c3923a2a1adbca307638a0ba0cffe23078932": "75feaa98f31ac399f21b4123fb34fd12",
".git/objects/d9/16dfea19df70ca8bf49181dfd48837596887ce": "d296e4781bc039469405e3e45170b3de",
".git/objects/ad/d09c3a5824ab66bb3c0a3dbfdd67bc04b7fc42": "afbb425023a8c5fdc8301ca0ce94914f",
".git/objects/bb/025d430f1fa72364573d20e0707618c8ac5bf0": "08f0452e44ee2e2f7f77e3ea72188413",
".git/objects/bb/cdd29d35f796064500cef3bba68028f446c35c": "a6f95c49ea7319146cc00171c0618f76",
".git/objects/bb/5096bd2d8c6948d1ceff4eda8c6b5c21b126df": "8d3bf45c93a2d6d62ffd3d2b1df8cf3a",
".git/objects/be/88518d0da72ffa46a33424e6c286a9e8db7f57": "7f9189456a05cf78559a842430e5a243",
".git/objects/b3/7bb9acc0f4c41cc3733f90586f77d0bb91c8b8": "bbce4c9653632925f544a05e811a67bf",
".git/objects/b3/84d4b94359e2352a6d296ad484dc567b1cdc56": "e9f699f91eb3f4aadbbd295b6798bd72",
".git/objects/b3/2ca12a583bf38898704c695c5e08f51db3a815": "4be4e258ffdb835eb66ba2900e931d9a",
".git/objects/b3/5aaf77f75f9996b250e32683dec3d63fd36131": "2c2227147cbf17307cac3c17a3dd101b",
".git/objects/df/653201a8920968a889097e7e6645320a5c3205": "c733dde44d400731dcbf0fb7179851e4",
".git/objects/da/50fab63445812bae3a6d248db0b8d83567049a": "6f81162193f9ee5181f1deda9f6dbdd5",
".git/objects/b4/f2d0101ed8c61a82e3fc9284464fc575801f65": "0e13aaa6a6e98ef710e5f487af61fb8c",
".git/objects/bd/56825d5a2d3acc47059b2f779cbd22893f61e4": "9d12eef70f7311a4548f205fbae6f4f1",
".git/objects/bd/c5b91117436739338adb574bb1fe3d66ec1098": "64dd61256b2570e172f46f75cbe857b0",
".git/objects/d1/02f4734442a9c5e2df4d7f263689740b0e6ac5": "88d56d6c5cfd8e64d7648527817ea3d7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/6803bcf0e6069b8abbea9a6f8214713ec8f245": "714925946b3a0a1d96790b3dccb33fe9",
".git/objects/ae/9c2cfd44165b547997e87dd7678f04986ecdb4": "84b45df9da9b053bd2831e1b4ac4b6d9",
".git/objects/d8/46118d762afc695804f549b8498e9fbaa0dc2f": "eac22a30a3851ca79cd050341ca9336c",
".git/objects/ab/3b938053548603601cb07cba64cfff42a04ee2": "61bfa3a10eceadd8569e344c0335bd4a",
".git/objects/ab/9d421a308f1b98e5b99c20c2554f8a90f72063": "cb31f34c76a35bc23e53b184068cf436",
".git/objects/f3/fe1f5de62a0db1cbb43cb2002b85bc3a23630f": "b5344e744660d935ed98f4d30fc63e49",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ddf828e6180e615207c1a1b5312fb9d2bcda9d": "7216b4e2ea262cd9b2ba9fd4696969f9",
".git/objects/c7/6651aab0cd48bc2dc3e697055e91c18d40135c": "7aa2ab8f4e16f6e3b1a4d5fd518044dd",
".git/objects/c0/c85a4a398f7a40ccfc2b8cad823ef6d930ee5b": "795104acb2798784eba54cb52700610f",
".git/objects/ee/1c1a82268f3d1ca0fb859ec0f2d905427ba951": "e90ea3d70e4bb0a64e0e02f2af6094d8",
".git/objects/fd/bd0016d056113bb45ee901bf20dc768d00f1ef": "b5ca029364d506fed02243e15695fe2b",
".git/objects/fd/94b42d8ebe2e6d36426b6e1978cdc374928fe2": "d6af024549577ac3fce3b337b1cca251",
".git/objects/f2/4a1d6b3225e3d84b37e2defe0994a4ba3da80f": "b3a70824de95b436227ea0e6f09121a1",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f2/21880d1221d6411829b95b06d54ce7f4462d15": "44fbe689bf19c817feb100a39985ed68",
".git/objects/e3/03ab359d2a4a68f5609574611ec7ab2f84e522": "a46fc8c293feb8bbfa67e466f719b21d",
".git/objects/e3/68f21c7412cc591b3fe4174a93e0b3751c92d6": "c08c57d873c6c57e66885f77f4bbdc48",
".git/objects/ca/2d83da13ac5585f587e9d4206910f5c4704d61": "beb3e9292c753ba3756d909eecc8654d",
".git/objects/ca/9b5f3a4a5196918b698cce6d58f9c233f8a27b": "9a8cc7848bdd65064de2106a779e2ebe",
".git/objects/ca/9cc2163f7b882ba00db062d4e2705d68916395": "dfef36b80f94f829a936faf8e3bc6ae2",
".git/objects/e4/15481162e4b8d8f9a1a14c63797c543ba1d695": "928e76d7c0d352803734f7877eafaee3",
".git/objects/e4/7bce2a4c2f19ae2fa162a4f22120729e1ca6ac": "caa2554962030f7ee7953c6738233c61",
".git/objects/c8/4f618f9f7a5568676a6300e7ede0f9f86eba40": "c43305a2ce423b7e55268705a62f7555",
".git/objects/fb/e16cb2f3ac20e0aa2c3d9900a8a209389430fb": "ae36b1cb69c0bfed6992a12b6edccfee",
".git/objects/ed/4b89307b286c76cd9d4b7aa4f45fea1b234e0a": "0ecf8fc6234c68d832716235af98e4ff",
".git/objects/ec/f44c686ea95c907847944a5ffd78d207d650ec": "8243af2cd19b79ab06d8e84faee3433c",
".git/objects/4e/7e43f464494a535fec7c7d1e440419a0750960": "9f6e3e52f9eb2bd31f7350431b687047",
".git/objects/4e/b2c287c524a6fdf33d022ece36fb81780e50fe": "2d6e26c21a1b7d225a66cabf91f706bd",
".git/objects/20/b3505256962ca0090b6a00a36abdb57927597e": "07ac12ff10ad91f78f746ebec7437d64",
".git/objects/27/9e7ac471f48c7df846fdd7fdac69d2f76a285b": "422d86ead52881704d2be228c9ceab42",
".git/objects/pack/pack-530e67b1063f06432ed17ae8ee73440b5322fae5.rev": "12074b235b4ef3999aebbd27305beec0",
".git/objects/pack/pack-530e67b1063f06432ed17ae8ee73440b5322fae5.pack": "8f2f13af5d46f6896ee7166f67b87a3b",
".git/objects/pack/pack-530e67b1063f06432ed17ae8ee73440b5322fae5.idx": "c446fa5406496abeb0720604bfc3b247",
".git/objects/7d/7819c8408d40e6b7748a1f4d2653109014bfe0": "b0cece4e826ef50757aa188d1c5be21a",
".git/objects/7d/a24d929e7a0a96af04ff7f039e0ba24dd77814": "26e1dc18b7abdb20e4b55a0e8c5732b6",
".git/objects/16/aed1aa36643b49f4572af2f266e68605184f43": "015cd04ee6178eadf65606e93bba1625",
".git/objects/42/596ef0eb1b9c0d8f1c5a57bb43071681fb5176": "3c5dd0b6b6076cbae36c5e3498ba37f3",
".git/objects/87/02a240dd438698a2061acad31f5982c595f27d": "128066c61166af4faa6ad93b8a5e4962",
".git/objects/80/6840637005f680654df6a6fb4d7629f90ae9fc": "0e8c4f1ca312b0ae0054a180cb4f8a46",
".git/objects/80/f019ded5f5af27535cfce220f5608d6ba77d32": "28f8ee9fc6628613a65adfdf194f6623",
".git/objects/74/256bc31a2fe8c879c0e78fb64f87253a8bbc84": "6a675759d972acbb8162e2804fa50df9",
".git/objects/74/22849b392866e5a1f8e45abe3808114458a547": "2a6d0c8e341210cb9d88f4bf95e12bab",
".git/objects/74/6d7aafe518535cfec691e89999bc9d1cc91791": "fef6a7dff7714c14e7e14e3dd3630ca7",
".git/objects/28/35ea5b9320f5244045da274bd2df75b3fa270f": "20b52420d0db8a20bdde58c80d00dde0",
".git/objects/17/eebf5cf1c0b0e962a40330854c9ef474e24473": "312166055d14ef4837f1b0eb4195e232",
".git/objects/17/547e0c8b2ae8a374bbd7405528e004c87a68a3": "6faf8409ab2755f38b4745e688304d79",
".git/objects/7b/395bd49ee3f5d442cf19f9b90e0da38e015410": "0c080ca4012f992622a093068a78a5a1",
".git/objects/7b/efa5080f62aa5805629cff4e9642fe13fa9dce": "3ed09a4f6a983da4de36f6194c75c63f",
".git/objects/8a/87ece4f06fba42d21e8f8c3c572a46c10900f2": "155a302fd068d33f41ccb8a9e3ec999a",
".git/objects/8a/6cf42680d7061f9901ce6c22b613e2b94fe0fc": "861f345be48ffc37888b2e0f28b69f9c",
".git/objects/8a/86f12a787c3d63af73bb1980f43cd8fd71ab40": "65e74a7af9a99b347b3bbfd6d58437e7",
".git/objects/8a/9455b47498473d3ab9aabf95ac643ed5ee78eb": "0e85a81c4b381a8dab9220407c4fd52e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/b3cf1cdb5995949beb9e6c478da5af2702c83e": "a3afd524e028aa46942a2cab9d49d75b",
".git/objects/10/1cf34205b41e54cc78d37be43fb3ff67015541": "07fd9e457cf0339ddf80a7dbb359f322",
".git/objects/19/069d9c889f64172cb1768d8838fc2eee0e75a0": "cf292f36b5c7301623462da5d2d91e74",
".git/objects/86/4b253019eb96c00953333c4eb6e2e78394235c": "8f70e27ad0a982258347a7885688b7b5",
".git/objects/86/a1facaac782b72a745ee861c8d746f72715b0b": "1dd59e11a5a2cbbddbdc40c1e7440b3c",
".git/objects/86/e79ffd6efe8428552b47b1b106a7b5d7f840b6": "be81b05ddc695994fc2a35be233bfea0",
".git/objects/44/c837597d3cf054b9bd97b05179c4ef0ce2eeb7": "dc9fdd02ddb3e970e99a72186b8cb696",
".git/objects/44/41fea01e4002529b9ddf6b6aad268e6058b015": "f7fb56aefa3f23f9282fdb4a7736077f",
".git/objects/2a/d85685c4659afcae27c93eb4388be731d0903f": "f7bd25237bb348807425446895b21905",
".git/objects/2a/360165deb3d938ed40a7e27db7b6c6c2d9d47c": "8fe481928d21b1dce71c2d9141e9108f",
".git/objects/43/af128937242f80358bb7de4aba471a6f2e2a0c": "f1fd272528e79783eac38bf3e5179231",
".git/objects/88/04eb3e7ae61f0708c3df1aeecb7fc0b7a10b5c": "9b43f5cc022ef675294a14ca79ba37f7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/6d163f6a00fdf70912f776dade18451c051981": "aa2d3858caf48342a91be4c588374579",
".git/objects/9f/2974a493476bc37f3b9ee42bca550f77c9a44e": "a9924e586c9768003c4563a74051f4ca",
".git/objects/9f/7587c9e347b76bea96e94fe504ab7b7fe2c519": "5e151a6dc44923d6afbfd6440a236fdf",
".git/objects/6b/739a761f1b3889cae86878b71bc5992e77c99a": "eb539f7ea16b29fb82a405ddb87e1513",
".git/objects/38/689618c5a6ba37e4b4e3fb1c1556c9df007d72": "d2a85a6be7eb5dc4628d7cd3cb3fa810",
".git/objects/6e/97796956d1ffa7d635b1e4ad66b0f3d28d7096": "7cca1145c1404814d1731239eb5965e6",
".git/objects/9a/878d17e8d435a41027b851ddef39d81c924e12": "6d953b59bb60632d9259ca0082cd17a7",
".git/objects/36/f7103ca07c468e619b72d24a41aab5b9f239d5": "574fb1402d609f8ca509df976307fab3",
".git/objects/5c/6bc2dcce3b7032e91e82479b4df26db238c06c": "42cd2018847a42a46e0b073fb074c211",
".git/objects/5c/1cbb4a509fd9679c15a732ad12f1d2786136a9": "42fa6af3c955cee661bbf4c7632dde8e",
".git/objects/5c/31001445c114f2e8e55e8f675cf5da78ce9da9": "b80dcf2a572021035f56ae328d53ce36",
".git/objects/5d/042259eaf0efd296ebfd77774eadc2b9292d24": "4d46252fe95d30e2ea766e3912d98bc0",
".git/objects/5d/77fa3579ab1db7285236b77935657048602742": "0618c2cf4e82d18e9717778699e1e03d",
".git/objects/31/d66284b750e7266f58174f05a7348544f6caad": "ef1751b5165710668b5a6d3976b10b48",
".git/objects/31/1b5031603afcc9911ac85c2fee46071c21c7a8": "992c97c490c3d54e07c48f01b66384cb",
".git/objects/91/d90bbf43132b163b6bed81a4afb3244acfd4b3": "ef4e19deb72178edddf0df2657743a87",
".git/objects/96/bd2187027b628688929d50091834c663112c52": "e8c9662568150af194716661651c585b",
".git/objects/96/97e0dda768e0d0c977f10b6406d9f03ab35cbb": "5b9444222349075237d0f456ad0bb761",
".git/objects/3a/9275cee645ad217154735cff1392fd1b408c51": "ec42c6e69983d8e03f825cd92adfd6d2",
".git/objects/54/49e8099de580a8b681f5dd13d4678df8475d5c": "b37fe831f3899f5bb368c433a15ec454",
".git/objects/5e/e48e2c4510231d3d2464e3aaa56fe9e0b674d1": "dfe466a1a76bb5c8247683118f9ac3d5",
".git/objects/37/f52c47ed16f6862bdf28931368d87fd3dddce2": "0c5c96c833be9102c3a3eb91c3c2940c",
".git/objects/37/1842ef05bad4420959e0e481714af45cb1af87": "4d0a339173e96f98f1d555ede0f759c8",
".git/objects/08/d7663a3104c6de753675b986b4f799f2dbdf12": "fc3f6f2b358ca7a6d970169e16b54dbf",
".git/objects/6d/cb8d52ba0c586c39571d40e127e51c17015bf5": "e650466525b13145297ed805f431ec7b",
".git/objects/01/23cbfc7728c2a90e11a5bd57714f01004a0706": "8b1fd3706ac79816d855ff5b607beb88",
".git/objects/06/d353d14f9195dd3c6b23560fb0a7a0adc25136": "fbe8e51f89d818bbbf000acf509b3a35",
".git/objects/06/0f99ebfcc23c38953609f17792b0a54ccc7ba8": "7967144fbc618050b6b889102c7031ec",
".git/objects/6c/487795c6ebc163678c7a5c8a9e5a542a14a7d7": "466e6539bd8912a46fdd57f35ce9654f",
".git/objects/52/26ff1062441d9a974eb2839bfa53749c0f1a24": "4ba874d42f8f22f9645b80570911a7eb",
".git/objects/97/1b261b59c838333b9dd82afbbf3464d79282ef": "37262f793c53cafaaba21506e516dbce",
".git/objects/97/a2e9c434ac9ca4d105c797871605eefafbcdef": "e7180bd39a11f268cea1dcf516e7e383",
".git/objects/0f/37fff490bede7dd73a5912f4bda2b0b98bad81": "d84a40853f807f5b0ddb1694da9a71e2",
".git/objects/64/fd17e20bcaf4362db3588739fbf23020092fb0": "18e8f879733d72b5c8236871d5bd2ca0",
".git/objects/d3/34f25d83d2a84ed44f5e0e41440d745a0d1a7e": "5d2690ff8aa29f2c1b9bd569dd1501b1",
".git/objects/d4/755cdea1283c77ecfd0bb102a631d61c317256": "f3c9141608ea058d20c8f93db33f71a7",
".git/objects/a0/7b4b22884b402e4778e8fc86d8d09985f3e39d": "f6b7413c448e15f02800df20921fe76e",
".git/objects/a0/fcc01cbf41739026540734280d0fcb9daebf19": "0fd8a2937b9ed63e558b50ec26eadb18",
".git/objects/a0/d7d1dc3ebdf5c753fada64bb3ffc458d17c757": "544885f4d86d01f9ce1609d583ee91f4",
".git/objects/b8/72c66c2d639f1aa63276d01e23e392bff252a2": "833bd92997c0e0eddd62d1f6eeaf09c5",
".git/objects/b8/4eeb7027f6a8eab91d679bb4389097cf34342f": "5bcf9873b75817e109fb37d8efa4de4c",
".git/objects/b1/5b71344dc660d07ea826c83c9bbe00206a028e": "2ce3d220b120ad9eccf2fd34a28e0ef4",
".git/objects/b6/5cfb947510b62a94dc4c02140a2d83e62219dc": "9a1195e91afe2f15a579afdff3c9d3b0",
".git/objects/d5/0fcb2c426457209225fc9e8405c2b3cb6556b8": "919b067e31956e9cb7e35f6d7520d676",
".git/objects/d5/81bfc019b71111faa59855c5e32fad6ce13e42": "db77c69f6e0009b115637a38738a0c1e",
".git/objects/d2/aba318282e2a669c319d83fecff624c9a2b64c": "17c70594716b4e5c9fac402af491d3db",
".git/objects/b7/7830fd41bfef9f2e0fb156134d53b8f5733664": "4e291df93fb251e45df952fa4d7bb945",
".git/objects/b7/70aa35555d219ae0d80b90fd9dc9a6fc0e4800": "41a573f7f68e0b64ad587267904bc228",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f242542d9421aac6d82c151ff299591c0eae4a": "982ed3be9252605242636d8cb03b1843",
".git/objects/b7/70049c0cace0781672a3cc5b47293f9e95afe1": "3761ba254191a563a699efc565b18249",
".git/objects/db/a2771af377a1f505fb246169da76c93a7a0f3a": "797b04bd93364ccae3535e660388555b",
".git/objects/db/13ed937d7a6e7a32470dc714fc617d666c207b": "2bc32bf3ba0c71c6a48272fde22a5193",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/55c3e9539e1491524b8605e0216efef14f39de": "ea2953a6b484e7be4876e65e5481bd56",
".git/objects/ef/6596d3ca0f31f8e3937c8129dc478a4da9198e": "b630b172b31672440a19f724a9eb3f13",
".git/objects/c3/e01715f00a0123056a2f7bf1b7dec0202ec60b": "820f5d3d2589a6b2d6d49d6483bc04f3",
".git/objects/ea/426e90eff112dfe5179e3b63b748e42ae2ad3a": "27640ddef5dd212a1ef755934f460371",
".git/objects/cd/f0e952bacf75eb4d63acc9f548e31b70d1f9e5": "31bd3db38bf2c7cd82317427c67e6f81",
".git/objects/cd/e0f0df7d508e9a6e27447777232628ddf3c6d3": "04c9fd90804953963a2961e9c91709fe",
".git/objects/f9/d2124c581c4f1043332a9505314175f8917969": "b04797a444318f1b345540e008d408bd",
".git/objects/f9/c848f71359b50492fe883d734483795b18539f": "9e9a781e4e49e77bd6135f2771f2c0fa",
".git/objects/f7/e6ba721ac4f122b407e10d82ec7c9ba458514d": "5c26ffac9579fc62473983051f1debbc",
".git/objects/e8/aae78a7a6b6d4d08fb4128a6b21576e0cacbaa": "9bc38075ebcb7c90718dc67cd3f121cd",
".git/objects/e8/b4767d5b45f4a61050b4bbc9eb7fd7693682c2": "80f2e8824978efe183e563ebf9606afc",
".git/objects/e8/7996a04072e450db554cecdc887b13dd7af87e": "31264ef981fb02a6c058f32f484c7991",
".git/objects/fa/b039735300f9702227640d002c8cfd8447de90": "214a09ccf27a5589466c48f0bc828faf",
".git/objects/ff/c2be72909295a0167487a5f71d416ea34a102c": "8a52489f690156145ccfc080251b86fd",
".git/objects/c5/823bedc658cdfdcad83f270862446349e3dce1": "cf4dfe10a6152b1170059e0d1f526212",
".git/objects/c2/8379e50ffe714b18b0f9b2e5f8dfefaa063856": "5684050abf71511b9dc60ad5b1ee4224",
".git/objects/c2/c962fa0be86c275fb470f5955b672b6fd6fd26": "4e40715d79beda1136304d4742a44d78",
".git/objects/f6/8a38b70c059f185064cea0803ae98458b87269": "343e0da29ca78e9fbeffefe3ac7aad9b",
".git/objects/f6/e4d234b5d76927386f0813b4556df1a1ae14e4": "44cd4b1ccf3f2b0b3e21c15f0fddc1b0",
".git/objects/f6/d6e0cfecf87b45f1b62e92eb9b0a7a062f25e4": "5f6a2e258443e6bf1d67a7f9818e3c26",
".git/objects/f8/7b957fecc1bcfa5b084f9cf8295b31e23885d9": "ba8e1e4025a8cf1889444b71ae242491",
".git/objects/ce/d7035e07c2e231403961f86101c14ccdba24bc": "b57b9826566e9e97980cbf2e498b72c7",
".git/objects/e0/a3f503ebe44268996ae593f67a1d56486d101e": "d6b73a96a0c4295384f9901b9292b92e",
".git/objects/e0/b5aceb932e35410de535597b34839e79d2c30f": "cf3aacebbce895c23b48bf04b7bf48cb",
".git/objects/e0/f1b725e9d1df060f4041e088ebf14962ef16cd": "85b34129ea3cf88a56bbcbea5e13a3da",
".git/objects/46/9b8946206a1dd75ae774a84c8fac82629d5ea1": "c04d6377d0e20d3aac4e6e588d1b9c12",
".git/objects/46/14be60014ab4571523c8ceb0c4a9cea4cb2588": "f4c5283b8b4e35022363dff74b64cb7c",
".git/objects/2c/1d1d9d1ceea4ca8c66a1e2c6254c0e375f681e": "442529bfb46b3b9ec750e834b7744635",
".git/objects/79/0c74545b467fb9abf25a45362be5b6bb42e66d": "c45c3b9866341123cf3415be0719dbe5",
".git/objects/79/a70271d9d5554f227da1aa9a565c5966fc2fe1": "6ca6ac97e913b61ae36c65b78cd9badd",
".git/objects/2d/b0ab3b64b668f13f46c717fa2b2ca3040318bd": "5924f7690d60f3f01b02c283b1966ff4",
".git/objects/41/c8ca1b6ae204efe0f588bb22c5bc3865d26217": "8d9c39851051da7f84dde0ec581c3796",
".git/objects/83/2e7b4f3fb77b962a2b76e050b6cea92e838cb2": "fb8160cb99f488640331732257f7954b",
".git/objects/77/e3f6ed93764fb2153882ec6273c06a90d7c6b3": "35bb8ed7c29432e955149a90b5d1f74f",
".git/objects/48/74f904cc44706be911398bbda5567c0ca164e9": "47cf69d9f04644b184747951b7581e96",
".git/objects/70/974d5ccc24c59b1c90f44886e2dc550e52ed36": "dbf0feca250fc257cc70932cff6210d9",
".git/objects/70/0c82b459c897c37ece1788b1ea0b5ac5e92acc": "47bdc70152a28f7954d85441f75bf2f2",
".git/objects/70/d5fce5b9873dbe755228146e0da704ddb38732": "d33e76a7ece373e5a5422653edb9883c",
".git/objects/84/46cced9f6801c1cadf5c9e6e3fc986c268a1b8": "a6df141035f77a7e2194bf18c63754cc",
".git/objects/4a/ab5f483e6cfc222d0469b9fbbc283ed692b23e": "6758b572345aa011bb18da527717b262",
".git/objects/4a/d33662f19921c71acf8144a01f91ae8f7a9726": "a5e3368214901db6ff9f833be26f1839",
".git/objects/4a/fd63459ee36d7768c6395ac96b5efa7abc8a91": "bc1da2516488cc05e9b6bce88e2b7f9e",
".git/objects/4f/12b39e6302263991d3468b510687d37bcf2d85": "bb51cb67434557a8f58aa6ebf09aa7d3",
".git/objects/4f/d3ffaaa3021b72f113b9296570d716b7e45d06": "24ab2c915184b7244ecbaa6e28270e8d",
".git/objects/8d/747254d0d01bf1a2cb3af9f87638689d9a28cd": "4ce953a0cd637c6c0af953b3fa1ef813",
".git/objects/15/4eae469a75b5b3e6a9f30ca60df5e010dbd751": "b335f8501f43cbe8534deba092b14b50",
".git/objects/15/e00312659913209f6cd5a0ffb45bfa411247ee": "3bf45a573bccc35732cee516d03b112b",
".git/objects/12/32ba7c7ef2bdd9a17f3940e89d08ac02442251": "4cd2b2dc87b765c277562d2913438548",
".git/objects/8c/6276263d7e322e7a945afeb8861ec940ee3291": "245e48ebd2b2005f8e5ea83b8c5c767e",
".git/objects/8c/d69e62b94e37fbe1eb48a37ea61a5f8573bf62": "f3508c1634fe8e86204506f32027d931",
".git/objects/85/640695afd8b25a64ba7f78ae3567820d71d8cf": "71bfc165511d342b2dd1431d476b9265",
".git/objects/1d/ade8f5760e2834dd389931d2fbf33fbe271ab6": "3376aa9111dbc1c4f729f3920f931b1e",
".git/objects/1d/47d08697494f4944c6ff1a710f24db3473e87c": "910328579769409988158d674b6cd5b0",
".git/objects/1d/1d23c26b68cbd9b3025f3597aed62174f44a8c": "d3d1ef53789045726553d0ffa94b0f0f",
".git/objects/71/854dfaddd8e540689edf46cd818d28ab7c74ad": "67021b0d870c0ef1a97102928326ff85",
".git/objects/71/d41728e64f7b173a37233c28733c94501ac3cc": "507481ea71cd5494266c2348e2cb504a",
".git/objects/40/de57ab6baecee7ae7bdb03c43b1fe157c60bf6": "39c71bfe42fbf069dcb845b4947bbfd6",
".git/objects/40/21ca806ad0a5814272898559ae820ad3e1205f": "375975f98c80dbc6626c83f30cc819d2",
".git/objects/2e/551733af88b35935a09b3bc1263a92090a9952": "38f81b72218bd24dec2290c72445fc2c",
".git/objects/2e/5e69626dec211c9b149a90af5a7956099f44d1": "1116709f7d3c3ee7724a9a266afa3c8d",
".git/objects/2b/cedd3fd25a796c11a6c1c9cfd8c7df8c689272": "70d31788008de6a3dbc45bf1601c0d6f",
".git/objects/2b/b2f3089a5bd1879840b7009ebf20b4ce8819a1": "89ecc4c543d7b82ffafbc13ed6ef4570",
".git/objects/47/d0bf344fa4b434db10de8ed19d17ce9859889c": "395adbf7ba349a92011887bb033a0db1",
".git/objects/78/e3d6821e483d7b72896db39e9aec1691529151": "28dc2cb50c67462f543e730ef625fc67",
".git/objects/78/329a9fff017185e3dfa4586c3989308e012a45": "e703a1e3f8f3061186f8586fc10b5b00",
".git/objects/13/93e7155662bb9bc2337bf34165b1879bc92ae5": "d546d91c3f10fb02770cee1e17741072",
".git/objects/7f/7f70b9092256d11da63b687f1178b11213787b": "091d46afe43d2ba1f75644c2ac54386b",
".git/objects/7f/86db99a9947b3c8e3d3f486727ca64674dc2a6": "ed2c97c0c2a8256dac0647394eff090b",
".git/objects/7f/73c56ba9d0ae9832e5c8d01aa22a0313dcc255": "2ea072fb8f769940b0a52395cbe83dfb",
".git/objects/8e/55d9e2e35ab1b9250ebd3aabe0d0666bc5963f": "1d184a5b0b2b13caeb64a9af0403896a",
".git/objects/25/b639277093fa33384cba743228b4004ede9322": "6cdb1958b1ee6a7d14af992cfd4d3f29",
".git/objects/25/2b0d3b1458e4111b850ebc1ed25cedf7958008": "6d541106e37a2c3c525f45b324988e96",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "657c35a56922395dd56d18b60c7975ce",
".git/logs/refs/heads/main": "657c35a56922395dd56d18b60c7975ce",
".git/logs/refs/remotes/origin/HEAD": "4ae7b77d5423aa65c84f7a76e24e14ca",
".git/logs/refs/remotes/origin/main": "048a696cf1e5c487121198867e75fa89",
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
".git/refs/heads/main": "965e416ba1ccae017755a0206c088730",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "965e416ba1ccae017755a0206c088730",
".git/index": "7ba12262807dd5e944a3e031f92d5bae",
".git/packed-refs": "b6b1078eb38a85a3dd231c6cad4b3633",
".git/COMMIT_EDITMSG": "a80dc2cda8fd5a278f1fce4dfc7beffa",
".git/FETCH_HEAD": "4e82df97b0e1524af9200bccd11b57ee",
"assets/AssetManifest.json": "2bcf6935d18bd4c14cd178b50bd0651c",
"assets/NOTICES": "a13576203ff9a117b72ce3504fd6d538",
"assets/FontManifest.json": "3be8ba3ac6cb2670d2dbc1a5dfee2fa2",
"assets/AssetManifest.bin.json": "a1f5c3eba724367557f0bc8acc9d16d2",
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
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1c91fa66fa718c1283d385998e57f320",
"assets/fonts/MaterialIcons-Regular.otf": "4de68ee9b279a24031b1c65755d8c6f1",
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
