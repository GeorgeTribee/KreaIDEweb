import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Analytics from './components/Analytics';
import OnboardingModal from './components/OnboardingModal';

const GOOGLE_CLIENT_ID = '540076013424-0k1pojj38ivad53vdrek1icigrnv4cuh.apps.googleusercontent.com';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <div className="min-h-screen bg-black text-zinc-300 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
          {/* Background Effect */}
          {loading && <Preloader onComplete={() => setLoading(false)} />}

          {!loading && (
            <div className="animate-fade-in">
              <Navbar />

              <main>
                <Hero />
                <Features />
                <Architecture />
                <Pricing />
                <Analytics />
                <Testimonials />
                <Partners />
              </main>

              <Footer />
            </div>
          )}

          {/* Onboarding Modal */}
          <OnboardingModal />
        </div>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
