import {
  X,
  ShoppingCart,
  Heart,
  MapPin,
  Star,
  Package,
  User,
  Tag,
  Calendar,
} from "lucide-react";

function ProductModal({
  product,
  onClose,
  onAddToCart,
  onFavorite,
}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">

        {/* BOTON CERRAR */}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* IMAGEN */}

          <div className="bg-gray-100 flex items-center justify-center p-8">

            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[500px] object-contain rounded-2xl"
              />
            ) : (
              <div className="text-8xl">
                {product.emoji || "📦"}
              </div>
            )}

          </div>

          {/* DETALLE */}

          <div className="p-8">

            {/* CATEGORIA */}

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              {product.category}
            </span>

            {/* TITULO */}

            <h2 className="text-3xl font-bold mt-4 text-gray-800">
              {product.name}
            </h2>

            {/* RATING */}

            <div className="flex items-center gap-2 mt-3">

              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-medium">
                {product.rating || 4.8}
              </span>

            </div>

            {/* PRECIO */}

            <div className="mt-6">

              <p className="text-gray-500 text-sm">
                Precio
              </p>

              <h3 className="text-5xl font-bold text-green-700">
                $
                {Number(
                  product.price
                ).toLocaleString("es-CO")}
              </h3>

            </div>

            {/* DESCRIPCION */}

            <div className="mt-8">

              <h4 className="font-semibold text-lg mb-2">
                Descripción
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

            </div>

            {/* INFO */}

            <div className="mt-8 grid md:grid-cols-2 gap-4">

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <MapPin
                  size={20}
                  className="text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Ubicación
                  </p>

                  <p className="font-medium">
                    {product.location ||
                      "No especificada"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Package
                  size={20}
                  className="text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Stock
                  </p>

                  <p className="font-medium">
                    {product.stock || 0}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <User
                  size={20}
                  className="text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Vendedor
                  </p>

                  <p className="font-medium">
                    {product.seller?.username ||
                      "Vendedor local"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Calendar
                  size={20}
                  className="text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Publicado
                  </p>

                  <p className="font-medium">
                    {product.createdAt
                      ? new Date(
                          product.createdAt
                        ).toLocaleDateString()
                      : "Hoy"}
                  </p>
                </div>
              </div>

            </div>

            {/* BOTONES */}

            <div className="flex gap-4 mt-8">

              <button
                onClick={() =>
                  onAddToCart(product)
                }
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart size={20} />
                Agregar al carrito
              </button>

              <button
                onClick={() =>
                  onFavorite(product)
                }
                className="border border-gray-300 hover:bg-red-50 px-5 rounded-xl transition"
              >
                <Heart size={22} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;