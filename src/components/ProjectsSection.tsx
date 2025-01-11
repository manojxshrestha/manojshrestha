import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Advanced Phishing Detection System',
      description: 'ML-powered system to detect and prevent sophisticated phishing attacks',
      tools: ['Python', 'TensorFlow', 'Flask', 'Docker'],
      github: 'https://github.com/manojxshrestha/phishing-detection',
    },
    {
      title: 'Network Vulnerability Scanner',
      description: 'Automated tool for identifying network vulnerabilities and security gaps',
      tools: ['Python', 'Nmap', 'SQLite', 'Vue.js'],
      github: 'https://github.com/manojxshrestha/vuln-scanner',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-gradient">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-card"
            >
              <h3 className="text-xl font-bold mb-4 text-[var(--neon-blue)]">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm rounded-full bg-opacity-20 backdrop-blur-lg bg-white text-[var(--neon-green)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--neon-purple)] hover:text-[var(--neon-blue)] transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};