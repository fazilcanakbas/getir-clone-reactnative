import { Product } from "@/src/models";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

// CartItem tipini güncelle
interface CartItem {
  product: Product;  // Tek bir 'product' tipi olmalı
  quantity: number;
}

const cartItems = (state: CartItem[] = [], action: any): CartItem[] => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Adding to cart in reducer:", action.payload);
      return [...state, action.payload];  // Payload'ı doğrudan ekle
    case REMOVE_FROM_CART:
      return state.filter(
        (cartItem) => cartItem.product.id !== action.payload.product.id
      );
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartItems;
