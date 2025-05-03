// utils/data/blogPost.js
const blogPosts = [
  {
    title: "Mastering Kotlin Coroutines in Android",
    excerpt: "Learn how to simplify asynchronous programming in Android apps",
    cover_image: "/blog/android-coroutines.jpg",
    tags: ["android", "kotlin"],
    read_time: "8 min read",
    slug: "kotlin-coroutines-guide",
    date: "2023-11-15",
    featured: true,
    content: "# Full Markdown content here..."
  },
  // Add all other posts...
];

// Simulate API fetch
export async function getBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}
