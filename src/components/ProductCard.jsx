import {
  Heart,
  ShoppingCart,
  MapPin,
  Star,
  Eye,
  Package,
  User,
} from "lucide-react";

function ProductCard({ product, onView, onFavorite, onAddToCart }) {
  const image = product.imageUrl|| "https://placehold.co/600x400?text=EcoMarket";
  

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Imagen */}

      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Categoría */}

        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Favoritos */}

        <button
          onClick={() => onFavorite(product)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-red-50"
        >
          <Heart
            size={18}
            className={
              product.isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
            }
          />
        </button>

        {/* Stock */}

        <div className="absolute bottom-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 0 ? `Stock: ${product.stock}` : "Agotado"}
          </span>
        </div>
      </div>

      {/* Contenido */}

      <div className="p-5">
        {/* Nombre */}

        <h3 className="font-bold text-xl text-gray-800 line-clamp-1">
          {product.title}
        </h3>

        {/* Descripción */}

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Vendedor */}

        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
          <User size={15} />

          <span>{product.seller?.username || "Vendedor local"}</span>
        </div>

        {/* Ubicación */}

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <MapPin size={15} />

          <span>{product.location || "Ubicación no especificada"}</span>
        </div>

        {/* Rating */}

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="font-medium">{product.rating || 4.8}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Package size={15} />

            <span>{product.stock || 0}</span>
          </div>
        </div>

        {/* Precio */}

        <div className="mt-4">
          <span className="text-3xl font-bold text-green-700">
            ${Number(product.price).toLocaleString("es-CO")}
          </span>
        </div>

        {/* Botones */}

        <div className="grid grid-cols-3 gap-2 mt-6">
          <button
            onClick={() => onView(product)}
            className="col-span-1 border border-green-200 hover:bg-green-50 py-3 rounded-xl flex items-center justify-center transition"
          >
            <Eye size={18} />
          </button>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock <= 0}
            className={`col-span-2 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
              product.stock > 0
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart size={18} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
