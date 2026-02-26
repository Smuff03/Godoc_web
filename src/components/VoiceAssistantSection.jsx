import React from 'react';
import { motion } from 'framer-motion';
import { Mic, MessageCircle, Brain, Sparkles } from 'lucide-react';
import { mockData } from '../mock/mockData';

const VoiceAssistantSection = () => {
    const { voiceAssistant } = mockData;

    return (
        <section className="section voice-assistant-section">
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
                        <h2>{voiceAssistant.title}</h2>
                        <p className="section-description">{voiceAssistant.description}</p>

                        <div className="feature-list">
                            {voiceAssistant.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="feature-icon">
                                        <Sparkles size={20} />
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
                        <div className="voice-demo">
                            {/* AI Orb */}
                            <motion.div
                                className="ai-orb"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    boxShadow: [
                                        '0 0 20px rgba(0, 191, 255, 0.3)',
                                        '0 0 60px rgba(0, 191, 255, 0.6)',
                                        '0 0 20px rgba(0, 191, 255, 0.3)'
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            >
                                <Brain size={48} />
                            </motion.div>

                            {/* Voice waves */}
                            <div className="voice-waves">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="wave"
                                        animate={{
                                            scaleY: [0.3, 1, 0.3],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: 'easeInOut'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Conversation bubbles */}
                            <motion.div
                                className="conversation"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    className="chat-bubble user-bubble"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <Mic size={16} />
                                    <span>"Remind me to take medicine at 8 PM"</span>
                                </motion.div>

                                <motion.div
                                    className="chat-bubble assistant-bubble"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1 }}
                                >
                                    <MessageCircle size={16} />
                                    <span>"Reminder set! I'll notify you at 8 PM"</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default VoiceAssistantSection;
