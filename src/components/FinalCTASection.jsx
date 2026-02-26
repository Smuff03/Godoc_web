import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { mockData } from '../mock/mockData';

const FinalCTASection = ({ onDownloadClick, onTesterClick }) => {
    const { finalCTA } = mockData;

    return (
        <section className="section final-cta-section">
            <div className="container">
                <motion.div
                    className="cta-wrapper glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="cta-sparkles"
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    >
                        <Sparkles size={100} className="sparkle-icon" />
                    </motion.div>

                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h2>{finalCTA.title}</h2>
                        <p>{finalCTA.description}</p>

                        <div className="cta-buttons">
                            <motion.button
                                className="btn-primary large"
                                onClick={onDownloadClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={24} />
                                {finalCTA.buttons.primary}
                            </motion.button>

                            <motion.button
                                className="btn-secondary large"
                                onClick={onTesterClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {finalCTA.buttons.secondary}
                                <ArrowRight size={24} />
                            </motion.button>
                        </div>

                        <p className="cta-note">
                            Beta version available for Android. iOS coming soon!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTASection;
