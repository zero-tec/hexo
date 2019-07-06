/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CC版物理数学/1.jpg","635fec7d52121602a47d8a62b84a99ff"],["/CC版物理数学/10.jpg","740e4e576057593b8277b8073693d225"],["/CC版物理数学/11.jpg","494933f0daa99cfebe771e4b8f1ebb45"],["/CC版物理数学/12.jpg","3119688e3a57e410ba40fe7af830a031"],["/CC版物理数学/13.jpg","509277e27867927410f10774954aed2c"],["/CC版物理数学/14.jpg","a3e2501902ceec22be8bb37cce6c2532"],["/CC版物理数学/15.jpg","e257986f3ccc27f8bf0d70215a8e43d6"],["/CC版物理数学/16.jpg","468e98d6c2e7f8e30f475b5fd310b6b3"],["/CC版物理数学/17.jpg","4e28171c6e568fe723247e7f290900b2"],["/CC版物理数学/18.jpg","79f1fc9959306097e1c87efb7c66f21b"],["/CC版物理数学/19.jpg","84cd4ed7f65eac93a7409c08eaa0783d"],["/CC版物理数学/2.jpg","88c3576ab0c3629856ef7cca5f16ee6e"],["/CC版物理数学/20.jpg","403536fbdb5778b1345616a597fcedfa"],["/CC版物理数学/21.jpg","9e99aa4a9ec797a7132e3fc7618cc518"],["/CC版物理数学/22.jpg","054862f19245a9d833c170e84665879a"],["/CC版物理数学/23.jpg","01ac008f9d6c500b5034af37a93f0d09"],["/CC版物理数学/24.jpg","404a64a05f55c62092a613ff7239d4ab"],["/CC版物理数学/25.jpg","824b7820154da2ba39cc13b767b29a28"],["/CC版物理数学/26.jpg","ab5c2e4840a7f72fe0c7db92ea020c23"],["/CC版物理数学/27.jpg","861fcd2ab539104b084dabeca32db509"],["/CC版物理数学/28.jpg","824b7820154da2ba39cc13b767b29a28"],["/CC版物理数学/29.jpg","7e3cf25eb80e53963f0dc823f0c16455"],["/CC版物理数学/3.jpg","f0e52120d0bef08f6c74d448fc525c1f"],["/CC版物理数学/30.jpg","c5b17050ef2ce163918f112afdc4b97a"],["/CC版物理数学/31.jpg","0af1b9c3e3e6298c34187ccdcd7313ab"],["/CC版物理数学/32.jpg","9b0513f0a7d7fb30c37c7790950c51e6"],["/CC版物理数学/33.jpg","23ab1893353fe69c3e96cd5d0ee1efdb"],["/CC版物理数学/34.jpg","a3e2501902ceec22be8bb37cce6c2532"],["/CC版物理数学/35.jpg","e89b25ef56aa1228750462332b3f8ea0"],["/CC版物理数学/36.jpg","5dd8e6030df044cfec81cff6be7bb9d4"],["/CC版物理数学/37.jpg","132ab3f99efa5dcc676cd02a592c5ed9"],["/CC版物理数学/38.jpg","f0e52120d0bef08f6c74d448fc525c1f"],["/CC版物理数学/39.jpg","4a0cac2b722cdb6b8e834e3014c23590"],["/CC版物理数学/4.jpg","29afdf5bcbf71e154f446fa05b3f8408"],["/CC版物理数学/40.jpg","43775e3406499915b39efec8a10fb89a"],["/CC版物理数学/41.jpg","0115c99969953c3da8933e2ee69b9f7d"],["/CC版物理数学/42.jpg","3119688e3a57e410ba40fe7af830a031"],["/CC版物理数学/43.jpg","e1cb038b44dc9df2237189b25de2cd2d"],["/CC版物理数学/44.jpg","26da88338f3a530d1080b07806cce8a5"],["/CC版物理数学/45.jpg","092e3ee4a4eb8295dd686d31cf4a0810"],["/CC版物理数学/46.jpg","618b1628ff7827b3445910b7264428c0"],["/CC版物理数学/47.jpg","ff60f98680ce9605bbcf35feeec6630d"],["/CC版物理数学/48.jpg","ae2201c0c9e4fa17df51198e06d9dc1b"],["/CC版物理数学/49.jpg","03e9becd14e18e07b67b1b856f968ff3"],["/CC版物理数学/5.jpg","c6343ceec2f130ff4ca4ab66934c7fe3"],["/CC版物理数学/50.jpg","faec2a32a52cfb8ec2ccc00661317b25"],["/CC版物理数学/51.jpg","403536fbdb5778b1345616a597fcedfa"],["/CC版物理数学/52.jpg","e410b16e70baa6a9ac0e53c881397873"],["/CC版物理数学/53.jpg","231652ce3e531921396ded4ec859ee03"],["/CC版物理数学/54.jpg","70abb7ccf37f395c64f6c19878c1dca0"],["/CC版物理数学/55.jpg","b1d4c224914ac61cb3cd48baa380186b"],["/CC版物理数学/56.jpg","568215cd25b018e81870a52858e1020c"],["/CC版物理数学/57.jpg","d8ac1d9a20ee31edd03916f6bd6114ed"],["/CC版物理数学/58.jpg","e8ddb4958fabd7b6936c3722af95d26f"],["/CC版物理数学/59.jpg","8c960520381d45beaed5db96c93b0fc4"],["/CC版物理数学/6.jpg","629f35d67cd59c9500242f64ccac0550"],["/CC版物理数学/60.jpg","aaba4206ea1af369bb7f918012c322a2"],["/CC版物理数学/61.jpg","242a48b4641ca2115de6cb3a77ceef35"],["/CC版物理数学/62.jpg","43775e3406499915b39efec8a10fb89a"],["/CC版物理数学/63.jpg","7fdc7890fc88f667c6017e3d85a9ca78"],["/CC版物理数学/64.jpg","84cd4ed7f65eac93a7409c08eaa0783d"],["/CC版物理数学/65.jpg","b59c497bd2346bfa2c94957785cdd932"],["/CC版物理数学/66.jpg","17748d55c6f8f4d55ee87ca7f5082fff"],["/CC版物理数学/67.jpg","84d8caa9b4fb171b4dbac4590c949472"],["/CC版物理数学/68.jpg","0d608d48ac69e16e8cb1e9b37169247b"],["/CC版物理数学/69.jpg","37c7353991aaac24a383ebdd8ebb0894"],["/CC版物理数学/7.jpg","de38574feb87b385a619e3e9ab0d6307"],["/CC版物理数学/70.jpg","d80a57a30ae1f6859185e1bf9e2d32f1"],["/CC版物理数学/71.jpg","aaba4206ea1af369bb7f918012c322a2"],["/CC版物理数学/72.jpg","ee37f605f2d72efe5c130062c7044ec9"],["/CC版物理数学/73.jpg","089d8b40092bf15cef67798cb0b2e44c"],["/CC版物理数学/74.jpg","cc5bcb17780ad694037b0ebba74fb6fe"],["/CC版物理数学/75.jpg","43e9be43a5847454b3bb3f1e741ee8d6"],["/CC版物理数学/76.jpg","9779eb4b80cfa944fb965cf2c1c21908"],["/CC版物理数学/77.jpg","bac4641a6994514a24434c873afe894d"],["/CC版物理数学/78.jpg","e07f466e1589d6d87b605d74430510f0"],["/CC版物理数学/79.jpg","03e9becd14e18e07b67b1b856f968ff3"],["/CC版物理数学/8.jpg","0d608d48ac69e16e8cb1e9b37169247b"],["/CC版物理数学/80.jpg","3f864cc217f91fc4d2482196caff0f4f"],["/CC版物理数学/81.jpg","ad4947a89e7d22d72e86cb9aa199e1aa"],["/CC版物理数学/82.jpg","494933f0daa99cfebe771e4b8f1ebb45"],["/CC版物理数学/83.jpg","c5b17050ef2ce163918f112afdc4b97a"],["/CC版物理数学/84.jpg","0df8f110ede4047c070eaa60e936ba75"],["/CC版物理数学/85.jpg","6633033ab7677348bb0cd641c25cb556"],["/CC版物理数学/86.jpg","79282a89e417334de622362d71380d7b"],["/CC版物理数学/9.jpg","9e0793b1742f330a011e63d23b8f3171"],["/CC版物理数学/index.html","6643ab5d81b2b57528dc5cdc4ec36126"],["/archives/2019/07/index.html","bc67e62db44d27d8b03493e905aeefbd"],["/archives/2019/07/page/2/index.html","6962071a22f341e64c2be93213fabf60"],["/archives/2019/index.html","dd0209503d67877f7794218632a09279"],["/archives/2019/page/2/index.html","0bf14e47123eaebfb788290644c56e43"],["/archives/index.html","b338ca94ae534a43e8f0799e811b3f4e"],["/archives/page/2/index.html","264b24a17af2d4e4a51f65a19f2d71f9"],["/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["/categories/index.html","18f79d02f63d295a7b1a5ffe9dd1470f"],["/categories/英语/index.html","4faf661507072c3867b8da142a8ff73e"],["/categories/语文/index.html","40171f48170eb0a76fe2cd4570618308"],["/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/css/main.css","9d73d38acb529936ea50857cf83da585"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c513fa6ee27981fda7f4240209154322"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","d1fd50c48cbbf78726e959470bfbc642"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ede48666d8f9cac4246cd92c27834ea2"],["/sw-register.js","5938843130cd5453d4ecc91dc8d9fdef"],["/tags/index.html","909b75fa251a742c35e6a633fa153b73"],["/tags/使用指南/index.html","ff66512ccd23692a704166567bf59469"],["/tags/英语/index.html","3c5bcedd14e8a7c541c1672bc66688a0"],["/tags/语文/index.html","43ac0e670dafb44ec61f63ebcd182990"],["/化学/index.html","48dc087fada5a81d21a4c62b4e935273"],["/历史/index.html","ec6f4c5acd855a8f847f2051cb48393d"],["/地理/index.html","6081b927f264c1b7a95991bcda4f1cd4"],["/政治/index.html","00501c5237a053703b187a35f187e568"],["/数学/index.html","7be5d68310111670e83939382373379e"],["/欢迎/index.html","324a097e0b440c49901ada2f4d851e3d"],["/欢迎/smile.jpg","41e37fb4a6f86b86dac08ecd9f982046"],["/物理/index.html","b9bfb7525e5d8780dc22f1e55584dfc3"],["/生物/index.html","a6a6ca15307d3f99870944f97dd20e1d"],["/英语/21L.jpg","de1e02571d11e82c06081a12bab4f0c2"],["/英语/21R.jpg","b1e88a820e0f2dd35de556c92bbe8a5b"],["/英语/22.jpg","ef275eb863a7a4ad84dc5803872db5f1"],["/英语/23L.jpg","a7861eda62d78c184176c8d41f918902"],["/英语/23R.jpg","6ca39551d6d3af4123a02473e4142e9f"],["/英语/24.jpg","d8f01c7da799e24dc9af61b7581d4337"],["/英语/index.html","e9f9d48714ee33ead3d4c011be11c192"],["/语文/index.html","a195531601a6cd87b2d24c8cf051bcfa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
