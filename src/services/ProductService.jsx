import api from "./api";

export const getMyProducts = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get(
    "/products/my-products",
    {
      headers: {  
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(
    `/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};