import React from 'react';
import { HiOutlinePresentationChartLine, HiOutlineDatabase, HiOutlineReceiptTax } from 'react-icons/hi';
import SectionHeader from '../organisms/SectionHeader';
import FeatureCard from './FeatureCard';

// Assets
import shapeMaze from '../../assets/blog_shape01.png';

const AboutFeatures = () => {
    const features = [
        {
            icon: HiOutlinePresentationChartLine,
            title: "Strategic marketing",
            description: "Mauris utanim sitamet lacus ornar eary ullamcorper Praesent plaacera treat neque eu purus rhoncu",
        },
        {
            icon: HiOutlineDatabase,
            title: "Insights & analytics",
            description: "Mauris utanim sitamet lacus ornar eary ullamcorper Praesent plaacera treat neque eu purus rhoncu",
        },
        {
            icon: HiOutlineReceiptTax,
            title: "Tax Audit",
            description: "Mauris utanim sitamet lacus ornar eary ullamcorper Praesent plaacera treat neque eu purus rhoncu",
        }
    ];

    return (
        <section className="relative w-full py-24 px-5 md:px-10 lg:px-20 bg-[#f9fbff] overflow-hidden">
            {/* Background Decorations */}
            <img
                src={shapeMaze}
                alt=""
                className="absolute top-0 left-0 w-80 opacity-40 z-0 pointer-events-none"
            />
            <img
                src={shapeMaze}
                alt=""
                className="absolute bottom-0 right-0 w-80 opacity-40 z-0 pointer-events-none rotate-180"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    subtitle="SPECIAL FEATURES"
                    title={<>Transforming Your Business <br /> With Technology</>}
                    className="mb-16 mx-auto"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            delay={0.2 * index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;