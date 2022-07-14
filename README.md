# Orientierungstag POC

This is a basic ionic PWA that prefetches and caches data from a REST endpoint and also prefetches all assets in the
background. This allows for complete offline capability of the webapp. To get started, run:

```
npm i
ionic build --prod
npm i -g http-server
http-server -p 8080 -c-1 .\www\
```

Open the page, see network tab that everything is downloaded. Then disable internet, reload the page. Everything will
still be there, including assets and cached data from API.

Note: you can also serve the app with `ionic serve`, but then the service worker will only work in a production environment, that's why we use the http-server. 
