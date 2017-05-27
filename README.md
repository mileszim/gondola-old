# gondola #
Social Media Streaming


## Adapters ##
In order to use an adapter other than the in-memory store, you need to install the relevant fortune adapter:

* [IndexedDB](https://github.com/fortunejs/fortune-indexeddb)
* [MongoDB](https://github.com/fortunejs/fortune-mongodb)
* [Postgres](https://github.com/fortunejs/fortune-postgres)
* [Redis](https://github.com/fortunejs/fortune-redis)
* [NeDB](https://github.com/fortunejs/fortune-nedb)
* [File System](https://github.com/fortunejs/fortune-fs)

After installing the adapter, set it as the adapter in `config/environment.js`:
```javascript
let ENV = {
  ...
  adapter: {
    name: 'redis',
    url: 'redis://127.0.0.1:6380'
  }
  ...
};
```
