import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    href: "#",
    price: "₹61,999",
    color: "Orange",
    imageAlt: "Nike Air Force 1 07 LV8",
    quantity: 1,
  },
];

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        {/* User Info */}
        <div className="bg-orange-50 py-6 px-4 rounded-xl border border-orange-100 shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <h1 className="mt-4 text-xl font-semibold text-gray-800">
              <span className="font-bold text-orange-600">Name: </span> {user?.name}
            </h1>
            <h1 className="text-lg font-medium text-gray-700">
              <span className="font-bold text-orange-600">Email: </span>{user?.email}
            </h1>
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Order Details</h2>

          {/* Order Summary */}
          <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-orange-100 shadow-md lg:flex-row">
            {/* Left Section */}
            <div className="w-full lg:max-w-xs bg-orange-50 border-r border-orange-100">
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Order ID</p>
                    <p className="text-sm font-medium text-gray-700">#74557994327</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Date</p>
                    <p className="text-sm font-medium text-gray-700">4 March, 2023</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Total Amount</p>
                    <p className="text-sm font-medium text-gray-700">₹84,499</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Order Status</p>
                    <p className="text-sm font-medium text-green-600">Confirmed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 bg-white">
              <div className="p-6">
                <ul className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <li
                      key={product.id}
                      className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 py-6"
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col">
                        <p className="text-lg font-semibold text-gray-800">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.color}</p>
                        <p className="mt-2 text-sm text-gray-500">Quantity: {product.quantity}</p>
                      </div>

                      {/* Product Price */}
                      <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
