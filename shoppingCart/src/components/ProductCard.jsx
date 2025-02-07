import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-md flex flex-col items-center">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-600 mt-2">View Details</Link>
    </div>
  );
};

export default ProductCard;
