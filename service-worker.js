"use strict";var precacheConfig=[["/carpicker/index.html","0c729d4b013f2d4e9a5b5cc636ceaf7f"],["/carpicker/static/css/main.82e5d1dc.css","b963b63a8749b8d8694147c716844b10"],["/carpicker/static/js/main.87d61fb5.js","ea8b1a6f007f3fb109f153d35e203267"],["/carpicker/static/media/classic.0f3afcc8.jpeg","0f3afcc8f8724be72d2d35e93d0734d6"],["/carpicker/static/media/coupe.8ad036a0.jpeg","8ad036a0867e0976184701e8fb26649d"],["/carpicker/static/media/exotic.5b378f98.jpeg","5b378f98daff7315a3bbe0ac2d2a7690"],["/carpicker/static/media/hatchback.727b9e04.jpeg","727b9e044970484da711f2a04cd754b8"],["/carpicker/static/media/howto_1.27132e6f.png","27132e6fec09c79e87151ddca9074826"],["/carpicker/static/media/howto_2.694d68d3.png","694d68d37f5c335489d3851d9f3f815a"],["/carpicker/static/media/howto_4.09ea71f7.png","09ea71f7def2b34a4bad3fff434f65dc"],["/carpicker/static/media/luxury.02369230.jpeg","023692308904845156426a2b29370023"],["/carpicker/static/media/motorcycle.30a97479.jpeg","30a97479ba2ce27ae035a29fee86e638"],["/carpicker/static/media/pickup.90f9d18c.jpeg","90f9d18c69a6f43fd0bca3a7def7acc1"],["/carpicker/static/media/sedan.715f4c32.jpeg","715f4c3253343e1eac558538894dc892"],["/carpicker/static/media/suv.1783b715.jpeg","1783b71502497ac435bec932a651b22c"],["/carpicker/static/media/van.5a3fa905.jpeg","5a3fa90520c89c11d7ebf11f6a914d64"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var c="/carpicker/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});