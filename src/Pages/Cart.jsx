import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";

import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,
    0
  );

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Eliminar producto",
      text: "¿Deseas quitar este producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
    });

    if (result.isConfirmed) {
      removeFromCart(id);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">

        <ShoppingCart
          size={90}
          className="text-gray-300"
        />

        <h2 className="text-2xl font-bold mt-4">
          Tu carrito está vacío
        </h2>

        <p className="text-gray-500">
          Agrega productos para comenzar.
        </p>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Carrito de Compras
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* PRODUCTOS */}

        <div className="lg:col-span-2 space-y-4">

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-sm p-4 flex gap-4"
            >

              <img
                src={
                  item.imageUrl ||
                  "https://placehold.co/150"
                }
                alt={item.title}
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.category}
                </p>

                <p className="text-green-600 font-bold mt-2">
                  ${item.price.toLocaleString()}
                </p>

              </div>

              <div className="flex flex-col justify-between">

                <button
                  onClick={() =>
                    handleDelete(item._id)
                  }
                >
                  <Trash2
                    className="text-red-500"
                    size={20}
                  />
                </button>

                <div className="flex items-center gap-2">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        Math.max(
                          1,
                          item.quantity - 1
                        )
                      )
                    }
                    className="bg-gray-100 p-2 rounded"
                  >
                    <Minus size={14} />
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.quantity + 1
                      )
                    }
                    className="bg-gray-100 p-2 rounded"
                  >
                    <Plus size={14} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* RESUMEN */}

        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">

          <h2 className="font-bold text-xl mb-6">
            Resumen
          </h2>

          <div className="flex justify-between mb-4">
            <span>Productos</span>
            <span>
              {cartItems.length}
            </span>
          </div>

          <div className="flex justify-between mb-6">
            <span>Subtotal</span>

            <span className="font-bold text-green-600">
              ${subtotal.toLocaleString()}
            </span>
          </div>

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            Proceder al Pago
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 border border-red-500 text-red-500 py-3 rounded-xl"
          >
            Vaciar Carrito
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;