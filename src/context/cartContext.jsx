import { createContext, useContext, useEffect, useReducer } from "react";

const initialCartState = {
  cartItems: [],
  cartMessage: {
    loading: true,
    error: null,
  },
};
const cartContext = createContext(initialCartState);
const { Provider } = cartContext;
export const cartActionTypes = {
  SET_CART_ITEM: "SET_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  SET_CART_ITEM_FAILURE: "SET_CART_ITEM_FAILURE",
};
export const cartReducer = (
  prevCartState,
  { type, payload: { cartItems, cartMessage } }
) => {
  switch (type) {
    case cartActionTypes.SET_CART_ITEM:
      return {
        ...prevCartState,
        cartItems: [...prevCartState.cartItems, cartItems],
        cartMessage,
      };
    case cartActionTypes.REMOVE_CART_ITEM: {
      return {
        ...prevCartState,
        cartItems,
      };
    }
    case cartActionTypes.SET_CART_ITEM_FAILURE:
      return {
        ...prevCartState,
        cartMessage,
      };
    default:
      return { ...prevCartState };
  }
};
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  useEffect(() => {
    setTimeout(() => (cartState.cartMessage.loading = false), 10000);
  });
  return <Provider value={{ ...cartState, cartDispatch }}>{children}</Provider>;
};
const useCart = () => useContext(cartContext);
export { CartProvider, useCart };
