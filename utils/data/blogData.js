const posts = [
  {
    title: "Kotlin Coroutines Guide",
    excerpt: "Learn async programming in Android",
    image: "/public/image/android-coroutines.jpg",
    tags: ["android"],
    slug: "kotlin-guide",
    date: "2023-11-15"
  }
  // Add more posts...
]

export function getPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}
