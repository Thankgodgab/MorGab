import React from 'react';

// Import Assets
import brand01 from '../../assets/brand_img01.png';
import brand02 from '../../assets/brand_img02.png';
import brand03 from '../../assets/brand_img03.png';
import brand04 from '../../assets/brand_img04.png';
import brand05 from '../../assets/brand_img05.png';
import brand06 from '../../assets/brand_img06.png';

const PartnerSection = () => {
    const brands = [
        { id: 1, img: brand01, alt: "DoorDash" },
        { id: 2, img: brand02, alt: "Centric Software" },
        { id: 3, img: brand03, alt: "Discord" },
        { id: 4, img: brand04, alt: "Airbnb" },
        { id: 5, img: brand05, alt: "Norton" },
        { id: 6, img: brand06, alt: "Nature Wave" },
    ];

    return (
        <div className="bg-[#0b0f7a] py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-16 animate-scroll w-max hover:[animation-play-state:paused]">
                    {/* Double the brands to create seamless loop */}
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={`${brand.id}-${index}`}
                            className="shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        >
                            <img
                                src={brand.img}
                                alt={brand.alt}
                                className="h-8 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
