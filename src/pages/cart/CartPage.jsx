import React from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const cartItemTotal = cartItems
    .map((item) => item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <motion.div
          className="sm:flex shadow-md my-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cart Items Section */}
          <motion.div
            className="w-full sm:w-3/4 bg-white px-10 py-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between border-b pb-8">
              <motion.h1
                className="font-semibold text-2xl"
                whileHover={{ scale: 1.1 }}
              >
                Shopping Cart
              </motion.h1>
              <motion.h2
                className="font-semibold text-2xl"
                whileHover={{ scale: 1.1 }}
              >
                {cartItemTotal} Items
              </motion.h2>
            </div>

            {/* Product List */}
            <div className="space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  const {
                    id,
                    title,
                    price,
                    productImageUrl,
                    quantity,
                    category,
                  } = item;

                  return (
                    <motion.div
                      key={id}
                      className="flex items-start gap-4 border-b border-gray-200 pb-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={productImageUrl}
                          alt={title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {title}
                        </h3>
                        <p className="text-sm text-gray-500">{category}</p>
                        <p className="text-sm text-gray-700">
                          Quantity: {quantity}
                        </p>
                        <p className="text-sm font-bold text-gray-800 mt-1">
                          Price: RS {price}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col items-end gap-2">
                        <motion.button
                          className="text-red-500 text-sm underline"
                          onClick={() => deleteCart(item)}
                          whileHover={{ scale: 1.1 }}
                        >
                          Remove
                        </motion.button>
                        <div className="flex items-center gap-2">
                          <motion.button
                            className="px-2 py-1 bg-gray-200 rounded text-gray-700"
                            onClick={() => handleDecrement(id)}
                            whileTap={{ scale: 0.9 }}
                          >
                            -
                          </motion.button>
                          <span className="font-semibold text-gray-800">
                            {quantity}
                          </span>
                          <motion.button
                            className="px-2 py-1 bg-gray-200 rounded text-gray-700"
                            onClick={() => handleIncrement(id)}
                            whileTap={{ scale: 0.9 }}
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.h1
                  className="text-xl font-semibold text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Cart is Empty
                </motion.h1>
              )}
            </div>

            <Link
              to="/allproduct"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <motion.svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
                whileHover={{ x: -5 }}
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </motion.svg>
              Continue Shopping
            </Link>
          </motion.div>

          {/* Order Summary Section */}
          <motion.div
            id="summary"
            className="w-full sm:w-1/4 md:w-1/2 px-8 py-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Price ({cartItemTotal} item)
              </span>
              <span className="font-semibold text-sm">RS {cartTotal}</span>
            </div>

            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>

            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <motion.input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <motion.button
              className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Apply
            </motion.button>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>RS {cartTotal}</span>
              </div>
              <motion.button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                whileHover={{ scale: 1.05 }}
              >
                Checkout
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CartPage;