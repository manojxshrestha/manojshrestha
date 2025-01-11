import React from 'react';
import { motion } from 'framer-motion';

export const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Linux', level: 95 },
    { name: 'Metasploit', level: 85 },
    { name: 'Wireshark', level: 88 },
    { name: 'Burp Suite', level: 92 },
    { name: 'Network Security', level: 90 },
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-gradient">Skills</h2>

        <div className="grid gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-[var(--neon-blue)]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};