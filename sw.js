const C='cubemind-v2';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./icon.svg'])));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||/api\.(anthropic|groq)\.com/.test(r.url))return;
const save=res=>{if(res&&res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res};
if(r.mode==='navigate'){e.respondWith(fetch(r).then(save).catch(()=>caches.match(r).then(h=>h||caches.match('./index.html'))));return}
e.respondWith(caches.match(r).then(h=>h||fetch(r).then(save).catch(()=>h)))});
