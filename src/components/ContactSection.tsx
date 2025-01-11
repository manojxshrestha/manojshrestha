import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export const ContactSection = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/manojxshrestha', color: 'var(--neon-purple)' },
    { icon: Linkedin, url: 'https://linkedin.com/in/manojxshrestha', color: 'var(--neon-blue)' },
    { icon: Twitter, url: 'https://twitter.com/manojxshrestha', color: 'var(--neon-blue)' },
    { icon: Facebook, url: 'https://facebook.com/manojxshrestha', color: 'var(--neon-blue)' },
    { icon: Instagram, url: 'https://instagram.com/manojxshrestha', color: 'var(--neon-purple)' },
  ];

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-gradient">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-opacity-10 backdrop-blur-lg bg-white border border-gray-600 focus:border-[var(--neon-blue)] focus:ring-1 focus:ring-[var(--neon-blue)] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-opacity-10 backdrop-blur-lg bg-white border border-gray-600 focus:border-[var(--neon-blue)] focus:ring-1 focus:ring-[var(--neon-blue)] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-opacity-10 backdrop-blur-lg bg-white border border-gray-600 focus:border-[var(--neon-blue)] focus:ring-1 focus:ring-[var(--neon-blue)] text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[var(--neon-blue)] text-black font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-opacity-10 backdrop-blur-lg bg-white"
                    style={{ color: social.color }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a
                href="mailto:contact@manojshrestha.com"
                className="flex items-center gap-2 text-[var(--neon-blue)] hover:text-[var(--neon-purple)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@manojshrestha.com
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};