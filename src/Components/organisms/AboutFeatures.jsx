import React from 'react';
import * as HiIcons from 'react-icons/hi';
import SectionHeader from '../atoms/SectionHeader';
import FeatureCard from '../molecules/FeatureCard';
import { aboutFeaturesContent } from '../../data/content';

// Assets
import shapeMaze from '../../assets/blog_shape01.png';

const AboutFeatures = () => {
    const { sectionSubtitle, sectionTitle, features } = aboutFeaturesContent;

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
                    subtitle={sectionSubtitle}
                    title={
                        <>
                            {sectionTitle.split('With')[0]} <br className="hidden md:block" />
                            With {sectionTitle.split('With')[1]}
                        </>
                    }
                    className="mb-16 mx-auto"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = HiIcons[feature.iconName];
                        return (
                            <FeatureCard
                                key={index}
                                icon={Icon}
                                title={feature.title}
                                description={feature.description}
                                delay={0.2 * index}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;
