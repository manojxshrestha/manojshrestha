import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const timeline = [
    { year: 2018, event: 'Started Career in Cybersecurity' },
    { year: 2019, event: 'Achieved CEH Certification' },
    { year: 2020, event: 'Lead Security Analyst at TechCorp' },
    { year: 2022, event: 'CISSP Certification' },
    { year: 2023, event: 'Senior Security Consultant' },
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
        
        <div className="mb-12 text-lg text-gray-300 leading-relaxed">
          <p>
            With over 5 years of experience in cybersecurity, I specialize in penetration testing,
            vulnerability assessment, and security architecture. My expertise includes working with
            tools like Kali Linux, Wireshark, and Burp Suite to identify and mitigate security threats.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--neon-blue)] to-[var(--neon-purple)]" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              } mb-8`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'pl-8'
                }`}
              >
                <div className="bg-opacity-10 backdrop-blur-lg bg-white p-4 rounded-lg neon-border">
                  <h3 className="text-xl font-bold text-[var(--neon-blue)]">
                    {item.year}
                  </h3>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};