import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Calendar } from 'lucide-react';
import { mockData } from '../mock/mockData';

const QRSection = () => {
    const { qrFeature } = mockData;

    return (
        <section className="section qr-section">
            <div className="container">
                <motion.div
                    className="section-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="section-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>{qrFeature.title}</h2>
                        <p className="section-description">{qrFeature.description}</p>

                        <div className="feature-list">
                            {qrFeature.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="feature-icon">
                                        <Calendar size={20} />
                                    </div>
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="section-visual"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="doctor-card-demo">
                            <motion.div
                                className="doctor-card glass-card"
                                whileHover={{ y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="card-header">
                                    <div className="doctor-avatar">
                                        <img
                                            src="https://images.pexels.com/photos/19438566/pexels-photo-19438566.jpeg"
                                            alt="Dr. Professional"
                                        />
                                    </div>
                                    <div className="doctor-info">
                                        <h3>Dr. Rajesh Kumar</h3>
                                        <p>MBBS, MD - Cardiologist</p>
                                        <p className="registration">Reg. No: MH-12345</p>
                                    </div>
                                </div>

                                <div className="qr-code-display">
                                    <div className="qr-placeholder">
                                        <QrCode size={120} />
                                    </div>
                                    <p className="qr-instruction">Scan to book appointment</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="scan-animation"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <motion.div
                                    className="scan-line"
                                    animate={{ y: [0, 100, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default QRSection;
