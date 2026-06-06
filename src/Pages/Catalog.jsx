import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      console.log("Respuesta API:", data); // 👈 DEBUG

      setProducts(data.products || []);
    } catch (error) {
      console.error("Error cargando productos:", error);
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Cargando productos...</h2>;

  if (error) return <h2>{error}</h2>;

  if (products.length === 0)
    return <h2>No hay productos disponibles</h2>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Catalog;