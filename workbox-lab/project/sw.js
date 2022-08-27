/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "build/images/articles/buildings.jpg",
    "revision": "71dceaabcd85c771e9fa5d9fd55611f3"
  },
  {
    "url": "build/images/articles/doctors.jpg",
    "revision": "488ee4eabb8e08080eb544f2b7950235"
  },
  {
    "url": "build/images/articles/food.jpg",
    "revision": "5d77777f05adeb3be0912d5804819ea0"
  },
  {
    "url": "build/images/articles/plane.jpg",
    "revision": "5deadedc1a7ab71b00877fbd50621c33"
  },
  {
    "url": "build/images/articles/solar.jpg",
    "revision": "de07a1e6e7e7bd64eedbc0a04b0e9aae"
  },
  {
    "url": "build/images/articles/space.jpg",
    "revision": "e5133211f752c4fe82bf7951cc3093c7"
  },
  {
    "url": "build/images/articles/weather.jpg",
    "revision": "bfddd29233472e231453b16c3a80c125"
  },
  {
    "url": "build/images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "build/images/icon/icon.svg",
    "revision": "d582b402cdafcc4a3934fba3986d1be7"
  },
  {
    "url": "build/index.html",
    "revision": "16dadfd966fd31a3013b34e6ac502d08"
  },
  {
    "url": "build/js/animation.js",
    "revision": "3f8fd475afa44c10b3107178a83bd9ae"
  },
  {
    "url": "build/pages/404.html",
    "revision": "2f404c2bc9d919f3dcad5c8e570bc1bf"
  },
  {
    "url": "build/pages/article1.html",
    "revision": "1447755b4e18a00f17bb81683ae9de6f"
  },
  {
    "url": "build/pages/article2.html",
    "revision": "a09feec9c666065908b85f5d9e629347"
  },
  {
    "url": "build/pages/article3.html",
    "revision": "d46a4b8cb220727746e0e416f07423c3"
  },
  {
    "url": "build/pages/article4.html",
    "revision": "e17986e0e6f251f38ec8a1aec01b075d"
  },
  {
    "url": "build/pages/offline.html",
    "revision": "4a9a5105e6c974c6deec1c8893d00961"
  },
  {
    "url": "build/pages/post1.html",
    "revision": "548d9fc2d796445e3b39adc7440eeb76"
  },
  {
    "url": "build/pages/post2.html",
    "revision": "ee4fcc847fe815cf122d3546e3a6201d"
  },
  {
    "url": "build/pages/post3.html",
    "revision": "c1555cf6dcaef5f8253cdd1981ec7c20"
  },
  {
    "url": "build/style/main.css",
    "revision": "c7a02441b4914ffdc39eb2eb55148adc"
  },
  {
    "url": "package-lock.json",
    "revision": "ea784cd1510401d6db08a869d5352aec"
  },
  {
    "url": "package.json",
    "revision": "9e9e7442b06d78c8335127f94e815eab"
  },
  {
    "url": "server.js",
    "revision": "0f96eff60b23e173ef41d024ee69147a"
  },
  {
    "url": "src/images/articles/buildings.jpg",
    "revision": "71dceaabcd85c771e9fa5d9fd55611f3"
  },
  {
    "url": "src/images/articles/doctors.jpg",
    "revision": "488ee4eabb8e08080eb544f2b7950235"
  },
  {
    "url": "src/images/articles/food.jpg",
    "revision": "5d77777f05adeb3be0912d5804819ea0"
  },
  {
    "url": "src/images/articles/plane.jpg",
    "revision": "5deadedc1a7ab71b00877fbd50621c33"
  },
  {
    "url": "src/images/articles/solar.jpg",
    "revision": "de07a1e6e7e7bd64eedbc0a04b0e9aae"
  },
  {
    "url": "src/images/articles/space.jpg",
    "revision": "e5133211f752c4fe82bf7951cc3093c7"
  },
  {
    "url": "src/images/articles/weather.jpg",
    "revision": "bfddd29233472e231453b16c3a80c125"
  },
  {
    "url": "src/images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "src/images/icon/icon.svg",
    "revision": "d582b402cdafcc4a3934fba3986d1be7"
  },
  {
    "url": "src/index.html",
    "revision": "16dadfd966fd31a3013b34e6ac502d08"
  },
  {
    "url": "src/js/animation.js",
    "revision": "3f8fd475afa44c10b3107178a83bd9ae"
  },
  {
    "url": "src/pages/404.html",
    "revision": "2f404c2bc9d919f3dcad5c8e570bc1bf"
  },
  {
    "url": "src/pages/article1.html",
    "revision": "1447755b4e18a00f17bb81683ae9de6f"
  },
  {
    "url": "src/pages/article2.html",
    "revision": "a09feec9c666065908b85f5d9e629347"
  },
  {
    "url": "src/pages/article3.html",
    "revision": "d46a4b8cb220727746e0e416f07423c3"
  },
  {
    "url": "src/pages/article4.html",
    "revision": "e17986e0e6f251f38ec8a1aec01b075d"
  },
  {
    "url": "src/pages/offline.html",
    "revision": "4a9a5105e6c974c6deec1c8893d00961"
  },
  {
    "url": "src/pages/post1.html",
    "revision": "548d9fc2d796445e3b39adc7440eeb76"
  },
  {
    "url": "src/pages/post2.html",
    "revision": "ee4fcc847fe815cf122d3546e3a6201d"
  },
  {
    "url": "src/pages/post3.html",
    "revision": "c1555cf6dcaef5f8253cdd1981ec7c20"
  },
  {
    "url": "src/style/main.css",
    "revision": "c7a02441b4914ffdc39eb2eb55148adc"
  }
]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

