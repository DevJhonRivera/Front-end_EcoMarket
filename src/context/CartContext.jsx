import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Guardar en localStorage
  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  // Agregar producto
  const addToCart = (product, qty = 1) => {
    const existing = cartItems.find(
      (item) => item._id === product._id
    );

    if (existing) {
      const updated = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
      saveCart(updated);
    } else {
      saveCart([
        ...cartItems,
        { ...product, quantity: qty },
      ]);
    }
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    const updated = cartItems.filter(
      (item) => item._id !== id
    );
    saveCart(updated);
  };

  // Actualizar cantidad
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const updated = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity }
        : item
    );

    saveCart(updated);
  };

  // Vaciar carrito
  const clearCart = () => {
    saveCart([]);
  };

  // Total de items
  const getTotalItems = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Total de precio
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);