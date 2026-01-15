import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title, subtitle, description, className = "" }) => {
    return (
        <div className={`flex flex-col items-center text-center gap-y-4 max-w-3xl px-4 ${className}`}>
            {subtitle && (
                <span className="text-mg-yellow font-bold tracking-wider uppercase text-sm md:text-base">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold font-primary text-mg-blue">
                {title}
            </h2>
            {description && (
                <p className="text-gray-600 font-secondary text-base md:text-lg leading-relaxed max-w-2xl">
                    {description}
                </p>
            )}
        </div>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.node,
    className: PropTypes.string,
};

export default SectionHeader;
