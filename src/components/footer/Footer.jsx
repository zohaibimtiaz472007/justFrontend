import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap justify-between space-y-8 sm:space-y-0">
                    {/* Column 1: Logo & Description */}
                    <div className="sm:w-1/4 w-full">
                        <h1 className="text-3xl font-bold  text-orange-600">ZoCommerce</h1>
                        <p className="mt-4 text-gray-400">
                            Your go-to online store for premium quality products. Discover a wide range of exclusive items at the best prices.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="sm:w-1/4 w-full">
                        <h2 className="text-lg font-semibold text-gray-100">Quick Links</h2>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-orange-600">Home</a></li>
                            <li><a href="#shop" className="hover:text-orange-600">Shop</a></li>
                            <li><a href="#about" className="hover:text-orange-600">About Us</a></li>
                            <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Customer Service */}
                    <div className="sm:w-1/4 w-full">
                        <h2 className="text-lg font-semibold text-gray-100">Customer Service</h2>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><a href="#faq" className="hover:text-orange-600">FAQ</a></li>
                            <li><a href="#returns" className="hover:text-orange-600">Returns & Exchanges</a></li>
                            <li><a href="#shipping" className="hover:text-orange-600">Shipping Information</a></li>
                            <li><a href="#privacy" className="hover:text-orange-600">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter Subscription */}
                    <div className="sm:w-1/4 w-full">
                        <h2 className="text-lg font-semibold text-gray-100">Subscribe to Our Newsletter</h2>
                        <form className="mt-4 flex">
                            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg text-gray-900" />
                            <button className=" bg-orange-600 text-white px-6 py-2 rounded-r-lg hover:bg-pink-700">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6">
                    {/* Social Media & Copyright */}
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-orange-600">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22.46 6.01c.04.34.04.68.04 1.01 0 10.27-7.68 17.68-17.68 17.68C7.6 24.68 1 18.01 1 10c0-3.76 2.1-7.02 5.13-8.7.38-.28.75-.53 1.12-.79-.04.35-.06.7-.06 1.05 0 5.52 4.47 10 10 10 5.52 0 10-4.48 10-10 0-.35 0-.7-.06-1.05.37.26.74.51 1.12.79 3.02 1.68 5.12 4.94 5.12 8.7 0 1.42-.04 2.74-.12 4.03-3.06-.23-5.69-1.52-8.12-3.76z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-600">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-600">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 10-12.728 12.728 9 9 0 0012.728-12.728z" />
                                </svg>
                            </a>
                        </div>

                        <p className="text-gray-400">© 2024 ZoCommerce. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
