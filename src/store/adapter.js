import ENV from '../config/environment';

if (!ENV.adapter) {
  export default { adapter: null };
  return;
}


// Load adapter
const adapterUrl = ENV.adapter.url;
import adapterPackage from `fortune-${ENV.adapter.name}`;


// Set adapter
export default {
  adapter: [
    adapterPackage,
    { url: adapterURL }
  ]
}
