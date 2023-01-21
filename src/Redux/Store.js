import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './Reducers.js/index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
