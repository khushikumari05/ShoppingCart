import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">ShoppingCart</Link>
      <div>
        {user ? (
          <>
            <Link to="/cart" className="mx-4">Cart</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
