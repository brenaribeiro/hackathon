const cachename = 'Smiles benefícios'
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cachename) .then(function (cache){
    cache.addAll([
        './',
        './index.html',
        './manifest.json', 
        './index.js'
    ])
})
    )
    return self.skipWaiting()  
})
self.addEventListener ('activate', e =>{
    self.clients.clain()
})

self.addEventListener('fetch' , async e => {

    const req = e.resquest
const url = new URL (req.url)
if (url.login== location.origin){
e.respondWitch(cachefirst(req))
}
else {
e.respondWitch(networkAndCache(req))
}
})
async function cachefirst(req){
    const cache= await caches.open(cachename)
    const cached = await cache.match(req)

    return cache | fetch (req)
}
async function networkAndCache(req){
    const cache= await caches.open (cachename)
    try{
        const refresh = await fetch (req)
        await cache.put (req, refresh.clone())
    return refresh
    }
    catch (e){
        const cached = await cache.match(req)
        return cached
    }
}