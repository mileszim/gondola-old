import ENV from '../config/environment';

let adapter = { adapter: null };


// Set adapter
if (ENV.adapter) {
  const adapterUrl = ENV.adapter.url;
  const adapterPackage = require(`fortune-${ENV.adapter.name}`);

  adapter = {
    adapter: [
      adapterPackage,
      { url: adapterURL }
    ]
  };
}

export default adapter;
