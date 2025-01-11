import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Code } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--dark-bg)] z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-6 text-gradient">
          Manoj Shrestha
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Cybersecurity Professional & Ethical Hacker
        </p>
        
        <div className="flex justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-lg bg-opacity-20 backdrop-blur-lg bg-white"
          >
            <Shield className="w-8 h-8 text-[var(--neon-blue)]" />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-lg bg-opacity-20 backdrop-blur-lg bg-white"
          >
            <Lock className="w-8 h-8 text-[var(--neon-green)]" />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-lg bg-opacity-20 backdrop-blur-lg bg-white"
          >
            <Code className="w-8 h-8 text-[var(--neon-purple)]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};