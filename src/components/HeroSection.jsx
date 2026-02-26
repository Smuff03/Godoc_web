import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, QrCode } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = ({ onDownloadClick, onTesterClick }) => {
    const phoneRef = useRef(null);
    const qrRef = useRef(null);

    useEffect(() => {
        // GSAP animations for phone mockup
        const ctx = gsap.context(() => {
            gsap.from(phoneRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Floating animation
            gsap.to(phoneRef.current, {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // QR code pulse animation
            gsap.to(qrRef.current, {
                scale: 1.1,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        YOUR HEALTH,
                        ONE TAP AWAY
                    </motion.h1>

                    <motion.p
                        className="hero-subheadline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Book. Scan. Track. Manage.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <motion.button
                            className="btn-primary"
                            onClick={onDownloadClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={20} />
                            Download Beta APK
                        </motion.button>

                        <motion.button
                            className="btn-secondary"
                            onClick={onTesterClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Join as Tester
                            <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div ref={phoneRef} className="phone-mockup">
                        <div className="phone-frame">
                            <img
                                src="https://images.unsplash.com/photo-1767449441925-737379bc2c4d"
                                alt="GoDoc App Interface"
                                className="phone-screen"
                            />
                            <div ref={qrRef} className="qr-overlay">
                                <QrCode size={48} className="qr-icon" />
                            </div>
                        </div>
                    </div>

                    {/* Floating medical icons */}
                    <motion.div
                        className="floating-icon icon-1"
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        <div className="icon-circle">📋</div>
                    </motion.div>

                    <motion.div
                        className="floating-icon icon-2"
                        animate={{
                            y: [0, 15, 0],
                            x: [0, -10, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.5
                        }}
                    >
                        <div className="icon-circle">💊</div>
                    </motion.div>

                    <motion.div
                        className="floating-icon icon-3"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 5, 0]
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1
                        }}
                    >
                        <div className="icon-circle">🏥</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
