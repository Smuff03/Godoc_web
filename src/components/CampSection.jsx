import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Bell, UserPlus } from 'lucide-react';
import { mockData } from '../mock/mockData';

const CampSection = () => {
    const { campFeature } = mockData;

    return (
        <section className="section camp-section">
            <div className="container">
                <motion.div
                    className="section-header centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>{campFeature.title}</h2>
                    <p className="section-description">{campFeature.description}</p>
                </motion.div>

                <div className="camp-demo">
                    <motion.div
                        className="camp-flow"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Step 1: Create Camp */}
                        <motion.div
                            className="camp-step glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="step-icon">
                                <MapPin size={32} />
                            </div>
                            <h3>Create Camp</h3>
                            <p>Doctor sets up a medical camp with location, speciality and timing</p>
                        </motion.div>

                        <motion.div
                            className="flow-arrow"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            →
                        </motion.div>

                        {/* Step 2: Doctors Join */}
                        <motion.div
                            className="camp-step glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="step-icon">
                                <UserPlus size={32} />
                            </div>
                            <h3>Doctors Join</h3>
                            <p>Multiple specialists can collaborate in the camp</p>
                        </motion.div>

                        <motion.div
                            className="flow-arrow"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            →
                        </motion.div>

                        {/* Step 3: Patients Register */}
                        <motion.div
                            className="camp-step glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                        >
                            <div className="step-icon">
                                <Users size={32} />
                            </div>
                            <h3>Patients Register</h3>
                            <p>Easy registration and queue management</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="camp-features"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="features-grid">
                            {campFeature.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-card glass-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Bell size={24} />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CampSection;
