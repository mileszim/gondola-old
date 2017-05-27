import ENV from '../environment';

let adapterOptions = null;

if (!ENV.adapter) {
  export default adapterOotions;
  return;
}


// Load adapter
const adapterPackageName = `fortune-${ENV.adapter.name}`;
const adapterUrl = ENV.adapter.url;
import adapterPackage from adapterPackageName;


// Set adapter
export default adapterOptions = {
  adapter: [
    adapterPackage,
    { url: adapterURL }
  ]
}
