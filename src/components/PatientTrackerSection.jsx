import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Pill, Activity, Apple, BookOpen, TrendingUp } from 'lucide-react';
import { mockData } from '../mock/mockData';

const iconMap = {
    Droplets,
    Pill,
    Activity,
    Apple,
    BookOpen
};

const PatientTrackerSection = () => {
    const { patientTracker } = mockData;

    return (
        <section className="section patient-tracker-section">
            <div className="container">
                <motion.div
                    className="section-header centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>{patientTracker.title}</h2>
                    <p className="section-description">{patientTracker.description}</p>
                </motion.div>

                <div className="tracker-grid">
                    {patientTracker.trackers.map((tracker, index) => {
                        const Icon = iconMap[tracker.icon];
                        return (
                            <motion.div
                                key={index}
                                className="tracker-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="tracker-icon">
                                    <Icon size={32} />
                                </div>
                                <h3>{tracker.name}</h3>
                                <p>{tracker.description}</p>

                                {/* Animated progress indicator */}
                                <motion.div
                                    className="tracker-progress"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                                >
                                    <div className="progress-bar" />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Health dashboard mockup */}
                <motion.div
                    className="health-dashboard glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="dashboard-content">
                        <div className="dashboard-left">
                            <img
                                src="https://images.pexels.com/photos/3970331/pexels-photo-3970331.jpeg"
                                alt="Health Dashboard"
                                className="dashboard-image"
                            />
                        </div>
                        <div className="dashboard-right">
                            <h3>Your Health at a Glance</h3>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <Droplets size={24} className="stat-icon" />
                                    <div>
                                        <p className="stat-value">2.5L</p>
                                        <p className="stat-label">Water Today</p>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Activity size={24} className="stat-icon" />
                                    <div>
                                        <p className="stat-value">8,547</p>
                                        <p className="stat-label">Steps</p>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <TrendingUp size={24} className="stat-icon" />
                                    <div>
                                        <p className="stat-value">95%</p>
                                        <p className="stat-label">Goal Progress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PatientTrackerSection;
