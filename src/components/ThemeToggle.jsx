import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                cursor: 'pointer',
                border: '2px solid #0ea5e9',
                background: theme === 'light' ? '#fff' : '#1a202c',
                boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)',
                zIndex: 9999,
                padding: '0',
                marginLeft: '10px'
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'light' ? (
                        <Moon size={24} color="#4f46e5" fill="#4f46e5" />
                    ) : (
                        <Sun size={24} color="#fbbf24" fill="#fbbf24" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggle;