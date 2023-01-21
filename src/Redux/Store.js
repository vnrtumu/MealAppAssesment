import {createStore} from 'redux';

import reducers from './Reducers.js/index.js';

export const store = createStore(reducers);
