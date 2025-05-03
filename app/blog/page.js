// app/blog/page.js
import BlogIndex from '@/components/blog';
import { getBlogPosts } from '@/utils/data/blogPost';

export async function generateMetadata() {
  return {
    title: 'Tech Blog | Android, Web & IT Insights',
    description: 'Expert articles on Android development, Web technologies, and IT support solutions',
    openGraph: {
      images: ['/og-blog.jpg'],
    },
  };
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogIndex posts={posts} />;
}
