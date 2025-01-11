import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export const CertificationsSection = () => {
  const certifications = [
    {
      name: 'Certified Ethical Hacker (CEH)',
      org: 'EC-Council',
      date: '2019',
      icon: Award,
    },
    {
      name: 'CISSP',
      org: '(ISC)²',
      date: '2022',
      icon: Award,
    },
    {
      name: 'CompTIA Security+',
      org: 'CompTIA',
      date: '2018',
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-gradient">
          Certifications
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-opacity-10 backdrop-blur-lg bg-white neon-border"
            >
              <cert.icon className="w-12 h-12 text-[var(--neon-blue)] mb-4" />
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-gray-400">{cert.org}</p>
              <p className="text-[var(--neon-green)]">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};