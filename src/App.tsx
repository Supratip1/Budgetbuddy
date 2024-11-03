import React, { useState, useEffect } from 'react';
import { OnboardingScreen } from './components/OnboardingScreen';
import { AuthScreen } from './components/AuthScreen';
import { Dashboard } from './components/Dashboard';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showOnboarding) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  if (!isAuthenticated) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return <Dashboard />;
}