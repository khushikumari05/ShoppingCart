import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-600">View Details</Link>
    </div>
  );
};

export default ProductCard;
