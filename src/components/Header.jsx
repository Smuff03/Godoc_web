import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext'; // Check this path!

const Header = ({ onContactClick }) => {
    return (
        <motion.header
            className="header glass-card"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className="header-content">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src="https://customer-assets.emergentagent.com/job_scan-and-book/artifacts/wvm15hrz_Godoc_logo%20.ico"
                        alt="GoDoc Logo"
                        className="logo-image"
                    />
                    <span className="logo-text">GoDoc</span>
                </motion.div>

                <nav className="nav-menu">
                    <a href="#features">Features</a>
                    <a href="#security">Security</a>
                    <a href="#about">About</a>
                </nav>

                <div className="header-actions">
                    <motion.button className="btn-contact" onClick={onContactClick}>
                        <Mail size={18} />
                        Contact
                    </motion.button>
                    <ThemeToggle />
                </div>
            </div>
        </motion.header>

    );
};


export default Header;
