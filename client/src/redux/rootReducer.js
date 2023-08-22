
import { combineReducers , applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'quoality-guest',
  storage,
  whitelist: ['cart'],
};
// Combine reducers into a root reducer
const rootReducer = combineReducers({
  // Add your reducer slices here
  // counter: counterReducer,
  
});

export default persistReducer(persistConfig, rootReducer);