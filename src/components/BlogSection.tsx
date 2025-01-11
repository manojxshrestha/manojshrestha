import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export const BlogSection = () => {
  const blogs = [
    {
      title: 'Top 10 Penetration Testing Tools',
      excerpt: 'A comprehensive guide to the most effective penetration testing tools in 2024.',
      url: 'https://medium.com/@manojxshrestha/top-10-penetration-testing-tools',
      date: 'Mar 1, 2024',
    },
    {
      title: 'How to Secure Your Network',
      excerpt: 'Essential steps and best practices for maintaining a secure network infrastructure.',
      url: 'https://medium.com/@manojxshrestha/how-to-secure-your-network',
      date: 'Feb 15, 2024',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-gradient">Blog</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="block p-6 rounded-xl bg-opacity-10 backdrop-blur-lg bg-white neon-border"
            >
              <BookOpen className="w-8 h-8 text-[var(--neon-purple)] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[var(--neon-blue)]">
                {blog.title}
              </h3>
              <p className="text-gray-300 mb-4">{blog.excerpt}</p>
              <p className="text-[var(--neon-green)]">{blog.date}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};