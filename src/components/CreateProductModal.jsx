import { useState } from "react";
import Swal from "sweetalert2";
import { X, Package } from "lucide-react";
import { createProduct } from "../services/productService";

function CreateProductModal({ onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    location: "",
    emoji: "🥑",
    imageUrl: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createProduct({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      });

      Swal.fire({
        icon: "success",
        title: "Producto creado",
        text: "El producto fue registrado correctamente",
        timer: 1800,
        showConfirmButton: false,
      });

      onSuccess();
      onClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.message || "No fue posible crear el producto",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* HEADER */}

        <div className=" top-0 bg-white z-10 border-b p-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Nuevo Producto</h2>

            <p className="text-gray-500">Agrega un producto a EcoMarket</p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X />
          </button>
        </div>

        {/* FORM */}

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Título</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Ej: Aguacate Hass"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Categoría</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">Seleccionar</option>

                <option value="Frutas">Frutas</option>

                <option value="Verduras">Verduras</option>

                <option value="Lácteos">Lácteos</option>

                <option value="Artesanías">Artesanías</option>

                <option value="Servicios">Servicios</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Descripción</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Describe tu producto..."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <label className="block mb-2 font-medium">Precio</label>

              <input
                type="number"
                min="0"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Stock</label>

              <input
                type="number"
                min="0"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Emoji</label>

              <input
                type="text"
                name="emoji"
                value={formData.emoji}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Ubicación</label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Cali, Valle"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                URL Imagen
                {formData.imageUrl && (
                  <div className="mt-4">
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="w-full h-56 object-cover rounded-2xl border"
                    />
                  </div>
                )}
              </label>

              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />

            <label>Producto destacado</label>
          </div>

         <div className="sticky bottom-0 bg-white border-t p-3 flex justify-end gap-3">

  <button
    type="button"
    onClick={onClose}
    className="px-5 py-3 border rounded-xl"
  >
    Cancelar
  </button>

  <button
    type="submit"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
  >
    Crear Producto
  </button>

</div>
        </form>
      </div>
    </div>
  );
}

export default CreateProductModal;
