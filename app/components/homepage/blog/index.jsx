"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCardMain from './blog-card-main';
import blogPosts from './utils/data/blogPosts';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeCategory));

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Category options
  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'android', name: 'Android Dev' },
    { id: 'web', name: 'Web Dev' },
    { id: 'it', name: 'IT Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Tech <span className="text-amber-400">Blog</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Sharing knowledge on Android, Web Development, and IT Support
        </motion.p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-amber-400">★</span> Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <BlogCardMain key={post.slug} blog={post} />
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-amber-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
          {activeCategory === 'all' ? 'All' : categories.find(c => c.id === activeCategory)?.name} Articles
        </h2>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No articles found in this category.</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <BlogCardMain key={post.slug} blog={post} />
            ))}
          </motion.div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-3xl mx-auto mt-24 mb-12 p-8 bg-gray-800/50 rounded-xl border border-gray-700 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
        <p className="text-gray-400 mb-6">
          Get the latest articles on Android, Web Development, and IT directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button className="px-6 py-2 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-400 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
