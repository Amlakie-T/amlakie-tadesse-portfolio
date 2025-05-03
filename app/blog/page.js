import blogList from '@/components/homepage/blog/blogList'
import { getPosts } from '@/utils/data/blogData'
export default function blogPage() {
  const posts = getPosts()
  return <blogList posts={posts} />
}
