import { Product } from "@/src/models";
import { ADD_TO_CART } from "../constants";
import { REMOVE_FROM_CART } from "../constants";
import { CLEAR_CART } from "../constants";


export const addToCart = (payload: { quantity: number; product: Product }) => ({
  type: ADD_TO_CART,
  payload
});

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: { quantity: number; product: Product };
}

export const removeFromCart = (payload: any) => {
    return {
        type:REMOVE_FROM_CART,
        payload
    }
}


export const clearCart = () => {
    return {
        type:CLEAR_CART,
        
    }
}