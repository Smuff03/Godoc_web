import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { mockData } from '../mock/mockData';

const Footer = () => {
    const { footer } = mockData;

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img
                                src="https://customer-assets.emergentagent.com/job_scan-and-book/artifacts/wvm15hrz_Godoc_logo%20.ico"
                                alt="GoDoc Logo"
                            />
                            <span>GoDoc</span>
                        </div>
                        <p className="footer-tagline">
                            Revolutionizing healthcare management, one appointment at a time.
                        </p>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <Mail size={16} />
                                <span>support@trygodoc.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={16} />
                                <span>Healthcare Innovation Hub</span>
                            </div>
                        </div>
                    </div>

                    {footer.sections.map((section, index) => (
                        <div key={index} className="footer-section">
                            <h3>{section.title}</h3>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={linkIndex}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {link}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p>{footer.copyright}</p>
                    <p className="footer-love">
                        Made with <Heart size={14} className="heart-icon" /> for better healthcare
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
