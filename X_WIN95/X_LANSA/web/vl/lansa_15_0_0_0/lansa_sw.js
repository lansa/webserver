var RT="lansa_15_0_0_0",TS="200128024213",VL="vl",APP="app",NWF="network-first",CRT=VL+"-"+TS;
self.addEventListener("activate",function(a){a.waitUntil(caches.keys().then(function(b){for(var a=0;a<b.length;a++){var c=b[a];if(c.substr(0,3)===VL+"-"&&c!==CRT)return Promise.all(b.map(function(a){return caches.delete(a)}))}return Promise.all(b.map(function(a){var c=a.split("-");if(c[0]==APP)for(var e=c[1],c=c[2],f=0;f<b.length;f++){var d=b[f];if(a!==d&&(d=d.split("-"),d[0]==APP&&d[1]==e&&(d=d[2],parseInt(c,10)<parseInt(d,10))))return caches.delete(a)}}))}))});
self.addEventListener("fetch",function(a){if("GET"===a.request.method&&a.request.url.startsWith(self.location.origin)){var b=new URL(a.request.url);if(null===b.searchParams.get("lcb")&&"yes"!==b.searchParams.get("developer")){var e=!1,c=NWF;b.pathname.includes("/"+RT+"/")?c=CRT:null!==b.searchParams.get("lcid")?c=APP+"-"+b.searchParams.get("lcid"):e=navigator.onLine;e?a.respondWith(fetch(a.request).then(function(b){return store(a,b,c)}).catch(function(){return caches.match(a.request)})):a.respondWith(caches.match(a.request).then(function(b){return void 0!==
b?b:fetch(a.request).then(function(b){return store(a,b,c)})}))}}});function store(a,b,e){if(b.ok){var c=b.clone();caches.open(e).then(function(b){b.put(a.request,c)})}return b};
