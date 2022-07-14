# Orientierungstag POC

This is a basic ionic PWA that prefetches and caches data from a REST endpoint and also prefetches all assets in the
background. this allows for complete offline capability of the webapp. To demo, run:

```
ionic build --prod
http-server -p 8080 -c-1 .\www\
```

Open the page, see network tab that everything is downloaded. Then disable internet, reload the page. Everything will
still be there, including assets and cached data from API.
