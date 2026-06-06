import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

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

  let updatedCart;

  if (existing) {
    updatedCart = cartItems.map((item) =>
      item._id === product._id
        ? { ...item, quantity: item.quantity + qty }
        : item
    );
  } else {
    updatedCart = [
      ...cartItems,
      { ...product, quantity: qty },
    ];
  }

  saveCart(updatedCart);

  // 👉 ALERTA SIEMPRE
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: `${product.title} agregado`,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
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