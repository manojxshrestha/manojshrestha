import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <p className="text-gray-400">
          © {new Date().getFullYear()} Manoj Shrestha. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};