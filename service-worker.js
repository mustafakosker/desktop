/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "394963d126de0d980ed49f9313ee48e1"
  },
  {
    "url": "assets/css/0.styles.beb15823.css",
    "revision": "bec6f531c14a04b0190b09162f4ec835"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fc345f48.js",
    "revision": "329a1c0bbce18b9215402b7c12fdb1c7"
  },
  {
    "url": "assets/js/11.b1eb3efe.js",
    "revision": "aff987386c6e6e8be2af36b8f05b94d6"
  },
  {
    "url": "assets/js/12.1c03dc5b.js",
    "revision": "c9f1d0f1e8a26edfb1b24be6f0095a6b"
  },
  {
    "url": "assets/js/13.a5b026c4.js",
    "revision": "84e6f9b8bb8341e5560ecaeda39076ea"
  },
  {
    "url": "assets/js/14.4882253c.js",
    "revision": "9429be50336ef3d3aae3be77b43a67e5"
  },
  {
    "url": "assets/js/15.b1be2d4b.js",
    "revision": "8a6c717624a7117ef295a505af2a0fed"
  },
  {
    "url": "assets/js/16.13b19297.js",
    "revision": "3d040f898b525de706d0a68cf8133e86"
  },
  {
    "url": "assets/js/17.96fd03b8.js",
    "revision": "166ce0b54e9058877dc0ce1a4ce4e61c"
  },
  {
    "url": "assets/js/18.3e7d1193.js",
    "revision": "333a20ecd24fc34272280490e0ea46d7"
  },
  {
    "url": "assets/js/19.e351393c.js",
    "revision": "b418ca729eaae479501665ae9bb939b2"
  },
  {
    "url": "assets/js/2.12a03c4e.js",
    "revision": "ceb9fa3cee7072f793d199fddaaa6b24"
  },
  {
    "url": "assets/js/20.1c5a285a.js",
    "revision": "b3c3d1dbc2e192bc36b7fdb7580f92e7"
  },
  {
    "url": "assets/js/21.589ed60a.js",
    "revision": "487a9a15719238b249e65895f1592544"
  },
  {
    "url": "assets/js/22.660e50ac.js",
    "revision": "9954d95174fd07cb5ec0c24986071403"
  },
  {
    "url": "assets/js/23.3a13da42.js",
    "revision": "163ac2cfdcf878f8e7ed370de3780d79"
  },
  {
    "url": "assets/js/24.d6dcbb4e.js",
    "revision": "b01b454eaf8c88d99865389afc0bcfbe"
  },
  {
    "url": "assets/js/25.01f445e2.js",
    "revision": "c3314c59850d86949cf0683093793e55"
  },
  {
    "url": "assets/js/26.d2246ac6.js",
    "revision": "49fe2cb2596cd48acf7fff9665ee90a1"
  },
  {
    "url": "assets/js/27.1880a850.js",
    "revision": "d91b623fe658034fb34a91a738f998c2"
  },
  {
    "url": "assets/js/28.79343574.js",
    "revision": "95f3a7846069a661dd7dca727a480b70"
  },
  {
    "url": "assets/js/29.37cf5295.js",
    "revision": "b75d70cf180f796d58fa8045a29b973d"
  },
  {
    "url": "assets/js/3.d25ec344.js",
    "revision": "d681a277ffdc9ee5121226bad1cf6342"
  },
  {
    "url": "assets/js/30.152aa64b.js",
    "revision": "72cdf64d5f265e29174cc1e09c6ee145"
  },
  {
    "url": "assets/js/31.67dcbdce.js",
    "revision": "ceb024d24c67fba040a2fff8d13d55eb"
  },
  {
    "url": "assets/js/32.17b07ca2.js",
    "revision": "f1840770a458929bb8a6aaaf46b3e0aa"
  },
  {
    "url": "assets/js/33.e8113733.js",
    "revision": "5d9f9125b3fc031e77054bb3defbe4ae"
  },
  {
    "url": "assets/js/34.86f42dc3.js",
    "revision": "307115daa52cea8b7bf61322db33f798"
  },
  {
    "url": "assets/js/35.081ec756.js",
    "revision": "96468d87ba174bd5993a26cd1ac755fb"
  },
  {
    "url": "assets/js/36.f1419481.js",
    "revision": "6c621fa92750e726586c265ee45f12f8"
  },
  {
    "url": "assets/js/37.1d056e6a.js",
    "revision": "a247c0bd7855247f936356dc8a4c4c27"
  },
  {
    "url": "assets/js/38.ec662a63.js",
    "revision": "b6bc679e6054f4cef68226371ff2b283"
  },
  {
    "url": "assets/js/39.6ab149d3.js",
    "revision": "058d67c9e810cf6174b75c9fa659a6d0"
  },
  {
    "url": "assets/js/4.a95cd250.js",
    "revision": "b3d95744250d69dfa85484c6251fbd64"
  },
  {
    "url": "assets/js/40.e7b5cfa4.js",
    "revision": "503212b2b544749c6e0bdcc71e40073f"
  },
  {
    "url": "assets/js/41.3619074c.js",
    "revision": "0aee07c91625b884692c0428193038af"
  },
  {
    "url": "assets/js/42.708577d3.js",
    "revision": "344d94a9cae4f116998ca3529ebe182d"
  },
  {
    "url": "assets/js/43.48c71501.js",
    "revision": "2f3e0bac885022936515f42c35bc5d23"
  },
  {
    "url": "assets/js/44.544c0f6b.js",
    "revision": "cc80fd395abd439e66f43791a0d4e663"
  },
  {
    "url": "assets/js/45.726647fc.js",
    "revision": "9866d811c4c170f5d1b0cf3ca17c42ea"
  },
  {
    "url": "assets/js/46.5cc52012.js",
    "revision": "15515436ed5c07953ec72b7737b015d9"
  },
  {
    "url": "assets/js/47.8112ea32.js",
    "revision": "e38de4777dc4684824b2d40ff026b667"
  },
  {
    "url": "assets/js/48.de151aa5.js",
    "revision": "fd4b913074ff6b657bdc35a008fcf38d"
  },
  {
    "url": "assets/js/5.4fc038fb.js",
    "revision": "8065501530e934e7ad7e87417d2d1209"
  },
  {
    "url": "assets/js/6.28ab6acb.js",
    "revision": "705a2849fa449e729e491d1200fd0fd8"
  },
  {
    "url": "assets/js/7.900c5bc2.js",
    "revision": "2e15f5023a8a83d5f35b55246cc937d8"
  },
  {
    "url": "assets/js/8.86f150a2.js",
    "revision": "c9ad62d072b6d92237c74efc1d01c6d2"
  },
  {
    "url": "assets/js/9.b64ba6b5.js",
    "revision": "7ed44d2cd541e3bf149f9ff9d99e3d56"
  },
  {
    "url": "assets/js/app.cd91ea39.js",
    "revision": "44d5b37103ed8eb98c22ab67a39ee166"
  },
  {
    "url": "cli/clear/index.html",
    "revision": "c64b6a8221ba724a0dd6b4c04245631c"
  },
  {
    "url": "cli/describe/index.html",
    "revision": "676fc75e0a79b90ab0607651b26a1fe2"
  },
  {
    "url": "cli/devtools/index.html",
    "revision": "8cf11c534a942f05e43a468042b50ea3"
  },
  {
    "url": "cli/hide/index.html",
    "revision": "a26669158650b29b095c4f2ba782028c"
  },
  {
    "url": "cli/index.html",
    "revision": "2ec49fdc47bacf516f430a393d51aaef"
  },
  {
    "url": "cli/info/index.html",
    "revision": "7273ebe81226a299491f1d2f20eddf38"
  },
  {
    "url": "cli/init/index.html",
    "revision": "cd5d767e0e540be7ddfe1d249207de6f"
  },
  {
    "url": "cli/kill/index.html",
    "revision": "73f2da48323e198d238f4f08e8703460"
  },
  {
    "url": "cli/logs/index.html",
    "revision": "8b4b83ac087ff36db6fbfdb6776c61b1"
  },
  {
    "url": "cli/ps/index.html",
    "revision": "0ba68896b64b4933b905cdeb698ec83a"
  },
  {
    "url": "cli/restart/index.html",
    "revision": "974fbaa1ab84ef3a7d822ba9832a5de4"
  },
  {
    "url": "cli/show/index.html",
    "revision": "6b54b4369335b35c45b18beae4461c6e"
  },
  {
    "url": "cli/shutdown/index.html",
    "revision": "8322c16a0d6b40c8f090962d22eb394e"
  },
  {
    "url": "cli/start/index.html",
    "revision": "d3dac25dfce54a348c20d157d84db69b"
  },
  {
    "url": "cli/stop/index.html",
    "revision": "42024209b359578aa92c3ca834077c07"
  },
  {
    "url": "cli/version/index.html",
    "revision": "07a560d3903c672ac0078aaaa4a9eef1"
  },
  {
    "url": "config/application/index.html",
    "revision": "658fc2b09732c4ebf3542e04cb47605a"
  },
  {
    "url": "config/applicationSecurityPolicy/index.html",
    "revision": "aab88dda89dbb5ff02b71fe1ef647c91"
  },
  {
    "url": "config/external/index.html",
    "revision": "c045b14f6abe09ebd7a35e7f5600aa41"
  },
  {
    "url": "config/externalSecurityPolicy/index.html",
    "revision": "3eaf65da578c4e27ece8167138c8a2b0"
  },
  {
    "url": "config/index.html",
    "revision": "99c20924110d671479747f749ec8816f"
  },
  {
    "url": "config/metadata/index.html",
    "revision": "68c45ad565f4c0e1c217f0d92602e08d"
  },
  {
    "url": "config/service/index.html",
    "revision": "2406ed053b41c5338e5b36801a6d0415"
  },
  {
    "url": "config/serviceSecurityPolicy/index.html",
    "revision": "df558ec85b2f2f8e64c94a0e8370aed7"
  },
  {
    "url": "config/session/index.html",
    "revision": "6d0e6344a77b07d25168e9f2439ea622"
  },
  {
    "url": "config/storage/index.html",
    "revision": "7dc2346b571177a40797c63f969664a4"
  },
  {
    "url": "config/tray/index.html",
    "revision": "c79dd162797ddeae711e22b19fd1e5ba"
  },
  {
    "url": "config/updatePolicy/index.html",
    "revision": "197b707d37acad2870c86cc61f326e30"
  },
  {
    "url": "favicon-16.png",
    "revision": "96549c584a8e0fe1736caedac20ba4ce"
  },
  {
    "url": "favicon-32.png",
    "revision": "fd6f990095840d43ddde90a3e06ddd12"
  },
  {
    "url": "guide/index.html",
    "revision": "3a9d9ad85b30d62d7f38ebc15ed9deff"
  },
  {
    "url": "icon-256.png",
    "revision": "630a99247bd8c4bff944a41035c5f1b5"
  },
  {
    "url": "icon-512.png",
    "revision": "079bf353ee7c2456844800e3ff607e5f"
  },
  {
    "url": "index.html",
    "revision": "8cb25d9851e8ad7d98545c30cd572b48"
  },
  {
    "url": "sdk/desktop/index.html",
    "revision": "2f143c05a398ca39f7bfe76a902d33d3"
  },
  {
    "url": "sdk/globalshortcut/index.html",
    "revision": "71ab28cbdf8883c6274ad7e9f7de5537"
  },
  {
    "url": "sdk/index.html",
    "revision": "7636b017573fb2b71bbb12cc14ce7c9f"
  },
  {
    "url": "sdk/launcher/index.html",
    "revision": "659fb6ce3e2721fd3a1ed5fbbdcf46a9"
  },
  {
    "url": "sdk/logger/index.html",
    "revision": "13b4022914f6195901549954615d0f75"
  },
  {
    "url": "sdk/registry/index.html",
    "revision": "3c08b0f657b68f79530d8357c941c16e"
  },
  {
    "url": "sdk/router/index.html",
    "revision": "89f3246057cc5d0ab45b48ef73414fbc"
  },
  {
    "url": "sdk/screen/index.html",
    "revision": "4d0bdcaadc5baeefbc0c9ef7b1171e11"
  },
  {
    "url": "sdk/window/index.html",
    "revision": "406aa3ece24eae7764a4f2b76ef22c25"
  },
  {
    "url": "support/index.html",
    "revision": "e7bd2dab21dee679bb0d0d39dd9750a1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
