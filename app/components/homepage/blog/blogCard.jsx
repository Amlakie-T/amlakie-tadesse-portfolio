export default function blogCard({ post }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-gray-600">{post.excerpt}</p>
      <a href={`/blog/${post.slug}`} className="text-blue-500">
        Read more →
      </a>
    </div>
  )
}
