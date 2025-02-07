import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000, description: "A high-end laptop for professionals." },
  { id: 2, name: "Phone", price: 500, description: "A smartphone with great features." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
