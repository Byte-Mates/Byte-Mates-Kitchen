import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import cart from './cart'
import products from "./product";
import order from "./order"
import users from './users';

const reducer = combineReducers({ auth, cart, products, users, order })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store
export * from './auth';
export * from './cart';
export * from "./product";
export * from './order'
export * from './users';

