import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { favoritesReducer } from './reducers/favoritesReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

// localStorage.clear();

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const favoritesItemsFromStorage = localStorage.getItem('favoritesItems') ? JSON.parse(localStorage.getItem('favoritesItems')) : []

const initialState = {
  cart: {cartItems: cartItemsFromStorage },
  favorites: {favoritesItems: favoritesItemsFromStorage }
}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
