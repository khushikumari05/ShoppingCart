import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handlePurchase = async () => {
    const webhookUrl = "https://webhook.site/YOUR_UNIQUE_URL"; // Replace with your actual webhook URL

    const purchaseData = {
      user: "eve.holt@reqres.in",
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price, 0),
    };

    try {
      await axios.post(webhookUrl, purchaseData);
      alert("Purchase successful! Data sent to webhook.");
    } catch (error) {
      alert("Error processing purchase.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
      <button onClick={handlePurchase} className="bg-green-600 text-white px-4 py-2 rounded mt-4">
        Buy Now
      </button>
    </div>
  );
};

export default Checkout;
