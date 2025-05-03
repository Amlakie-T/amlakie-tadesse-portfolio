"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaRegClock, 
  FaAndroid, 
  FaCode, 
  FaNetworkWired,
  FaBookmark
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { formatDate } from "@/lib/utils"; // You'll create this utility

const BlogCardMain = ({ blog }) => {
  // Get appropriate icon based on tags
  const getTagIcon = () => {
    if (blog.tags?.includes("android")) 
      return <FaAndroid className="text-emerald-400" />;
    if (blog.tags?.includes("web")) 
      return <FaCode className="text-sky-400" />;
    if (blog.tags?.includes("it")) 
      return <FaNetworkWired className="text-purple-400" />;
    return <FaBookmark className="text-amber-400" />;
  };

  // Get tag color classes
  const getTagColor = () => {
    if (blog.tags?.includes("android")) return "bg-emerald-900/30 text-emerald-400";
    if (blog.tags?.includes("web")) return "bg-sky-900/30 text-sky-400";
    if (blog.tags?.includes("it")) return "bg-purple-900/30 text-purple-400";
    return "bg-gray-800 text-gray-400";
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm"
    >
      {/* Featured badge */}
      {blog.featured && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-bold text-gray-900">
          Featured
        </div>
      )}

      {/* Image container with gradient overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.cover_image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={blog.featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta row */}
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs ${getTagColor()}`}>
            {getTagIcon()}
            <span>{blog.tags?.[0] || "Tech"}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <FaRegClock size={10} />
            <span>{blog.read_time || "5 min read"}</span>
          </div>
          <span className="text-xs text-gray-600">
            {formatDate(blog.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-amber-400">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-2 text-sm text-gray-400">
          {blog.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 hover:text-amber-300"
          aria-label={`Read ${blog.title}`}
        >
          Read article
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring" }}
          >
            <FiArrowUpRight />
          </motion.span>
        </Link>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-600/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  );
};

export default BlogCardMain;
