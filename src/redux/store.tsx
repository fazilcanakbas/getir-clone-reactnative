// store.ts
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartItems from "./reducers/cartItems";
import { Product } from "../models";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RootState {
  cartItems: CartItem[]; 
}

const reducers = combineReducers({
  cartItems: cartItems
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware))
);

export default store;
