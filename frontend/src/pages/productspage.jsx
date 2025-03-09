import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../src/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div className="text-white text-center mt-10">Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-80 h-80 object-cover rounded-xl mb-4" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-xl text-gray-400 mt-2">{product.price}</p>
      <p className="mt-4 max-w-lg text-center">{product.description}</p>
      <Link to="/user/dashboard" className="mt-6 bg-blue-600 hover:bg-blue-500 transition px-6 py-2 rounded-xl text-white">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
