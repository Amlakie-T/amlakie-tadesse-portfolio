import blogCard from './blogCard'

export default function blogList({ posts }) {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <blogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
