import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaTrashAlt, FaCartPlus } from "react-icons/fa"; // Importing icons
import myContext from "../../context/myContext";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted from cart");
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {getAllProduct.slice(0, 8).map((item, index) => {
        const { id, title, price, productImageUrl } = item;
        return (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-2xl transition-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={cardVariant}
          >
            <img
              onClick={() => navigate(`/productinfo/${id}`)}
              src={productImageUrl}
              alt="product"
              className="h-80 w-72 object-cover rounded-t-xl cursor-pointer"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">ZoCommerce</span>
              <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">Rs{price}</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">Rs{price}</p>
                </del>

                <div className="ml-auto relative group">
                  <div className="p-2 rounded-full bg-gray-200 cursor-pointer duration-300 group-hover:scale-125 group-hover:translate-x-2 transition-transform">
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
                        className=" w-full text-black py-[4px] rounded-lg font-bold"
                      >
                        <FaCartPlus size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default HomePageProductCard;
