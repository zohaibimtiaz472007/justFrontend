import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice"; // Import redux actions
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";

const AllProduct = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Function to add item to cart
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart!");
  };

  // Function to delete item from cart
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart!");
  };

  // Sync cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {getAllProduct.map((item, index) => {
          const { id, title, price, productImageUrl } = item;
          return (
            <div key={index}>
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                  <img
                    onClick={() => navigate(`/productinfo/${id}`)}
                    src={productImageUrl}
                    alt="blog"
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                      ZoCommerce
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      {title}
                    </p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto my-3">
                        ₹{price}
                      </p>
                      <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                          ₹{price}
                        </p>
                      </del>
                      <div className="ml-auto">
                        {/* Conditionally render Add to Cart or Remove from Cart button */}
                        {cartItems.some((p) => p.id === item.id) ? (
                      <button
                        onClick={() => deleteCart(item)}
                        className=" hover:text-red-600 w-full text-black py-[4px] rounded-lg font-bold"
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    ) : (
                      <button
                        onClick={() => addCart(item)}
                        className="  w-full text-black hover:text-green-400 py-[4px] rounded-lg font-bold"
                      >
                        <FaCartPlus size={20} />
                      </button>
                    )}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default AllProduct;
