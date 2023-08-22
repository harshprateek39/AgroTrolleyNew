// store.js
import { createStore, applyMiddleware , compose} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from './rootReducer.js'; // Create this file
import { persistStore } from 'redux-persist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);
export { store, persistor };

