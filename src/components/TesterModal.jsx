import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const TesterModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'patient',
        experience: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast.success('Thank you for joining! We\'ll send you the beta APK link via email.');
            setFormData({ name: '', email: '', phone: '', role: 'patient', experience: '' });
            setIsSubmitting(false);
            setTimeout(() => onClose(), 2000);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25 }}
                    >
                        <div className="modal-header">
                            <h2>Join as Beta Tester</h2>
                            <button onClick={onClose} className="close-button">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="tester-name">Full Name *</label>
                                <input
                                    type="text"
                                    id="tester-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="tester-email">Email *</label>
                                <input
                                    type="email"
                                    id="tester-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="tester-phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="tester-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">I am a *</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    required
                                >
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="both">Both</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="experience">Why do you want to test GoDoc?</label>
                                <textarea
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    placeholder="Tell us about your interest..."
                                    rows="3"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="submit-button"
                            >
                                {isSubmitting ? 'Submitting...' : 'Join Beta Program'}
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default TesterModal;
