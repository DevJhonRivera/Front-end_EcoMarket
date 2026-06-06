import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

import {
  getProducts,
} from "../services/productService";

function Catalog() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    try {

      const data =
        await getProducts();

      setProducts(
        data.products
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <h2>
        Cargando productos...
      </h2>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map((product) => (

        <ProductCard
          key={product._id}
          product={product}
        />

      ))}

    </div>
  );
}

export default Catalog;