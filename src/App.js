import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QRSection from './components/QRSection';
import CampSection from './components/CampSection';
import PrivateCaseSection from './components/PrivateCaseSection';
import PatientTrackerSection from './components/PatientTrackerSection';
import VoiceAssistantSection from './components/VoiceAssistantSection';
import SecuritySection from './components/SecuritySection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import TesterModal from './components/TesterModal';
import './styles/Landing.css';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isTesterModalOpen, setIsTesterModalOpen] = useState(false);

  const handleDownloadClick = () => {
    // 1. Show the success toast
    toast.success('Starting download...', {
      icon: '📱',
      duration: 3000
    });

    // 2. Trigger the APK download
    const apkLink = "https://github.com/Smuff03/Godoc_web/releases/download/v0.1/godoc_v0.1.apk";
    window.location.href = apkLink;
  };

  const handleTesterClick = () => {
    toast.success('Download link will be sent to your email!', {
      icon: '📱',
      duration: 3000
    });

  };


  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--card-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(12px)'
            },
            success: {
              iconTheme: {
                primary: 'var(--accent-primary)',
                secondary: '#fff'
              }
            }
          }}
        />

        <Header onContactClick={handleContactClick} />

        <main className="main-content">
          <HeroSection
            onDownloadClick={handleDownloadClick}
            onTesterClick={handleTesterClick}
          />

          <QRSection />
          <CampSection />
          <PrivateCaseSection />
          <PatientTrackerSection />
          <VoiceAssistantSection />
          <SecuritySection />

          <FinalCTASection
            onDownloadClick={handleDownloadClick}
            onTesterClick={handleTesterClick}
          />
        </main>

        <Footer />

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />

        <TesterModal
          isOpen={isTesterModalOpen}
          onClose={() => setIsTesterModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
