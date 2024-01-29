// src/contexts/CartContext.tsx

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number };

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  cartItemCount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: Product[], action: Action): Product[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state, action.payload];
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    case "REMOVE_FROM_CART":
      const filteredCart = state.filter(
        (product) => product.id !== action.payload
      );
      saveCartToLocalStorage(filteredCart);
      return filteredCart;
    default:
      return state;
  }
};

const loadCartFromLocalStorage = (): Product[] => {
  const cartString = localStorage.getItem("cart");
  return cartString ? JSON.parse(cartString) : [];
};

const saveCartToLocalStorage = (cart: Product[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    loadCartFromLocalStorage
  );

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartItemCount: cart.length }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
