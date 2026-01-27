import React, { useState } from 'react';
import Button from '../atoms/Button';
import { motion, AnimatePresence } from 'motion/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        message: '',
        name: '',
        email: '',
        phone: '',
        saveInfo: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Real-time clearing of errors
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulating form submission (using Formspree or similar in real app)
        try {
            // In a real scenario, you'd use something like fetch("https://formspree.io/f/your-id", ...)
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({ message: '', name: '', email: '', phone: '', saveInfo: false });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const inputClasses = (name) => `
        w-full bg-white border-2 rounded-lg px-4 py-3 outline-none transition-all duration-300
        ${errors[name] ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-mg-yellow hover:border-mg-yellow/30'}
        placeholder-gray-400 text-mg-blue text-sm md:text-base
    `;

    return (
        <div className="bg-[#eff7f9] p-8 md:p-12 rounded-3xl shadow-sm border border-[#e0eff2]">
            <h3 className="text-2xl md:text-3xl font-bold text-mg-blue mb-2 font-primary">Give Us a Message</h3>
            <p className="text-gray-500 text-sm mb-8 font-secondary">
                Your email address will not be published. Required fields are marked *
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Message Field */}
                <div className="relative group">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message *"
                        rows="5"
                        className={inputClasses('message')}
                    ></textarea>
                    <AnimatePresence>
                        {errors.message && (
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-0 -bottom-6 text-xs text-red-500 font-medium"
                            >
                                {errors.message}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name *"
                            className={inputClasses('name')}
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.span
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-0 -bottom-6 text-xs text-red-500 font-medium"
                                >
                                    {errors.name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email *"
                            className={inputClasses('email')}
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.span
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-0 -bottom-6 text-xs text-red-500 font-medium"
                                >
                                    {errors.email}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className={inputClasses('phone')}
                        />
                    </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                    <input
                        type="checkbox"
                        name="saveInfo"
                        id="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="mt-1 accent-mg-yellow rounded"
                    />
                    <label htmlFor="saveInfo" className="text-gray-500 text-sm font-medium cursor-pointer select-none">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto min-w-[180px]"
                        hoverColor="bg-mg-blue"
                        bgColor="bg-mg-yellow"
                    >
                        {isSubmitting ? 'SENDING...' : 'SUBMIT POST'}
                    </Button>
                </div>

                {/* Success/Error Message Overlay */}
                <AnimatePresence>
                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="p-4 bg-green-100 border border-green-200 text-green-700 rounded-lg text-center"
                        >
                            Message sent successfully! We'll get back to you soon.
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};

export default ContactForm;
