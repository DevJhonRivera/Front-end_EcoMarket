import {Package,DollarSign,AlertTriangle,Plus,Pencil,Trash2,Loader2} from "lucide-react";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import {getMyProducts,getSellerStats,deleteProduct} from "../services/productService";
import CreateProductModal from "../components/CreateProductModal";

function SellerPanel() {
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const loadProducts = async () => {
    try {
      setLoading(true);

      const productsData = await getMyProducts();

      const statsData = await getSellerStats();

      setProducts(productsData.products || []);

      setStats(statsData.stats);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.message ||
          "No fue posible cargar la información",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (productId) => {
    const result = await Swal.fire({
      title: "Eliminar producto",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc2626",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteProduct(productId);

      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        timer: 1500,
        showConfirmButton: false,
      });

      loadProducts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.message ||
          "No fue posible eliminar el producto",
      });
    }
  };

  const totalProducts = stats?.totalProducts || 0;

  const lowStock = stats?.lowStock || 0;

  const inventoryValue = stats?.inventoryValue || 0;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Mi Tienda</h1>

            <p className="text-gray-500 mt-2">Bienvenido {user.username}</p>

            <p className="text-sm text-green-600 capitalize">{user.role}</p>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
            onClick={() => setShowCreateModal(true)}>
            <Plus size={18} />
            Nuevo Producto
          </button>
        </div>
      </div>

      {/* Estadísticas */}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <Package className="text-green-600" />

          <p className="text-gray-500 mt-3">Productos</p>

          <h2 className="text-3xl font-bold">{totalProducts}</h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <DollarSign className="text-blue-600" />

          <p className="text-gray-500 mt-3">Inventario</p>

          <h2 className="text-3xl font-bold">
            ${inventoryValue.toLocaleString("es-CO")}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <AlertTriangle className="text-yellow-500" />

          <p className="text-gray-500 mt-3">Stock Bajo</p>

          <h2 className="text-3xl font-bold">{lowStock}</h2>
        </div>
      </div>

      {/* Tabla */}

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="font-bold text-xl">Mis Productos</h2>
        </div>

        {loading ? (
          <div className="p-16 flex justify-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : products.length === 0 ? (
          <div className="p-16 text-center">
            <Package size={60} className="mx-auto text-gray-300" />

            <h3 className="mt-4 font-semibold">No tienes productos</h3>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Producto</th>

                  <th className="text-left p-4">Categoría</th>

                  <th className="text-left p-4">Precio</th>

                  <th className="text-left p-4">Stock</th>
                  <th className="text-left p-4">Estado</th>
                  <th className="text-left p-4">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.imageUrl || "https://placehold.co/80"}
                          alt={product.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />

                        <span>{product.title}</span>
                      </div>
                    </td>

                    <td className="p-4">{product.category}</td>

                    <td className="p-4">
                      ${Number(product.price).toLocaleString("es-CO")}
                    </td>

                    <td className="p-4">
                      {" "}
                      {product.stock > 5 ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          Disponible
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                          Stock Bajo
                        </span>
                      )}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
                          <Pencil size={16} />
                        </button>

                        <button
                          onClick={() => handleDelete(product._id)}
                          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {
  showCreateModal && (
    <CreateProductModal
      onClose={() =>
        setShowCreateModal(false)
      }
      onSuccess={loadProducts}
    />
  )} 
    </div>
    
  );
  
}


export default SellerPanel;
