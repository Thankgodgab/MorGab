import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../organisms/Button';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group bg-white p-10 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-50 flex flex-col items-start gap-6"
        >
            <div className="flex items-center gap-6 w-full">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-[#f0f4ff] flex items-center justify-center relative overflow-hidden shrink-0">
                    <motion.div
                        variants={{
                            hover: { rotateY: 180 }
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-mg-blue text-4xl"
                    >
                        <Icon />
                    </motion.div>
                </div>

                {/* Vertical Divider & Title */}
                <div className="flex items-center gap-4">
                    <div className="w-px h-10 bg-gray-200"></div>
                    <h3 className="text-2xl font-bold font-primary text-mg-blue leading-tight">
                        {title}
                    </h3>
                </div>
            </div>

            <p className="text-gray-500 font-secondary text-lg leading-relaxed">
                {description}
            </p>

            <Button
                href="/services"
                bgColor="bg-mg-yellow/10"
                hoverColor="bg-mg-yellow"
                className="mt-auto text-mg-yellow! hover:text-mg-blue! px-6! py-2! rounded-full! shadow-none hover:shadow-md"
            >
                Read More <FaArrowRight className="text-xs" />
            </Button>
        </motion.div>
    );
};

FeatureCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.number,
};

export default FeatureCard;
