if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-e4f1ac2f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"511.bundle.js",revision:"6c60e68da68b57259bad47c3194ad871"},{url:"511.bundle.js.LICENSE.txt",revision:"51ce75aaaadd0bf01ca2cdb6c3ad5e6c"},{url:"en/index.html",revision:"03da290af1afca703ed7a82c963dc165"},{url:"en/manifest.json",revision:"9c2fba642fff247e04697110fcc58ff9"},{url:"en/update-history/index.html",revision:"028582ee296173d03964e14e3a441a94"},{url:"index.html",revision:"97623352ef3b2b2572bfa2108aeabdfe"},{url:"ko.bundle.js",revision:"895cc97073e46ab06a9b814472473f9e"},{url:"ko/index.html",revision:"f4a7051f2189a96df06be4644afefaf2"},{url:"ko/manifest.json",revision:"20e0d1683d218b21f80574bc139aeb81"},{url:"ko/update-history/index.html",revision:"2a132e40b6f7c78585e5ac03658d8125"},{url:"main.bundle.js",revision:"50784a6b579bfc28a7ee2eedbc3595f8"},{url:"resources/assets/images/IDI_PIKAICON-0.png",revision:"818a5aabfd92f99c7d1f98b8361d3c7f"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled.png",revision:"f3f21ca643c4ff5e692b8de485ae8004"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_192.png",revision:"dac21c95f585cb036ad61246d3d722b2"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_512.png",revision:"6cbcbdfef391a347ba1643574bd7ed1b"},{url:"resources/assets/images/controls.png",revision:"5275b91d01abe46c45f43fe59c95d170"},{url:"resources/assets/images/controls_ko.png",revision:"c5c52fd2313b63d024ad06060609c84f"},{url:"resources/assets/images/screenshot.png",revision:"3867bffd4bef3786694f9ebeb77d4d1d"},{url:"resources/assets/images/sprite_sheet.json",revision:"fbf5be6abf4715cbe6357d01c5d178ff"},{url:"resources/assets/images/sprite_sheet.png",revision:"e2f9c1aec43ccf5f4dcc03f24b3e13da"},{url:"resources/assets/sounds/WAVE140_1.wav",revision:"a31e486f9bf2dfa2548a4208d78edc1f"},{url:"resources/assets/sounds/WAVE141_1.wav",revision:"e6b661515829712630bbead41d86ee8d"},{url:"resources/assets/sounds/WAVE142_1.wav",revision:"918c03522e79304ad8bb8891c35f58a3"},{url:"resources/assets/sounds/WAVE143_1.wav",revision:"eb2ac1cb1900cd970cdd86be87ebea11"},{url:"resources/assets/sounds/WAVE144_1.wav",revision:"6b16d233bc68aea2a7d071eee85da431"},{url:"resources/assets/sounds/WAVE145_1.wav",revision:"85da47de3575fbedaef71188fe4fc05f"},{url:"resources/assets/sounds/WAVE146_1.wav",revision:"9976daa90c7fd3f7008cf30e7cda8825"},{url:"resources/assets/sounds/bgm.mp3",revision:"029ae684624b50612c09a255264b2d93"},{url:"resources/style.css",revision:"b5226ce96fb9b7f65831135114e05d69"},{url:"runtime.bundle.js",revision:"b377d7972927d91f72e1a52d0cb2717e"},{url:"zh/index.html",revision:"affa05ec8e2c852001f92b5f1d4e9429"},{url:"zh/manifest.json",revision:"bd6076c6691c90bfda46149789420061"},{url:"zh/update-history/index.html",revision:"33a6534310b8b066a16fff1883ec7e6b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
