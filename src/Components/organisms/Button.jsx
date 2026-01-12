import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className = "", onClick, bgColor = "bg-mg-yellow", ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`text-mg-blue hover:text-mg-offwhite px-7 py-3 ${bgColor} relative overflow-hidden group hover:bg-none transition-colors duration-500 rounded-lg shadow-md hover:shadow-lg cursor-pointer ${className}`}
            {...props}
        >
            <span className="absolute left-0 bottom-0 w-full h-full bg-mg-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
            <span className='font-bold text-base relative z-10 flex items-center gap-2'>
                {children}
            </span>
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
