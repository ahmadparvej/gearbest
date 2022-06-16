
import { legacy_createStore as createStore,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getProductsReducer } from './products/reducer';
import { authReducer } from './auth/reducer';
import { cartReducer } from './cart/reducer';

const rootReducers = combineReducers({getProductsReducer,authReducer,cartReducer})

export const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));