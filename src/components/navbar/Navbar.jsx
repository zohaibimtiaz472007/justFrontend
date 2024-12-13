import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // Navigate function
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // Get cart items from Redux store, defaulting to an empty array if undefined
  const cartItems = useSelector((state) => state.cart || []); // Defaulting to an empty array

  return (
    <nav className="bg-white shadow-md py-3 px-4 lg:px-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-600">
          <Link to="/">ZoCommerce</Link>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link to="/" className="text-gray-800 hover:text-orange-600">
            Home
          </Link>
          <Link
            to="/allproduct"
            className="text-gray-800 hover:text-orange-600"
          >
            Shop
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-orange-600">
            Services
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-orange-600">
            Contact
          </Link>

          {/* Conditionally render user/admin links */}
          {user ? (
            <>
              {user.role === "user" && (
                <Link
                  to="/user-dashboard"
                  className="text-gray-800 hover:text-orange-600"
                >
                  <FaUserCircle className="text-2xl" />
                </Link>
              )}
              {user.role === "admin" && (
                <Link
                  to="/admin-dashboard"
                  className="text-gray-800 hover:text-orange-600"
                >
                  <FaUserAlt className="text-2xl" />
                </Link>
              )}
              <button
                className="text-gray-800 hover:text-orange-600 text-xl cursor-pointer"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-orange-600 text-white py-2 px-5 rounded hover:bg-orange-700">
                Login
              </button>
            </Link>
          )}

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="flex items-center text-gray-800 hover:text-orange-600 space-x-2"
          >
            <FaShoppingCart className="text-2xl" />
            <span className="text-sm">({cartItems.length})</span>
          </Link>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="lg:hidden">
          <button
            className="text-gray-800 hover:text-orange-600 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden lg:hidden mt-3 space-y-3">
        <Link to="/" className="block text-gray-800 hover:text-orange-600">
          Home
        </Link>
        <Link to="/shop" className="block text-gray-800 hover:text-orange-600">
          Shop
        </Link>
        <Link
          to="/services"
          className="block text-gray-800 hover:text-orange-600"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="block text-gray-800 hover:text-orange-600"
        >
          Contact
        </Link>

        {/* Conditionally render profile and cart icons */}
        <Link to="/cart" className="block text-gray-800 hover:text-orange-600">
          <FaShoppingCart className="text-2xl" />
        </Link>
        {user ? (
          <>
            {user.role === "user" && (
              <Link
                to="/user-dashboard"
                className="block text-gray-800 hover:text-orange-600"
              >
                <FaUserCircle className="text-2xl" />
              </Link>
            )}
            {user.role === "admin" && (
              <Link
                to="/admin-dashboard"
                className="block text-gray-800 hover:text-orange-600"
              >
                <FaUserAlt className="text-2xl" />
              </Link>
            )}
            <button
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
