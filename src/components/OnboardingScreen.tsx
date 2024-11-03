import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Wallet, TrendingUp } from 'lucide-react';

const slides = [
  {
    icon: Wallet,
    title: 'Track Your Expenses',
    description: 'Easily monitor your daily spending and stay on top of your finances',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: PieChart,
    title: 'Smart Insights',
    description: 'Get AI-powered insights to help you make better financial decisions',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'Achieve Your Goals',
    description: 'Set and track financial goals with beautiful visualizations',
    color: 'from-emerald-400 to-emerald-600'
  }
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      onComplete();
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col items-center justify-center p-8"
        >
          <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${slides[currentSlide].color} p-6 mb-8`}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {React.createElement(slides[currentSlide].icon, { className: "w-full h-full text-white" })}
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
          >
            {slides[currentSlide].title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 text-center mb-12"
          >
            {slides[currentSlide].description}
          </motion.p>
          <div className="flex space-x-2 mb-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg"
          >
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}