// components/blog/index.jsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCardMain from './blog-card-main';

export default function BlogIndex({ posts }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '📚' },
    { id: 'android', name: 'Android', icon: '🤖' },
    { id: 'web', name: 'Web', icon: '🌐' },
    { id: 'it', name: 'IT', icon: '🛠️' }
  ];

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.tags.includes(activeCategory));

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Tech <span className="text-primary-500">Blog</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing knowledge on Android, Web, and IT Support
        </p>
      </motion.header>

      {/* Featured Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
            <span className="text-primary-500">★</span> Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <BlogCardMain key={post.slug} blog={post} featured />
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
            }`}
          >
            <span>{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Posts Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          {activeCategory === 'all' ? 'Latest' : categories.find(c => c.id === activeCategory).name} Articles
        </h2>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCardMain key={post.slug} blog={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
