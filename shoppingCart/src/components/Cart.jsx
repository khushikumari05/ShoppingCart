import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between border p-2 rounded">
              <span>{item.name} - ${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <Link to="/checkout" className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;
