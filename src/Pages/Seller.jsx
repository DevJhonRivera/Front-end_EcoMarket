import {
  Package,
  Plus,
  TrendingUp,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

function Seller({ products = [], setCurrentPage }) {
  const totalProducts = products.length;

  const lowStock = products.filter(
    (p) => p.stock <= 5
  ).length;

  const totalInventoryValue = products.reduce(
    (acc, p) =>
      acc + p.price * p.stock,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Panel de Vendedor
          </h1>

          <p className="text-gray-500">
            Administra tus productos y tu inventario.
          </p>
        </div>

        <button
          onClick={() =>
            setCurrentPage("create-product")
          }
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Nuevo Producto
        </button>

      </div>

      {/* Estadísticas */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <Package className="text-green-600" />

          <h3 className="text-gray-500 mt-3">
            Productos
          </h3>

          <p className="text-3xl font-bold">
            {totalProducts}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <DollarSign className="text-green-600" />

          <h3 className="text-gray-500 mt-3">
            Inventario
          </h3>

          <p className="text-3xl font-bold">
            $
            {totalInventoryValue.toLocaleString(
              "es-CO"
            )}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <AlertTriangle className="text-yellow-500" />

          <h3 className="text-gray-500 mt-3">
            Stock Bajo
          </h3>

          <p className="text-3xl font-bold">
            {lowStock}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <TrendingUp className="text-blue-500" />

          <h3 className="text-gray-500 mt-3">
            Ventas
          </h3>

          <p className="text-3xl font-bold">
            125
          </p>

        </div>

      </div>

      {/* Tabla Productos */}

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-xl font-bold">
            Mis Productos
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left p-4">
                  Producto
                </th>

                <th className="text-left p-4">
                  Categoría
                </th>

                <th className="text-left p-4">
                  Precio
                </th>

                <th className="text-left p-4">
                  Stock
                </th>

                <th className="text-left p-4">
                  Estado
                </th>

                <th className="text-left p-4">
                  Acciones
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((product) => (

                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <img
                        src={
                          product.image ||
                          "https://placehold.co/80"
                        }
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />

                      <span className="font-medium">
                        {product.name}
                      </span>

                    </div>

                  </td>

                  <td className="p-4">
                    {product.category}
                  </td>

                  <td className="p-4">
                    $
                    {Number(
                      product.price
                    ).toLocaleString(
                      "es-CO"
                    )}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">

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

                      <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">
                        Editar
                      </button>

                      <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
                        Eliminar
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Seller;