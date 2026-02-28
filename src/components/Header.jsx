import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            className="header glass-card"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className="header-content">

                {/* Logo */}
                <motion.div className="logo" whileHover={{ scale: 1.05 }}>
                    <img
                        src="https://customer-assets.emergentagent.com/job_scan-and-book/artifacts/wvm15hrz_Godoc_logo%20.ico"
                        alt="GoDoc Logo"
                        className="logo-image"
                    />
                    <span className="logo-text">GoDoc</span>
                </motion.div>

                {/* Navigation */}
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#security" onClick={() => setIsOpen(false)}>Security</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>

                    {/* Mobile Only Buttons */}
                    <div className="mobile-actions">
                        <motion.button className="btn-contact" onClick={onContactClick}>
                            <Mail size={18} />
                            <span className="contact-text">Contact</span>
                        </motion.button>
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Desktop Actions */}
                <div className="header-actions">
                    <motion.button className="btn-contact" onClick={onContactClick}>
                        <Mail size={18} />
                        <span className="contact-text">Contact</span>
                    </motion.button>
                    <ThemeToggle />
                </div>

                {/* Hamburger (Mobile Only) */}
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </div>

            </div>
        </motion.header>
    );
};

export default Header;