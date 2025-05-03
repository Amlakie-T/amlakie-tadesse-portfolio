// data/blogPosts.js
const blogPosts = [
  // Android Development Posts
  {
    title: "Kotlin Coroutines: Mastering Async on Android",
    excerpt: "Learn how to simplify asynchronous programming in Android using Kotlin Coroutines with practical examples.",
    cover_image: "/blog/android-coroutines.jpg",
    tags: ["android", "kotlin"],
    read_time: "8 min read",
    slug: "kotlin-coroutines-guide",
    date: "2023-11-15",
    featured: true
  },
  {
    title: "Jetpack Compose vs XML: Modern Android UI Showdown",
    excerpt: "Comparing traditional XML layouts with Jetpack Compose and when to use each approach.",
    cover_image: "/blog/jetpack-compose.jpg",
    tags: ["android", "ui"],
    read_time: "6 min read",
    slug: "jetpack-compose-vs-xml",
    date: "2023-10-28"
  },

  // Web Development Posts  
  {
    title: "Next.js 14 Performance Optimization Tricks",
    excerpt: "Advanced techniques to make your Next.js application blazing fast with App Router.",
    cover_image: "/blog/nextjs-optimization.jpg",
    tags: ["web", "nextjs"],
    read_time: "10 min read",
    slug: "nextjs-performance",
    date: "2023-12-05",
    featured: true
  },
  {
    title: "React State Management in 2024: Beyond Redux",
    excerpt: "Exploring modern alternatives like Zustand, Jotai, and React Query for state management.",
    cover_image: "/blog/react-state.jpg",
    tags: ["web", "react"],
    read_time: "7 min read",
    slug: "react-state-management",
    date: "2023-11-20"
  },

  // IT Support Posts
  {
    title: "Network Troubleshooting: Essential Commands Cheat Sheet",
    excerpt: "Master ping, traceroute, netstat, and other CLI tools for diagnosing network issues.",
    cover_image: "/blog/network-troubleshooting.jpg",
    tags: ["it", "networking"],
    read_time: "5 min read",
    slug: "network-troubleshooting",
    date: "2023-09-10"
  },
  {
    title: "Windows vs Linux for IT Support: When to Use Each",
    excerpt: "Practical comparison for desktop support technicians managing mixed environments.",
    cover_image: "/blog/windows-linux.jpg",
    tags: ["it", "sysadmin"],
    read_time: "9 min read",
    slug: "windows-vs-linux",
    date: "2023-08-22"
  },

  // Bonus Post
  {
    title: "Building a Portfolio That Gets You Hired",
    excerpt: "Combine your development and IT skills into a standout portfolio with these tips.",
    cover_image: "/blog/portfolio-tips.jpg",
    tags: ["career"],
    read_time: "6 min read",
    slug: "portfolio-tips",
    date: "2023-12-12",
    featured: true
  }
];

// Sort by date (newest first)
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default blogPosts;
