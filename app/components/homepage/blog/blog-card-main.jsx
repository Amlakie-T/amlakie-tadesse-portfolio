// components/blog/blog-card-main.jsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegClock, FaBookmark } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const iconMap = {
  android: { icon: '🤖', color: 'bg-emerald-100 text-emerald-800' },
  web: { icon: '🌐', color: 'bg-blue-100 text-blue-800' },
  it: { icon: '🛠️', color: 'bg-purple-100 text-purple-800' }
};

export default function BlogCardMain({ blog, featured = false }) {
  const primaryTag = blog.tags?.[0] || 'tech';
  const tagConfig = iconMap[primaryTag] || { icon: '📝', color: 'bg-gray-100 text-gray-800' };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-bold rounded-full bg-primary-500 text-white">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.cover_image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`flex items-center justify-center w-8 h-8 rounded-full ${tagConfig.color} text-sm`}>
            {tagConfig.icon}
          </span>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <FaRegClock size={12} />
            <span>{blog.read_time}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
          {blog.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label={`Read ${blog.title}`}
        >
          Read article
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring' }}
          >
            <FiArrowUpRight />
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
}
