import React from "react";
import { motion } from "framer-motion";

const TrackCard = ({ title, description, icon }) => {
    const cardVariant = {
        hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Visible state (animated)
    };

    return (
        <motion.div
            className="p-4 md:w-1/3 sm:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} // Triggers animation when 30% of the card is visible
            variants={cardVariant}
        >
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                <div className="text-orange-600 w-12 h-12 mb-3 inline-block">
                    {icon}
                </div>
                <h2 className="title-font font-medium text-lg text-gray-900">
                    {title}
                </h2>
                <p className="leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

const Track = () => {
    const tracks = [
        {
            title: "Premium T-Shirts",
            description: "Our T-Shirts are 100% made of cotton.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>
            ),
        },
        {
            title: "Stylish Hoodies",
            description: "Stay cozy with our premium hoodies.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3.75c4.97 0 9 3.806 9 8.5 0 4.693-4.03 8.5-9 8.5-4.97 0-9-3.807-9-8.5 0-4.694 4.03-8.5 9-8.5z"
                    />
                </svg>
            ),
        },
        {
            title: "Casual Pants",
            description: "Perfect fit for all your casual outings.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 3v18.75M14.25 3v18.75M5.625 7.5h12.75M5.625 16.5h12.75"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section>
            <div className="container mx-auto px-5 py-10 md:py-14">
                <div className="flex flex-wrap -m-4 text-center">
                    {tracks.map((track, index) => (
                        <TrackCard
                            key={index}
                            title={track.title}
                            description={track.description}
                            icon={track.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Track;
