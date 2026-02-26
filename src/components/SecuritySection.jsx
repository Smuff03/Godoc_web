import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Lock, Server, CheckCircle } from 'lucide-react';
import { mockData } from '../mock/mockData';

const iconMap = {
    Shield,
    Cloud,
    Lock
};

const SecuritySection = () => {
    const { security } = mockData;

    return (
        <section className="section security-section">
            <div className="container">
                <motion.div
                    className="section-header centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>{security.title}</h2>
                    <p className="section-description">{security.description}</p>
                </motion.div>

                <div className="security-grid">
                    {security.features.map((feature, index) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <motion.div
                                key={index}
                                className="security-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                            >
                                <motion.div
                                    className="security-icon"
                                    animate={{
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: index * 0.5
                                    }}
                                >
                                    <Icon size={48} />
                                </motion.div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="security-badge">
                                    <CheckCircle size={16} />
                                    <span>Verified</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Security visual */}
                <motion.div
                    className="security-visual"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="security-banner glass-card">
                        <div className="banner-content">
                            <div className="banner-left">
                                <img
                                    src="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg"
                                    alt="Secure Healthcare Technology"
                                    className="security-image"
                                />
                            </div>
                            <div className="banner-right">
                                <Server size={32} />
                                <h3>HIPAA Compliant Infrastructure</h3>
                                <p>Your health data is protected with industry-leading security standards and compliance certifications.</p>
                                <div className="compliance-badges">
                                    <span className="badge">HIPAA</span>
                                    <span className="badge">GDPR</span>
                                    <span className="badge">ISO 27001</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecuritySection;
