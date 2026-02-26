import React from 'react';
import { motion } from 'framer-motion';
import { FileText, History, Shield, Lock } from 'lucide-react';
import { mockData } from '../mock/mockData';

const PrivateCaseSection = () => {
    const { privateCaseFeature } = mockData;

    return (
        <section className="section private-case-section">
            <div className="container">
                <motion.div
                    className="section-grid reverse"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="section-visual"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="dashboard-preview glass-card">
                            <div className="dashboard-header">
                                <h3>Patient Dashboard</h3>
                                <motion.div
                                    className="security-badge"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Shield size={16} />
                                    <span>Encrypted</span>
                                </motion.div>
                            </div>

                            <div className="timeline">
                                {[
                                    { date: 'Jan 15, 2025', title: 'Regular Checkup', status: 'completed' },
                                    { date: 'Dec 10, 2024', title: 'Follow-up Visit', status: 'completed' },
                                    { date: 'Nov 05, 2024', title: 'Initial Consultation', status: 'completed' }
                                ].map((visit, index) => (
                                    <motion.div
                                        key={index}
                                        className="timeline-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="timeline-dot" />
                                        <div className="timeline-content">
                                            <p className="timeline-date">{visit.date}</p>
                                            <p className="timeline-title">{visit.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="notes-preview">
                                <FileText size={20} />
                                <div className="notes-text">
                                    <p><strong>Treatment Notes:</strong></p>
                                    <p>Patient responding well to treatment. Continue current medication...</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="section-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>{privateCaseFeature.title}</h2>
                        <p className="section-description">{privateCaseFeature.description}</p>

                        <div className="feature-list">
                            {privateCaseFeature.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-item"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="feature-icon">
                                        <Lock size={20} />
                                    </div>
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivateCaseSection;
