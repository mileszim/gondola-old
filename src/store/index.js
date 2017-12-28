import Fortune from '../fortune';

import { models, hooks } from '../models';
import adapter from './adapter';


const options = { adapter, hooks };

const store = new Fortune(models, options);

export default store;
