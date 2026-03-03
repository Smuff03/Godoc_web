import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header glass-card">
            <div className="header-content">
                <div className="logo">
                    <img src="https://customer-assets.emergentagent.com/job_scan-and-book/artifacts/wvm15hrz_Godoc_logo%20.ico" alt="GoDoc Logo" className="logo-image" />
                    <span className="logo-text">GoDoc</span>
                </div>

                {/* The Drawer */}
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#security" onClick={() => setIsOpen(false)}>Security</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <div className="mobile-only-actions">
                        <button className="btn-contact" onClick={onContactClick}>Contact</button>
                        <ThemeToggle />
                    </div>
                </nav>

                <div className="header-actions desktop-only">
                    <button className="btn-contact" onClick={onContactClick}>Contact</button>
                    <ThemeToggle />
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
