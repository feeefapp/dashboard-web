'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d10e97f6a8389acd7e50aa4413e7f494",
"version.json": "73b0fbfb69797d79f321b4296268d940",
"index.html": "c17a653cbe7cbc2fdf43bce90334b11e",
"/": "c17a653cbe7cbc2fdf43bce90334b11e",
"firebase-messaging-sw.js": "09f0147eb86ee00e1cf7c622a66f8119",
"main.dart.js": "b771d006bc72dc49961e542d6c070dab",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "b7b4a4434f796b519ee6ad67b1e742d1",
"icons/feeef_icon_macos.png": "e0ae516df6a9d4b2def7fd372a92bc38",
"icons/Icon-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-192.png": "fc2225c2bde792b0cbc5e663b80d7b3b",
"icons/Icon-maskable-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"icons/Icon-512.png": "88b069ef2133e7540ca267cb7abb48ca",
"manifest.json": "d6731b84fc1c61ebf5a6e0c639b4c553",
"main.dart.js_1.part.js": "c7c3ddbafe429f48926b7995385c5185",
".git/config": "19c0f3787834ac5456b8f197edc7c19c",
".git/shallow": "4c1f1649557a5edf5c1541181a6d78e9",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "fa07d3cdd10e555c825c74e6c44eeb59",
".git/objects/3e/e59f371ae93cb33a535f7b5f0dfe2dbb6fa5a5": "d535066d88ec4d30164c131d65532a36",
".git/objects/68/f91e38b24b1fe6ef78484a68741e374258958c": "529bd552c16b0926dda6413c5e9eb3b1",
".git/objects/57/4a49daf5b3db84ae62a1812545ea5dddc9161c": "6406d62ad5b72b73d706782da7ce60e2",
".git/objects/3b/2daeee022da438d74c7f649d373bc556421578": "524e36c5b98f14e1decc748204b0427a",
".git/objects/6f/4855f2893530e7372a63972dc9f632f041c243": "3cc1deb8eff2668884d89fe71065d2cf",
".git/objects/03/791e5d7730cf6b13f307a6000a617a35c76089": "8870d69d8ce98330148e53815031e249",
".git/objects/9b/9adeeea2c680405d12aec0d480f00104ebe779": "173553170e58f6b573fdf5e84cd9029b",
".git/objects/04/0fde08f60bcb60faad5e87e7d1b5f9299fe27f": "1f5ef81bb65a1e1c512da82ae4a83d83",
".git/objects/32/791857e2fa35d1bc6887c717eed5634f139a8c": "111a05181e2a8e710aceb54d1536ca87",
".git/objects/69/15fb3ce09c3121ab228591e813a05808a56b6f": "675f40d1739f876081f8a23924943be8",
".git/objects/56/a375e7c3ec4a481da268a6e8308ffb6b225db6": "8222e5a92a236fccc843f3d238c76b25",
".git/objects/0e/6f20ce254971b3562fbec7a734f41009256441": "538a67ebc2e7ab7cab505b3efeb7894b",
".git/objects/5a/09a549441f26ae604bcdc7a207ba5a0ff40613": "b7ab32e10c15603d2e3209c64753263a",
".git/objects/5a/2efe5e80e0cc52c85981f09b14aa9824e09ef2": "5dccd2534dcb7aeee6014f163fab947c",
".git/objects/9d/60e300f16468cef9a4b4310cf9ae5337d0bf9c": "0949acbafdafc4fab59854cc0c45d90c",
".git/objects/9c/a6f12d5bd9123098ffd84acfe5347e87d3fed4": "0a25e1261ec2c9d84e699619d0686b01",
".git/objects/9c/da5af7150ee10d1ad030467ecad1fd3870c835": "b462a948c734f96f3afa37ebe25b5cf4",
".git/objects/b5/893051823226c95a27340e09030d2668723adb": "e1446e64fd5cba11b753f07c7f51ce87",
".git/objects/ac/425491ec0d30a776cc21390603a82d9180f17d": "b785c5dcc1609382d1c07df61ac850e1",
".git/objects/bb/229eff3e61cf504912a4c5257f7531cb5f8fbd": "13737c17704e085a3720b15910c5e419",
".git/objects/d7/7892fdd9fccb3d766d35ee2427ff9493dd809e": "1b605d7da415bd3c97dc8888b2868bf4",
".git/objects/be/4926f0f8b16d6cf0e597cff2ca1850b994536c": "b84fa69769a1517e198661692aeb41a5",
".git/objects/da/28cf12596c0f4933dedbfdbdaba24b4079fdf0": "94c91591d22d4aaa95539401b7d9abce",
".git/objects/b4/9d89e1d1b6f218e3a86aed7cae7f3f85619ca5": "4f3debabd318ae5780d4565fcf453927",
".git/objects/bd/61ef06c5bdac50d5b58f61029a3ed32ab5a08b": "e0e665a7c127fd26a25f421fccae60db",
".git/objects/ab/788d5e61be4ccf64d55ae67eecc9beb41c7af1": "0a38939c0497c5eae4c1bcfd6c2ffbaf",
".git/objects/f3/d5d44c6fbda199b6d1067ab367974d8bcf6789": "0caab835503b1d545dd378d0f490c94f",
".git/objects/c7/372c175433801a4246ca84f5b113b1e4681fcf": "9c01744f6ee5bf345ea07ea80987d123",
".git/objects/c9/6a0653292d873206219968f102161a6d9be516": "2b47c455fb3a2161bc339242973ca083",
".git/objects/fd/23c1a292a0a9fa8996be7f4bafb973dd46a94b": "790caa1ed592450a86f18e757e47f715",
".git/objects/fd/d287316b374ae1f2c8f687c27957f4f0eac3ff": "6c02a257383a031515a124415db710bb",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "d8ab94e15dbe38141547eb643e354874",
".git/objects/e3/de58dc5e903205bc753bbbce15232ea75166d9": "7500fc234f53bf022715b87a667b8621",
".git/objects/c8/392b6587c6736d44c363a53e1b3c029d0faac8": "586f969dac2eae46bac053d7cbd38776",
".git/objects/c1/88b56a9562f9154f02ce0499d611c46d4e7219": "c00a60b2da105edde09c7c2a25ce7b6d",
".git/objects/c1/67674871b9099335628479ed87f41cfef3ac96": "05126bf95da43925c570389d9c2d3007",
".git/objects/c1/a3e6108e3d228f2a2f3423a3f594caa3f92b37": "198e1ced8f434e56be9b2787027328a6",
".git/objects/pack/pack-bfef6c6881d5d426a03e0e41a271cd97a5f5fd72.pack": "3185849d0f0b01a7b9337304b24c2351",
".git/objects/pack/pack-bfef6c6881d5d426a03e0e41a271cd97a5f5fd72.rev": "5e4f8918f9b01af8c565b0d9aa864105",
".git/objects/pack/pack-bfef6c6881d5d426a03e0e41a271cd97a5f5fd72.idx": "bf320b6bf64075d27ffd087bde074858",
".git/objects/7d/387335da90de9a1097be2e07ba2b3d1ee1338b": "bf9de842835e43df1d5b875df6a12b3d",
".git/objects/7d/2fef22a08b0b929f1a905724d12265b6d38a26": "ee1d6753a6cdf8d52f8b5f73b9690d00",
".git/objects/7c/5a7d387a8603f388474d2cd2e120e1fe37e7b1": "1dba1ba424b19457ceb3258749b77fef",
".git/objects/16/55ff49df9bfca9b5aa0077c2f05d12314bf74e": "98c117545b3154b16f44a930f8e21156",
".git/objects/16/fd3330405db3bf707ba99ef8a7ef46ff4776e3": "d5f6ab567098ed7d9c3c7942a7ee80df",
".git/objects/42/4d6602b9f57d9b2b6ee28c3215124841fb0a65": "594c7276bf6cd6aa8ebb06782f81c87f",
".git/objects/45/f0b471bbe4e30af69c15778df9c5ee53221a30": "606ee8347e1175270e51fedd5b855b07",
".git/objects/73/b1d7649e51b0c8d89fdece9e2da8b4b88659a4": "3b267cd69dbeb0dbe188e7029b908a91",
".git/objects/28/66ea38239e6006aa67ab7c662e9e118cd54155": "8b974c1eb0c608f53c86d1b50d15a50d",
".git/objects/8f/c69dcd1b2690e1e1039f570134950b8e097ba6": "f88545f3d60944692faee2065812947d",
".git/objects/8a/3309f448809e4b6968f72d0435f2f027c36048": "5ec96e6b78a3412605ba1066a21e84bd",
".git/objects/7e/58e33ba29685ab1fe6709d1707b841b3fabf68": "d6e9a9ee5408d18787fc7aa67f1e5033",
".git/objects/10/3ddfd88506507567a2f2a34d3efa53ddb9275b": "c63e11744019d0f812a2233759b32217",
".git/objects/19/1e39b622339379f4ac0a0aca37fd8247bcfeac": "f823623571e86b2c45f4f0de16023fe3",
".git/objects/86/8bf8b669e3393142029ec9c8ff07a67ef031b0": "f7ef9db1f34050f6ae8ff69679b68557",
".git/objects/72/b5bcb1c6d34607e0851aa944898badcc86d935": "0f032208e8fc47804d9f6404180b59f2",
".git/objects/72/796ce4489706c9b4a95cbcd2fb7d74d927d746": "95e30e26cdf31b7156a9a4d5b466872a",
".git/objects/44/011987fb0b85ba48e0ce3e7dfd1fdc50bec687": "ce0b659e7beb51eb0ad56e3af1a56899",
".git/objects/44/c320c6e04734ac007510fb4bae1535d3ff6710": "bf3838959e637ed5cc15c81ffbf3fa6d",
".git/objects/2f/6f2fb4258351b676b5a80ba8f89fc4027db1c8": "36a0c398d44e99154d3e721aa5fedd50",
".git/objects/88/7857aa3a2219662eab8aee3cbe9fd48baaf8ad": "b3ec4cdb2c800ad9f42da302f1b73901",
".git/objects/07/c207ef3aadcd934d94547270c192402518238b": "c4b9308069dcca3edbc584c525256275",
".git/objects/07/56b1c2231244afacaae850e746e8ce0c2dd4fc": "8fc05556a752996c7ab40105e312f5c8",
".git/objects/00/7a0496ed454f850d6d9d4e29432d951913082a": "fd8e92d6d3a53d6d6ca703fe203844c6",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "b87052610218bef0a556987fef8b2b61",
".git/objects/36/8259db9ae452b5c930d9c390bff0e3eebe9133": "be40bea9a1e23972cd0df9f441275570",
".git/objects/5c/74b03a85d31f09b51118d40db816a9c9097ac9": "6830f9b6b3b74b7d09e8e8f943d71b70",
".git/objects/5d/f47f959e1143e4d81c00b3805d52958fade2a0": "16d9c77ec48353265d875040f4da5117",
".git/objects/91/43b60e6da2ce545690c77f8d081d7dab1c7d5b": "5625bfaad50fe479266ab2e9399d2ab8",
".git/objects/96/9274f7aa226e829e415114f4e9b0a014df0623": "77c2f9c4b019667730a4953c9fab71c0",
".git/objects/96/328736c29076fd61397af6877c47b0711440a0": "095fe1b3f36e8d77922aa4b21ba9a71d",
".git/objects/96/e5d7ddcda43272fa2b92ba71ef64fa29017d67": "175fb2cb80b3293131f991444e338907",
".git/objects/54/e93563ef6350551833822e82c31043178e81b8": "5344121827423e681748450f4d4baa48",
".git/objects/54/2b48f046390d863022d1b8d6e8fa0333143204": "8f004fe4d4a38e24af7347664bfdd0b9",
".git/objects/53/7230bfd657bf663a32b859dd58128d6b2dd32e": "06dbc0a32f5396412537e50309a3d498",
".git/objects/53/e180b60e6a08fecc5b07c814a859c88079660c": "43157e1f000d7a8716ae549caa0ef97d",
".git/objects/6d/5d65c5c8ff7b5b1f8e18d6cd1ab8be48453aaa": "757374c74d9a3de8ef245721aee73235",
".git/objects/06/f12a179e99884e607a78b353ec012baa8eeb37": "bc916583bfe6c424adec8c18393a160c",
".git/objects/6c/94789637c2710876ad6b4404d73eeb4807486e": "c8b292aa79cb4ef1dfbda6c19098a1a2",
".git/objects/52/8beea533ec17c8aadc8ac6561b49675dc02b6f": "fc0211b22fdf04aedc1a3293c34e6ab0",
".git/objects/52/74cd7a39a52fd6b1f465019c12370e444ce86c": "b9b27de0272045f4783757fb7bb6584c",
".git/objects/55/c76b5a159fed45633bac79cefee38bf9c88d42": "2a7b26b2f1ccbc04a5d7c31919b2cc9a",
".git/objects/bf/9dd97a03bfc12570dddf453966c78755d19f41": "eef12889531576d6dc5a1693bf3d0644",
".git/objects/d4/278758a72ca63235edc7bd6d7c12fefbf26dc9": "825cb27ba2fd3fc5861ddbf577bfb48e",
".git/objects/a7/0f3d64aa90a8210a961a6a8e3877c982cbffb6": "118ec8fe03243836fca92edc59b38a1c",
".git/objects/dd/cf3df59fe5acf7c415abdeb03e6108535fa64a": "401d1949eccf1a82ea98544f00daf2e0",
".git/objects/d5/d986b0ef2d92cb53d4094fa5ce10dac133ebcc": "f504c5998ba9fa91f40cd9d5fd70bf8d",
".git/objects/d5/0cae5b9ab141227b94f7c6ec07af26b07be3e5": "b06216ceb0fd78462e91ec995474f0c3",
".git/objects/d2/d3b09da2665aa1c9fb47e41d78045b398c1629": "199da8fe41e07c1dd9236bf73167de94",
".git/objects/af/48dda43527240634e2924fed55523d0b919451": "3b02ad2799eb3fdc46638e5bca21f9f4",
".git/objects/af/885310ac15b86a43c0c48858274ddf1cac2858": "684f1c9f14a053a2790664fc5f286dde",
".git/objects/af/efb8617acdb4e5fc2b67545a7df94af1d5bd6c": "56bd28a222b29e40b7ad731fd7491150",
".git/objects/b7/0b4651a495afb68ce9b1c1da5368ef82987321": "924617a553b282a3892d77ef8a3726c2",
".git/objects/a8/8f88915a41ee93b2856bc072a07e99e3b7be8c": "d56bee36c0d75354c6638df2dd1734a1",
".git/objects/b9/87d60db58e1ed6139bd89b2d562c49c6056c9a": "78bdd249d47c67c65d698ff9a516d438",
".git/objects/b9/6bc451fb11733d410b4351240714a4f898f4a1": "298eca0e727e3e3cd6f130d8c418878f",
".git/objects/ef/7137dd92b6e48c315f2be14e54865bc5cf88ad": "41cf7c88d279303c1dfb65cfd0dd8043",
".git/objects/ea/2c78d0683fd33f6b5449db89404c5dbc7d2b3c": "479ba4911b9d5647dca5d59fcda99d2f",
".git/objects/ea/5388209cbfda06521fe29fa95ca67882b8064d": "16bba26d52a9aafbf2a6082323ff0e2a",
".git/objects/cc/8ddfa218a2abf86b4b0da21572c848d211f0ba": "74c123d8d0a9939367a1fb62e8dcac3b",
".git/objects/cc/0a4682e67f568a919ccbf28c9db96507197220": "4626a1dbb0d5363401c0deb64b9fd304",
".git/objects/e6/497c240d5030621bb0c5c3cb17cdb5fc6b6f01": "d9c1796df49dc4b6b30ee8900db4f3df",
".git/objects/e6/21b67b8d13f78a7f42e062777b33a6e9bd5153": "cff434e851eaf16d80559196084b8053",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "31658494cc208ad3162a6554c261986b",
".git/objects/f0/535b61e4484c2ca660af75f351336324043584": "d56a7533f0200364db6b14cbd4547c20",
".git/objects/ff/ccf1d2bf96de3db7f567596246e00148e070d3": "70f74a79ec1b9390854f8d83a3c90d11",
".git/objects/c2/dddebdd21d54ce7c9db1be9016fdb0e9d99d78": "dac23f7ed3e9499192a6a16f2ada2d48",
".git/objects/f6/0c8052cf656fa149fdff7ce3fa919a43304be5": "de76ffe0bc53536d9faefa2b572b4eac",
".git/objects/e9/6be0acc5164dde5ce784cab57b09be6f059fa0": "f14e459998fe650e9dc96f4823108900",
".git/objects/f1/3790d835716fe15996ac4867ea12fab5a3a5c5": "9e2e13b5749f7fa385db1f7cbc03be40",
".git/objects/ce/4f6b4f95e91f6f13cd5a70ec30fbfd7f90ede4": "bc12033038f9689bf3413c95a4fb3aa3",
".git/objects/e0/aa4b2bbfc95292e3e6d7ec60be71d53107f53d": "0b2f6cdbfb0dfd8d172e9ee7da43402a",
".git/objects/46/987ec58af091c8402fce1418bbe4e1ce7bd4c8": "befe67d8c8cb9aaafa068424e35e18b7",
".git/objects/46/c2de7bc6a3e9799aac7063a6827c23071dee7d": "cbfe71d7e38c89ffe78bfdbd0067356a",
".git/objects/2c/bb988f9c3b67e84aba381a238d018e9e20e238": "a9494d9f1ed2ce08404bdec7316f3103",
".git/objects/79/1c37a4ea32c72f9a564a18a5bd563958a3ec06": "b0f04744f392a70d250f2cef170588e6",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/83/b42388cb2ce06639e56ce3cf6c5d8ae4b0f2d5": "602191abca81748baf8d1a3882dae84a",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "c271475edf20a5911cfba79292044d99",
".git/objects/48/33fed25db4dbe5b17e36909c25a23a8080c8e0": "2d0cf0df3aadc70da322047be11dc030",
".git/objects/4a/3b66b26c3ed94ef170e51489faa0718dfbcd0f": "bee080e6e74e8e13937a64679a0b775d",
".git/objects/4f/27e93081c4db8099187da76376df327947643f": "9c8e2c3d32c65993786f75ca0343fca7",
".git/objects/8d/0c1bedfc76d96277f95228e9a7c05a828905aa": "af56579812402da1f53cbd8863a66c56",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/1c/2bea90150a00af1a95955a359d2b79fc56e5f7": "434b79611722eaa3d29fc6881e0c3b9d",
".git/objects/1c/a61a22a88c49a2c062e12db875f90057e45f44": "af81c501ce82dfc10ae519bd80e8b256",
".git/objects/82/7c0a4f299f743254112b1ff51a390161c55291": "c1c85d39dac4c8df517bff1be080a637",
".git/objects/40/5b946267f19a24491eb5f910952c4062b18965": "c0bb19ff222c34ab3bcef2deb87e3b29",
".git/objects/40/af281cda6bdae5cd540f3ee6eb9f45cc8ef687": "dead99b20794b3e0e72a295f1308f566",
".git/objects/2b/f4491da06d5dab0731122f551f0c97c19df2af": "cbd3c091e52914bdd29997a74bed414f",
".git/objects/47/a8413c07e7a997ac8931f4252c6e013ef65baf": "cde34798531f8d8ac8e20c0d1f268af2",
".git/objects/8b/44b2bda58f7559a6e8adab447a6fb3ad9ae33f": "3cb33c42827862ca55d1e8441792544c",
".git/objects/8b/34935aa4889cb255608ab3b6f1dad0ed8e5f01": "a18c29e0b2875fedbf3fee69a9b5ea3c",
".git/objects/7f/80d5eb96ea68eb7e7adec3c66f8f90653bcc04": "c8382395e145d83277f7f6c869365fa1",
".git/objects/14/2843da8cdeb4a5e30f22d895ebeaaa1e2a1154": "6efaab2e047c4545b381fc152f0faafb",
".git/objects/8e/5fe5751b3d8bf2e937d1650ac4bb8859da9dea": "d55a6c32ba8333c3439824972cd851af",
".git/objects/22/0e00d6510387324be02270482357014d81af51": "83a23f9fb8b1c5374f33eeb398ef4388",
".git/objects/25/6192a5b34cf157e426460ea475ca6f0a38be34": "58a3c34aecc2fe01e8afc52b090ed334",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38ebc7a8c458a914c80e4d461ec857c4",
".git/logs/refs/heads/main": "38ebc7a8c458a914c80e4d461ec857c4",
".git/logs/refs/remotes/origin/HEAD": "971b992c6119f0ae34893bb55041afc5",
".git/logs/refs/remotes/origin/main": "ce483427ce22431451b9aa2cb0232409",
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
".git/refs/heads/main": "586e2c63ea2edac9dc33dcd2dfed7f5d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "586e2c63ea2edac9dc33dcd2dfed7f5d",
".git/index": "d7b46b1bf9b5c2f32c9f14046af7a937",
".git/packed-refs": "2471d41e16b2ed38c72ac7b6f493c6c1",
".git/COMMIT_EDITMSG": "a80dc2cda8fd5a278f1fce4dfc7beffa",
".git/FETCH_HEAD": "91b83885e73773c7f2b4639cf461f57b",
"assets/AssetManifest.json": "708f4b038e07189ec0ebd3615a5e9a37",
"assets/NOTICES": "f59bf2500ebb53b656e8dba54199a001",
"assets/FontManifest.json": "67e6458b5e19e09d2d9f7879043f3a40",
"assets/AssetManifest.bin.json": "1b2a49d6f273471c45e5e478c94f6773",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "e03b267aaaf58e875458f3116cc32b0f",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.wasm": "1db8e76780b383ec5d5ea55425c0db02",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "94c30ff8f50c145fcf4a70f972fce965",
"assets/packages/pro_image_editor/lib/shared/shaders/pixelate.frag": "19c7cd8e71751bf1865b0784e2e2ac8c",
"assets/packages/pro_image_editor/assets/fonts/ProImageEditorIcons.ttf": "c8390bf80da32c5e7e3ec4e70b395aa1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "084486d1531c83bbe64ae931f42631ae",
"assets/fonts/MaterialIcons-Regular.otf": "2f862d31ced014c275f36c0b42a9c514",
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
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
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
