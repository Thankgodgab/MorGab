import React from 'react';
import { FaAsterisk } from 'react-icons/fa';

const ServiceTicker = () => {
    const services = [
        "Investment",
        "Target",
        "Marketing",
        "Finance Advisor",
        "Business Strategy",
        "Management",
        "Market Research",
    ];

    return (
        <div className="bg-white py-10 overflow-hidden border-y border-gray-100">
            <div className="flex items-center gap-10 animate-scroll w-max">
                {/* Double the services to create seamless loop */}
                {[...services, ...services, ...services].map((service, index) => (
                    <div key={index} className="flex items-center gap-10">
                        <span className="text-3xl md:text-5xl font-black text-mg-yellow uppercase tracking-tight whitespace-nowrap font-primary">
                            {service}
                        </span>
                        <FaAsterisk className="text-mg-yellow text-2xl md:text-4xl" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceTicker;
