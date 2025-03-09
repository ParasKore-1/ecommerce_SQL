import React from "react";
import { Link } from "react-router-dom";
import products from "../../src/products.json";

const ProductDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Product Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 p-4 rounded-xl shadow-lg hover:bg-gray-700 transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-400">{product.price}</p>
            <div className="mt-4 flex justify-between">
              <Link to={`/product/${product.id}`} className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-xl text-white">View</Link>
              <button className="bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-xl text-white">Buy Now</button>
              <button className="bg-yellow-600 hover:bg-yellow-500 transition px-4 py-2 rounded-xl text-white">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
