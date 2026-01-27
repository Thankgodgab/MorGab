import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className = "", onClick, bgColor = "bg-mg-yellow", hoverColor = "bg-mg-blue", href, ...props }) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`text-mg-blue hover:text-mg-offwhite px-7 py-3 ${bgColor} relative overflow-hidden group/btn transition-colors duration-500 rounded-lg shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center font-bold text-base ${className}`}
            {...props}
        >
            <span className={`absolute left-0 bottom-0 w-full h-full ${hoverColor} translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 z-0`}></span>
            <span className='relative z-10 flex items-center gap-2'>
                {children}
            </span>
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    bgColor: PropTypes.string,
    hoverColor: PropTypes.string,
    href: PropTypes.string,
};

export default Button;
